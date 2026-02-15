/**
 * Number input with optional prefix (e.g. £) or suffix (e.g. years, %).
 * @param {string} label - Field label (associates with id)
 * @param {string} id - Input id for a11y
 * @param {string} [prefix] - Left affix (e.g. "£")
 * @param {string} [suffix] - Right affix (e.g. "years", "%")
 * @param {string} [placeholder]
 * @param {boolean} [error] - Show error state (red border + message)
 * @param {string} [errorMessage] - Message shown when error is true
 * @param {object} inputProps - Spread onto <input>
 */
export default function NumberField({
  label,
  id,
  prefix,
  suffix,
  placeholder = "",
  error = false,
  errorMessage,
  ...inputProps
}) {
  return (
    <div className="flex flex-col gap-150">
      <label
        htmlFor={id}
        className="text-preset-3 font-bold tracking-preset text-slate-700"
      >
        {label}
      </label>
      <div
        className={`flex min-h-12 overflow-hidden rounded border bg-white transition-colors duration-200
          ${
            error
              ? "border-red ring-1 ring-red ring-offset-0"
              : "border-slate-500 focus-within:border-lime focus-within:ring-2 focus-within:ring-lime focus-within:ring-offset-0 hover:border-lime/80 focus-within:bg-lime/5"
          }`}
      >
        {prefix && (
          <span
            className={`flex min-w-11 items-center justify-center px-200 text-preset-4 font-medium text-slate-700
              ${error ? "bg-red text-white" : "bg-slate-100 text-slate-700"}`}
            aria-hidden
          >
            {prefix}
          </span>
        )}
        <input
          type="number"
          id={id}
          placeholder={placeholder}
          className="min-w-0 flex-1 border-0 bg-transparent px-200 py-150 text-preset-4 font-medium text-slate-900 placeholder:text-slate-900/70 focus:outline-none focus:ring-0"
          aria-label={label}
          aria-invalid={error}
          aria-describedby={error && errorMessage ? `${id}-error` : undefined}
          {...inputProps}
        />
        {suffix && (
          <span
            className={`flex min-w-11 items-center justify-center px-200 text-preset-4 font-medium text-slate-700
              ${error ? "bg-red text-white" : "bg-slate-100 text-slate-700"}`}
            aria-hidden
          >
            {suffix}
          </span>
        )}
      </div>
      {error && errorMessage && (
        <p
          id={`${id}-error`}
          className="text-preset-5 font-medium text-red"
          role="alert"
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
}
