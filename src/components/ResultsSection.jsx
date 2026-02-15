import { RESULTS_HEADING, RESULTS_DESCRIPTION } from "../constants/formConfig";
import { formatPounds } from "../utils/mortgageCalculations";
import resultsIllustration from "../assets/illustration-empty.svg";

/**
 * Placeholder illustration: decorative container matching Figma “Layer_1” area.
 * Replace with SVG/asset when available.
 */
function ResultsIllustration() {
  return (
    <div
      className="mx-auto flex size-48 max-w-full items-center justify-center rounded-lg bg-slate-900/10"
      aria-hidden
    >
      <img src={resultsIllustration} alt="" />
    </div>
  );
}

export default function ResultsSection({ results }) {
  return (
    <section
      className="flex flex-col gap-400 bg-slate-900 px-300 py-400 md:px-500 md:py-500"
      aria-labelledby="results-heading"
    >
      <div className="flex flex-1 flex-col gap-200 text-start md:gap-400">
        {!results && <ResultsIllustration />}
        <h2
          id="results-heading"
          className="text-preset-2 font-bold tracking-preset text-white"
        >
          {results ? "Your results" : RESULTS_HEADING}
        </h2>
        <p className="max-w-md text-preset-4 font-medium leading-normal text-slate-300">
          {RESULTS_DESCRIPTION}
        </p>
        {results && (
          <div className="w-full max-w-sm space-y-300 rounded-xl bg-darker p-400 text-left">
            <div>
              <p className="text-preset-5 font-medium text-slate-300">
                Your monthly repayments
              </p>
              <p className="font-bold tracking-preset text-lime text-preset-1 text-[clamp(2.50rem,calc(2.136rem+1.818vw),3.50rem)]">
                {formatPounds.format(results.monthlyPayment)}
              </p>
            </div>
            <div>
              <p className="text-preset-5 font-medium text-slate-300">
                Total you'll repay over the term
              </p>
              <p className="text-preset-2 font-bold tracking-preset text-white">
                {formatPounds.format(results.totalRepay)}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
