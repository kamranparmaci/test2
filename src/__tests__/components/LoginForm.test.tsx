import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import LoginForm from '../../components/forms/login-form';
import { UserServices } from '../../services/user-services';

const setup = () => {
  const { login } = UserServices();
  render(<LoginForm submit={login} />);
  const usernameField = screen.getByLabelText('Username');
  const passwordField = screen.getByLabelText('Password');

  const button = screen.getByText(/login/i);
  return {
    usernameField,
    passwordField,
    button,
  };
};

describe('login form', () => {
  test('check username input is rendered', () => {
    const { usernameField } = setup();

    expect(usernameField).toBeInTheDocument();
  });

  test('check password input is rendered', () => {
    const { passwordField } = setup();
    expect(passwordField).toBeInTheDocument();
  });

  test('button disabled when inputs is empty', () => {
    const { usernameField, passwordField, button } = setup();

    expect(button).toBeDisabled();

    fireEvent.change(usernameField, { target: { value: 'kamran' } });
    fireEvent.change(passwordField, { target: { value: 'password' } });

    expect(button).toBeEnabled();
  });

  // test('rendered minLength error for username input', async () => {
  //   const { usernameField, button } = setup();
  //   fireEvent.submit(button);

  //   fireEvent.change(usernameField, {
  //     target: {
  //       value: 'us',
  //     },
  //   });

  //   const usernameError = await screen.findByRole('paragraph');

  //   expect(usernameError).toHaveTextContent(
  //     /username must be at least 3 characters long/i
  //   );
  // });

  // test('rendered maxLength error for username input', async () => {
  //   const { usernameField, button } = setup();
  //   fireEvent.submit(button);

  //   fireEvent.input(usernameField, {
  //     target: {
  //       value: 'my name is david',
  //     },
  //   });

  //   const usernameError = await screen.findByText(
  //     /username must be a maximum of 15 characters/i
  //   );
  //   expect(usernameError).toBeInTheDocument();

  //   // const usernameError = screen.getByText(
  //   //   /username must be a maximum of 15 characters/i
  //   // );

  //   // expect(usernameError).toBeInTheDocument();
  // });

  // test('rendered minLength error for password input', async () => {
  //   const { passwordField, button } = setup();
  //   fireEvent.submit(button);

  //   fireEvent.change(passwordField, {
  //     target: {
  //       value: 'pass',
  //     },
  //   });

  //   await waitFor(() => {
  //     expect(
  //       screen.findByText(/password must be at least 8 characters long/i)
  //     ).toBeInTheDocument();
  //   });

  //   // const passwordError = screen.getByText(
  //   //   /password must be at least 8 characters long/i
  //   // );

  //   // expect(passwordError).toBeInTheDocument();
  // });
});
