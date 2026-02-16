import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders the button with the provided text', () => {
    render(<Button data-testid="button" href="#about">Click me</Button>);

    const btnElement = screen.getByTestId('button');
    expect(btnElement).toHaveTextContent('Click me');
  });

  it('redirects to the correct relative URL', () => {
    render(<Button data-testid="button" href="#about">Click me</Button>);

    const btnElement = screen.getByTestId('button');
    expect(btnElement).toHaveAttribute('href', '#about');
  });

  it('applies the correct size classes', () => {
    render(<Button data-testid="button" href="#about" size="lg">Click me</Button>);

    const btnElement = screen.getByTestId('button');
    expect(btnElement).toHaveClass('py-3 px-6 rounded mt-6');
  });
});