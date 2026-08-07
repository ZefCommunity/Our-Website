import FormSelect from '@/components/forms/FormSelect';

const departmentOptions = [
  { label: 'Administration', value: 'Administration' },
  { label: 'Human Resources', value: 'Human Resources' },
  {
    label: 'Social Media & Communications',
    value: 'Social Media & Communications',
  },
  { label: 'Graphics & Design', value: 'Graphics & Design' },
  {
    label: 'Programs & Community Development',
    value: 'Programs & Community Development',
  },
  {
    label: 'Partnerships & Fundraising',
    value: 'Partnerships & Fundraising',
  },
  { label: 'Technology / IT', value: 'Technology / IT' },
  { label: 'Product & Innovation', value: 'Product & Innovation' },
  { label: 'Research & Monitoring', value: 'Research & Monitoring' },
  { label: 'Finance', value: 'Finance' },
  { label: 'Legal & Compliance', value: 'Legal & Compliance' },
  { label: 'Content & Documentation', value: 'Content & Documentation' },
  { label: 'Marketing', value: 'Marketing' },
  { label: 'Other', value: 'Other' },
];

export default function VolunteerInterestSelect({
  value,
  onChange,
  disabled = false,
  invalid = false,
  id = 'volunteer-interest',
}) {
  return (
    <FormSelect
      id={id}
      value={value}
      onChange={onChange}
      options={departmentOptions}
      placeholder="Select a department"
      disabled={disabled}
      invalid={invalid}
    />
  );
}
