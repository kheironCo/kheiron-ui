import { cleanup, fireEvent, logRoles, render, screen } from '@testing-library/react';
import { ButtonKUI } from '../src';

describe('ButtonKUI', () => {
  afterEach(cleanup);

  test('Render element', () => {
    render(<ButtonKUI>Button</ButtonKUI>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeTruthy();
  });

  test('Render with correct label', () => {
    render(<ButtonKUI>Button</ButtonKUI>);
    const buttonElement = screen.getByText(/Button/i);
    expect(buttonElement).toBe;

    cleanup();
    render(<ButtonKUI>Sign up</ButtonKUI>);
    expect(screen.getByText(/Sign/i)).toBeTruthy();
  });

  test('The button is functional', () => {
    const handleButton = jest.fn();
    const { container } = render(<ButtonKUI onClick={handleButton}>Button</ButtonKUI>);

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(handleButton).toHaveBeenCalled();
    logRoles(container);
  });
});
