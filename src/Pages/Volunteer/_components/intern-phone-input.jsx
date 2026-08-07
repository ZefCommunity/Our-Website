import { Controller, useWatch } from 'react-hook-form';
import { PhoneInput } from '@/components/reui/phone-input';
import { Field, FieldError, FieldLabel } from '@/components/ui/field';

export default function InternPhoneInput({
  control,
  countries,
  disabled = false,
}) {
  const country = useWatch({ control, name: 'country' });

  return (
    <Controller
      name="phone"
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={Boolean(fieldState.error) || undefined}>
          <FieldLabel htmlFor="volunteer-phone">
            Phone Number <span className="text-red-600">*</span>
          </FieldLabel>
          <PhoneInput
            id="volunteer-phone"
            variant="sm"
            onChange={field.onChange}
            value={field.value}
            placeholder={
              country ? 'Enter phone number' : 'Select a country first'
            }
            defaultCountry={countries[country]?.iso2 || ''}
            disabled={disabled || !country}
          />
          {fieldState.error ? (
            <FieldError errors={[fieldState.error]} />
          ) : null}
        </Field>
      )}
    />
  );
}
