import { BUTTON_LABEL } from '../constants/formConfig';

function CalculatorIcon({ className }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm2 4v2h8V6H8zm0 4v2h2v-2H8zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm-8 4v2h2v-2H8zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm-8 4v2h2v-2H8zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function CalculateButton({ onClick, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="inline-flex h-14 min-w-[10rem] items-center justify-center gap-150 rounded-full bg-lime px-500 text-preset-4 font-bold tracking-preset text-slate-900 shadow-none transition-all duration-200 hover:bg-lime/80 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 disabled:opacity-50 disabled:pointer-events-none"
      aria-label={BUTTON_LABEL}
    >
      <CalculatorIcon className="size-6 shrink-0" />
      <span>{BUTTON_LABEL}</span>
    </button>
  );
}
