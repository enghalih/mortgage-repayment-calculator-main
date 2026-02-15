import { MORTGAGE_TYPES } from '../constants/formConfig';

const RADIO_GROUP_NAME = 'mortgage-type';

export default function MortgageTypeRadios({ value, onChange }) {
  return (
    <fieldset className="flex flex-col" aria-label="Mortgage type">
      <legend className="text-preset-3 mb-150 font-bold tracking-preset text-slate-700">
        Mortgage Type
      </legend>
      <div className="flex flex-col gap-150">
        {MORTGAGE_TYPES.map((option) => (
          <label
            key={option.value}
            className={`flex cursor-pointer items-center gap-200 border border-slate-500 px-200 py-150 rounded transition-colors duration-200 ${value === option.value ? 'bg-lime/15' : 'bg-white'}`}
          >
            <input
              type="radio"
              name={RADIO_GROUP_NAME}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange?.(option.value)}
              className="h-6 w-6 shrink-0 border-2 border-slate-500 text-lime focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-0"
              aria-describedby={`${option.value}-desc`}
            />
            <span
              id={`${option.value}-desc`}
              className="text-preset-4 font-medium text-slate-900"
            >
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
