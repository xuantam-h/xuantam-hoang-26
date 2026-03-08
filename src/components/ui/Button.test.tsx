import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders the button with the provided text', () => {
    render(<Button style="primary" data-testid="button" href="#about">Click me</Button>);

    const btnElement = screen.getByTestId('button');
    expect(btnElement).toHaveTextContent('Click me');
  });

  it('redirects to the correct relative URL', () => {
    render(<Button style="primary" data-testid="button" href="#about">Click me</Button>);

    const btnElement = screen.getByTestId('button');
    expect(btnElement).toHaveAttribute('href', '#about');
  });

  it('applies the correct size classes', () => {
    render(<Button style="primary" data-testid="button" href="#" size="lg">Click me</Button>);

    const btnElement = screen.getByTestId('button');
    expect(btnElement).toHaveClass('mt-6 text-lg');
  });

  it('applies the correct style classes', () => {
    render(<Button style="secondary" data-testid="button" href="#" size="lg">Click me</Button>);

    const btnElement = screen.getByTestId('button');
    expect(btnElement).toHaveClass('bg-gray-200 text-gray-800 hover:bg-gray-300');
  });

    it('applies the target attribute when specified', () => {
    render(<Button style="primary" data-testid="button" href="#" target="_blank">Click me</Button>);

    const btnElement = screen.getByTestId('button');
    expect(btnElement).toHaveAttribute('target', '_blank');
  });
}); 