import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const departmentOptions = [
  {
    label: "Administration",
    value: "administration",
  },
  {
    label: "Human Resources",
    value: "human-resources",
  },
  {
    label: "Social Media & Communications",
    value: "social-media-communications",
  },
  {
    label: "Graphics & Design",
    value: "graphics-design",
  },
  {
    label: "Programs & Community Development",
    value: "programs-community-development",
  },
  {
    label: "Partnerships & Fundraising",
    value: "partnerships-fundraising",
  },
  {
    label: "Technology / IT",
    value: "technology-it",
  },
  {
    label: "Product & Innovation",
    value: "product-innovation",
  },
  {
    label: "Research & Monitoring",
    value: "research-monitoring",
  },
  {
    label: "Finance",
    value: "finance",
  },
  {
    label: "Legal & Compliance",
    value: "legal-compliance",
  },
  {
    label: "Content & Documentation",
    value: "content-documentation",
  },
  {
    label: "Marketing",
    value: "marketing",
  },
  {
    label: "Other",
    value: "other",
  },
];

export default function VolunteerInterestSelect({ value, onChange }) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full max-w-full">
        <SelectValue placeholder="Select a Department" />
      </SelectTrigger>
      <SelectContent className="bg-white border-none">
        <SelectGroup className="border-none">
          {departmentOptions.map((item) => (
            <SelectItem
              className="hover:bg-slate-50"
              key={item.value}
              value={item.label}
            >
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
