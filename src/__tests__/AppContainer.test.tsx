import { render, screen } from '@testing-library/react';
import { Container } from 'inversify';
import { Provider, useContainer } from 'inversify-react';

describe('provider', () => {
  // const hookSpy = jest.spyOn("useContainer");
  const ChildComponent = () => {
    const resolvedContainer = useContainer();
    return <div data-testid="div">{resolvedContainer.id}</div>;
  };

  test('resolves container from context', () => {
    const container = new Container();

    render(
      <Provider container={container}>
        <ChildComponent />
      </Provider>
    );

    const text = screen.getByTestId(/div/i);
    expect(text).toBeInTheDocument();
  });
});
