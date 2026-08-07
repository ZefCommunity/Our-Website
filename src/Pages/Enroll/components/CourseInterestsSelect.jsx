import { useMemo, useState } from 'react';
import { COURSE_INTEREST_OPTIONS } from '@/lib/schemas/enroll.s';
import { ENROLL_INPUT } from './enrollFormUi';

export default function CourseInterestsSelect({
  value = [],
  onChange,
  disabled = false,
  invalid = false,
}) {
  const [query, setQuery] = useState('');

  const filteredOptions = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return COURSE_INTEREST_OPTIONS;
    }
    return COURSE_INTEREST_OPTIONS.filter((option) =>
      option.toLowerCase().includes(normalized),
    );
  }, [query]);

  const toggleOption = (option) => {
    if (disabled) {
      return;
    }
    if (value.includes(option)) {
      onChange(value.filter((item) => item !== option));
      return;
    }
    onChange([...value, option]);
  };

  return (
    <div className="space-y-3">
      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Type to filter skills…"
        disabled={disabled}
        aria-invalid={invalid || undefined}
        className={ENROLL_INPUT}
      />

      {value.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {value.map((item) => (
            <button
              key={item}
              type="button"
              disabled={disabled}
              onClick={() => toggleOption(item)}
              className="inline-flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-800 transition-colors hover:bg-green-100"
            >
              {item}
              <span aria-hidden>×</span>
            </button>
          ))}
        </div>
      ) : null}

      <div
        role="group"
        aria-label="Course interests"
        className={`max-h-64 overflow-y-auto rounded-lg border bg-white p-2 shadow-sm ${
          invalid ? 'border-red-500' : 'border-gray-300'
        }`}
      >
        {filteredOptions.length === 0 ? (
          <p className="px-2 py-3 text-sm text-slate-500">
            No matching skills found.
          </p>
        ) : (
          <ul className="space-y-1">
            {filteredOptions.map((option) => {
              const checked = value.includes(option);
              const optionId = `enroll-interest-${option
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')}`;
              return (
                <li key={option}>
                  <label
                    htmlFor={optionId}
                    className={`flex cursor-pointer items-center gap-3 rounded-md px-2 py-2 text-sm transition-colors ${
                      checked
                        ? 'bg-green-50 text-green-900'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <input
                      id={optionId}
                      type="checkbox"
                      checked={checked}
                      disabled={disabled}
                      onChange={() => toggleOption(option)}
                      className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                    />
                    <span>{option}</span>
                  </label>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
