import { PAGE_TITLE, CLEAR_ALL_LABEL } from '../constants/formConfig';

export default function TitleBar({ onClearAll }) {
  return (
    <header className="flex flex-col gap-100 sm:flex-row sm:items-center sm:justify-between sm:gap-400">
      <h1 className="text-preset-2 font-bold tracking-preset text-slate-900">
        {PAGE_TITLE}
      </h1>
      <a
        href="#clear"
        onClick={(e) => {
          e.preventDefault();
          onClearAll?.();
        }}
        className="text-preset-4 font-medium text-slate-700 transition-colors duration-200 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
        aria-label={CLEAR_ALL_LABEL}
      >
        {CLEAR_ALL_LABEL}
      </a>
    </header>
  );
}
