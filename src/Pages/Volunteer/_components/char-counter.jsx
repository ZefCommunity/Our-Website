import { useWatch } from 'react-hook-form';

export default function CharCounter({ control, max = 1000 }) {
  const chars = useWatch({ control, name: 'motivation' }) || '';
  const count = chars.length;
  const nearLimit = count > max * 0.9;

  return (
    <p
      className={`w-full text-right text-sm ${
        nearLimit ? 'text-amber-600' : 'text-slate-500'
      }`}
    >
      {count}/{max}
    </p>
  );
}
