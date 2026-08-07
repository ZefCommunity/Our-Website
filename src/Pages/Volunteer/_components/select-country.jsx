import { useMemo } from 'react';
import FormSelect from '@/components/forms/FormSelect';
import { FieldLabel } from '@/components/ui/field';

function prioritizeNigeria(countries = []) {
  return [...countries].sort((a, b) => {
    if (a.country === 'Nigeria') return -1;
    if (b.country === 'Nigeria') return 1;
    return a.country.localeCompare(b.country);
  });
}

export default function SelectCountry({
  countries,
  value,
  onChange,
  disabled = false,
  invalid = false,
  id = 'volunteer-country',
  showLabel = true,
}) {
  const options = useMemo(
    () => prioritizeNigeria(countries).map((item) => item.country),
    [countries],
  );

  return (
    <>
      {showLabel ? (
        <FieldLabel htmlFor={id}>
          Country <span className="text-red-600">*</span>
        </FieldLabel>
      ) : null}
      <FormSelect
        id={id}
        value={value}
        onChange={onChange}
        options={options}
        placeholder="Select a country"
        disabled={disabled}
        invalid={invalid}
      />
    </>
  );
}
