import { cleanup, fireEvent, render } from '@testing-library/react';
import { ButtonKUI } from '../src';

describe('ButtonKUI', () => {
  afterEach(cleanup);

  it('render with correct label', () => {
    const { getByText } = render(<ButtonKUI>Button</ButtonKUI>);
    expect(getByText('Button')).toBeTruthy();
  });

  it('render with correct label', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<ButtonKUI onClick={handleClick}>Button</ButtonKUI>);
    fireEvent.click(getByText('Button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
