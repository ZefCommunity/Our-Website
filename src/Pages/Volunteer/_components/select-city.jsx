import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useWatch } from "react-hook-form";

export default function SelectCity({ value, onChange, countries, control }) {
  // useWatch
  const country = useWatch({ control, name: "country" });

  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full max-w-full">
        <SelectValue placeholder="Select a City" />
      </SelectTrigger>
      <SelectContent className="bg-white border-none">
        <SelectGroup className="border-none">
          {countries[country]?.cities.map((city) => (
            <SelectItem className="hover:bg-slate-50" key={city} value={city}>
              {city}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
