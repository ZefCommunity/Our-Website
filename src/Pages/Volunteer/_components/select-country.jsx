import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectCountry({ countries, value, onChange }) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full max-w-full">
        <SelectValue placeholder="Select a Country" />
      </SelectTrigger>
      <SelectContent className="bg-white border-none">
        <SelectGroup className="border-none">
          {countries.map((country) => (
            <SelectItem
              className="hover:bg-slate-50"
              key={country.iso2}
              value={country.country}
            >
              {country.country}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
