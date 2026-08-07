import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FORM_SELECT_TRIGGER } from './formFieldStyles';

/**
 * Reliable single-select dropdown used by Enroll and Volunteer forms.
 */
export default function FormSelect({
  value = '',
  onChange,
  options = [],
  placeholder = 'Select an option',
  disabled = false,
  invalid = false,
  id,
}) {
  return (
    <Select
      value={value || undefined}
      onValueChange={(next) => onChange(next ?? '')}
      disabled={disabled}
    >
      <SelectTrigger
        id={id}
        aria-invalid={invalid || undefined}
        className={FORM_SELECT_TRIGGER}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent
        alignItemWithTrigger={false}
        sideOffset={6}
        className="z-[60] max-h-72 bg-white shadow-lg ring-1 ring-black/5"
      >
        <SelectGroup>
          {options.map((option) => {
            const optionValue =
              typeof option === 'string' ? option : option.value;
            const optionLabel =
              typeof option === 'string' ? option : option.label;

            return (
              <SelectItem
                key={optionValue}
                value={optionValue}
                className="cursor-pointer py-2.5 hover:bg-green-50 focus:bg-green-50"
              >
                {optionLabel}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
