import { render, fireEvent } from '@testing-library/react';

import EditFarmProfile from './page';

describe('EditFarmProfile', () => {
  it('updates farm name correctly', () => {
    const { getByPlaceholderText } = render(<EditFarmProfile />);
    const farmNameInput = getByPlaceholderText(
      'Boerderij naam'
    ) as HTMLInputElement;

    fireEvent.change(farmNameInput, { target: { value: 'Test Farm Name' } });
    expect(farmNameInput.value).toBe('Test Farm Name');
  });

  // Similarly, write more tests for other fields

  it('updates AdresGegevens correctly', () => {
    const { getByPlaceholderText } = render(<EditFarmProfile />);
    const streetInput = getByPlaceholderText('straat') as HTMLInputElement;

    fireEvent.change(streetInput, { target: { value: 'Test Street' } });
    expect(streetInput.value).toBe('Test Street');
  });

  it('updates Betaalmethodes correctly', () => {
    const { getByLabelText } = render(<EditFarmProfile />);
    const pinCheckbox = getByLabelText('Pin') as HTMLInputElement;

    fireEvent.click(pinCheckbox);
    expect(pinCheckbox.checked).toBe(true);
  });
});
