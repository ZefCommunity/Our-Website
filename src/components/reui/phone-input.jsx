"use client";
import { createContext, useContext, useMemo, useState } from "react";
import * as BasePhoneInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { GlobeIcon } from "lucide-react";

const PhoneInputContext = createContext({
  variant: "default",
  popupClassName: undefined,
  scrollAreaClassName: undefined,
});

function PhoneInput({
  className,
  variant,
  popupClassName,
  scrollAreaClassName,
  onChange,
  value,
  ...props
}) {
  const phoneInputSize = variant || "default";
  return (
    <PhoneInputContext.Provider
      value={{ variant: phoneInputSize, popupClassName, scrollAreaClassName }}
    >
      <BasePhoneInput.default
        className={cn(
          "flex relative ",
          props["aria-invalid"] &&
            "[&_*[data-slot=combobox-trigger]]:border-destructive  [&_*[data-slot=combobox-trigger]]:ring-destructive/50",
          className,
        )}
        flagComponent={FlagComponent}
        countrySelectComponent={CountrySelect}
        inputComponent={InputComponent}
        smartCaret={false}
        value={value || undefined}
        onChange={(value) => onChange?.(value || "")}
        {...props}
      />
    </PhoneInputContext.Provider>
  );
}

function InputComponent({ className, ...props }) {
  const { variant } = useContext(PhoneInputContext);

  return (
    <Input
      className={cn(
        "ring-none!  outline-none! pl-9 focus:z-1",
        variant === "sm" && "h-7",
        variant === "lg" && "h-9",
        className,
      )}
      {...props}
    />
  );
}

function CountrySelect({ disabled = true, value: selectedCountry }) {
  return (
    <Button
      variant="outline"
      className={cn(
        " border-none absolute flex gap-1  leading-none mt-0.5 ",
        disabled && "!opacity-100",
      )}
      disabled={disabled}
    >
      <FlagComponent country={selectedCountry} countryName={selectedCountry} />
    </Button>
  );
}

function FlagComponent({ country, countryName }) {
  const Flag = flags[country];

  return (
    <span className="flex h-4 w-4 items-center justify-center [&_svg:not([class*='size-'])]:size-full! [&_svg:not([class*='size-'])]:rounded-[5px]">
      {Flag ? (
        <Flag title={countryName} />
      ) : (
        <GlobeIcon className="size-4 opacity-60" />
      )}
    </span>
  );
}

export { PhoneInput };
