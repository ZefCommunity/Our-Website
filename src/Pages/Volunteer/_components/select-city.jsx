import { useWatch } from 'react-hook-form';
import FormSelect from '@/components/forms/FormSelect';
import { FieldLabel } from '@/components/ui/field';

export default function SelectCity({
  value,
  onChange,
  countries,
  control,
  disabled = false,
  invalid = false,
  id = 'volunteer-city',
  showLabel = true,
}) {
  const country = useWatch({ control, name: 'country' });
  const options = countries[country]?.cities ?? [];

  return (
    <>
      {showLabel ? (
        <FieldLabel htmlFor={id}>
          City <span className="text-red-600">*</span>
        </FieldLabel>
      ) : null}
      <FormSelect
        id={id}
        value={value}
        onChange={onChange}
        options={options}
        placeholder={country ? 'Select a city' : 'Select a country first'}
        disabled={disabled || !country}
        invalid={invalid}
      />
    </>
  );
}
