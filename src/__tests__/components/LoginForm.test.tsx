import {
  render,
  screen,
  fireEvent,
  getByRole,
  findByTestId,
} from '@testing-library/react';
import LoginForm from '../../components/forms/login-form';
import { LoginFormProps } from '../../types/components/loginForm';

describe('LoginForm', () => {
  const onSubmitMock = jest.fn();
  const props: LoginFormProps = {
    submit: onSubmitMock,
  };

  const setup = () => {
    const { getByLabelText } = render(<LoginForm {...props} />);
    const usernameInput = getByLabelText('Username');
    const passwordInput = getByLabelText('Password');

    return {
      usernameInput,
      passwordInput,
    };
  };

  it('should call submit function with input values when form is submitted', () => {
    render(<LoginForm submit={onSubmitMock} />);
    const { passwordInput, usernameInput } = setup();
    const loginButton = screen.getByRole('login-button');
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(loginButton);

    expect(onSubmitMock).toHaveBeenCalledWith('testuser', 'password123');
  });

  it('should render form inputs correctly', () => {
    const { passwordInput, usernameInput } = setup();
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('should disable submit button when inputs are empty', () => {
    const loginButton = screen.getByRole('login-button');
    //  loginButton = screen.getByRole('login-button') as HTMLButtonElement;
    expect(loginButton).toBeDisabled();
  });

  it('should enable submit button when inputs are filled', () => {
    const { passwordInput, usernameInput } = setup();
    const loginButton = screen.getByRole('login-button');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(usernameInput).toHaveValue('testuser');
    expect(passwordInput).toHaveValue('password123');
    expect(loginButton).toBeEnabled();
  });
});
