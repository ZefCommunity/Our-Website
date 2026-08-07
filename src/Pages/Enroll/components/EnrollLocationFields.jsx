import { useMemo } from 'react';
import { Controller, useWatch } from 'react-hook-form';
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import EnrollSelect from './EnrollSelect';
import { ENROLL_INPUT } from './enrollFormUi';

function prioritizeNigeria(countries = []) {
  return [...countries].sort((a, b) => {
    if (a.country === 'Nigeria') return -1;
    if (b.country === 'Nigeria') return 1;
    return a.country.localeCompare(b.country);
  });
}

export default function EnrollLocationFields({
  control,
  register,
  setValue,
  countries,
  countriesByName,
  errors,
  disabled = false,
}) {
  const country = useWatch({ control, name: 'country' });
  const countryOptions = useMemo(
    () => prioritizeNigeria(countries).map((item) => item.country),
    [countries],
  );
  const cityOptions = countriesByName[country]?.cities ?? [];

  return (
    <>
      <FieldGroup className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Controller
          name="country"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={Boolean(fieldState.error) || undefined}>
              <FieldLabel htmlFor="enroll-country">
                Country <span className="text-red-600">*</span>
              </FieldLabel>
              <EnrollSelect
                id="enroll-country"
                value={field.value}
                options={countryOptions}
                placeholder="Select a country"
                disabled={disabled}
                invalid={Boolean(fieldState.error)}
                onChange={(next) => {
                  field.onChange(next);
                  setValue('city', '', {
                    shouldValidate: false,
                    shouldDirty: true,
                  });
                }}
              />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Field data-invalid={Boolean(errors.state) || undefined}>
          <FieldLabel htmlFor="enroll-state">
            State / Province <span className="text-red-600">*</span>
          </FieldLabel>
          <input
            id="enroll-state"
            autoComplete="address-level1"
            placeholder="e.g. Lagos"
            disabled={disabled}
            aria-invalid={Boolean(errors.state)}
            className={ENROLL_INPUT}
            {...register('state')}
          />
          {errors.state && <FieldError errors={[errors.state]} />}
        </Field>
      </FieldGroup>

      <Controller
        name="city"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={Boolean(fieldState.error) || undefined}>
            <FieldLabel htmlFor="enroll-city">
              City <span className="text-red-600">*</span>
            </FieldLabel>
            <EnrollSelect
              id="enroll-city"
              value={field.value}
              options={cityOptions}
              placeholder={
                country ? 'Select a city' : 'Select a country first'
              }
              disabled={disabled || !country}
              invalid={Boolean(fieldState.error)}
              onChange={field.onChange}
            />
            {fieldState.error && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
    </>
  );
}
