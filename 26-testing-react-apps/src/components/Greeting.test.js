import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders Hello World as a text', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText(/hello world/i);
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders "original text" if the button was NOT clicked', () => {
    render(<Greeting />);

    const pElement = screen.getByText(/original text/i, { exact: false });
    expect(pElement).toBeInTheDocument();
  });

  test('renders "text changed" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert
    const pElement = screen.getByText(/changed/i, { exact: false });
    expect(pElement).toBeInTheDocument();
  });

  test('does NOT render "original text" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert
    const pElement = screen.queryByText(/original text/i, { exact: false });
    expect(pElement).toBeNull();
  });
});
