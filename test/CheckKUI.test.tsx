import { cleanup, fireEvent, render } from '@testing-library/react';
import { CheckKUI } from '../src';

describe('CheckKUI', () => {
  afterEach(cleanup);

  it('Render a input check', () => {
    const { container } = render(<CheckKUI />);
    const check = container.querySelector('[type="checkbox"]');
    expect(check).toBeTruthy();
  });

  it('Change value on click', () => {
    const handleCheck = jest.fn();
    const { container } = render(<CheckKUI getValue={handleCheck.mockReturnValue} />);
    const check = container.querySelector('[type="checkbox"]');

    if (check) fireEvent.click(check);
    expect(handleCheck()).toBe(true);

    if (check) fireEvent.click(check);
    expect(handleCheck()).toBe(false);
  });
});
