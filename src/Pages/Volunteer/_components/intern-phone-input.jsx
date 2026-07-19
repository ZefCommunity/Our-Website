import React from "react";
import { Controller, useWatch } from "react-hook-form";
import { PhoneInput } from "@/components/reui/phone-input";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
export default function InternPhoneInput({ control, countries }) {
  // useWatch
  const country = useWatch({ control, name: "country" });

  return (
    <Controller
      name="phone"
      control={control}
      render={({ field, fieldState }) => {
        fieldState.error;
        return (
          <Field>
            <FieldLabel>
              Phone <span className="text-red-600">*</span>
            </FieldLabel>
            <PhoneInput
              variant="sm"
              onChange={field.onChange}
              value={field.value}
              placeholder="Enter phone number"
              defaultCountry={countries[country]?.iso2 || ""}
              disabled={!country}
            />
            {fieldState?.error && <FieldError errors={[fieldState.error]} />}
          </Field>
        );
      }}
    />
  );
}
