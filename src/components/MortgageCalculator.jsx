import { useState } from 'react';
import TitleBar from './TitleBar';
import NumberField from './NumberField';
import MortgageTypeRadios from './MortgageTypeRadios';
import CalculateButton from './CalculateButton';
import ResultsSection from './ResultsSection';
import {
  FIELD_LABELS,
  PLACEHOLDERS,
  MORTGAGE_TYPES,
  ERROR_FIELD_REQUIRED,
} from '../constants/formConfig';
import {
  monthlyPaymentRepayment,
  monthlyPaymentInterestOnly,
  totalRepay,
} from '../utils/mortgageCalculations';

const initialForm = {
  propertyPrice: '',
  mortgageTerm: '',
  interestRate: '',
  mortgageType: MORTGAGE_TYPES[0].value,
};

const initialErrors = {
  propertyPrice: false,
  mortgageTerm: false,
  interestRate: false,
};

export default function MortgageCalculator() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [results, setResults] = useState(null);

  const handleClearAll = () => {
    setForm(initialForm);
    setErrors(initialErrors);
    setResults(null);
  };

  const handleCalculate = () => {
    const price = Number(form.propertyPrice);
    const term = Number(form.mortgageTerm);
    const rate = Number(form.interestRate);
    const newErrors = {
      propertyPrice: !form.propertyPrice.trim() || price <= 0,
      mortgageTerm: !form.mortgageTerm.trim() || term <= 0,
      interestRate: !form.interestRate.trim() || rate <= 0,
    };
    setErrors(newErrors);
    if (newErrors.propertyPrice || newErrors.mortgageTerm || newErrors.interestRate) {
      setResults(null);
      return;
    }
    const isInterestOnly = form.mortgageType === 'interest-only';
    const monthly = isInterestOnly
      ? monthlyPaymentInterestOnly(price, rate)
      : monthlyPaymentRepayment(price, rate, term);
    const total = totalRepay(monthly, term, isInterestOnly, isInterestOnly ? price : 0);
    setResults({ monthlyPayment: monthly, totalRepay: total });
  };

  return (
    <main className="min-h-screen bg-slate-100 px-300 py-300 md:px-500 md:py-500 lg:flex lg:items-start lg:justify-center lg:px-400">
      <div className="mx-auto w-full max-w-[56.25rem] overflow-hidden rounded-3xl bg-white shadow-card lg:flex lg:max-w-[1008px]">
        {/* Form column */}
        <section
          className="flex flex-col gap-300 px-300 py-300 md:gap-500 md:px-500 md:py-500 lg:min-w-0 lg:flex-1 lg:max-w-[504px]"
          aria-label="Calculator inputs"
        >
          <TitleBar onClearAll={handleClearAll} />
          <form
            className="flex flex-col gap-300 md:gap-500"
            onSubmit={(e) => e.preventDefault()}
            noValidate
          >
            <NumberField
              label={FIELD_LABELS.propertyPrice}
              id="property-price"
              prefix="£"
              placeholder={PLACEHOLDERS.propertyPrice}
              value={form.propertyPrice}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, propertyPrice: e.target.value }))
              }
              error={errors.propertyPrice}
              errorMessage={ERROR_FIELD_REQUIRED}
            />
            <div className="grid gap-300 md:grid-cols-2 md:gap-300">
              <NumberField
                label={FIELD_LABELS.mortgageTerm}
                id="mortgage-term"
                suffix="years"
                placeholder={PLACEHOLDERS.mortgageTerm}
                value={form.mortgageTerm}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, mortgageTerm: e.target.value }))
                }
                error={errors.mortgageTerm}
                errorMessage={ERROR_FIELD_REQUIRED}
              />
              <NumberField
                label={FIELD_LABELS.interestRate}
                id="interest-rate"
                suffix="%"
                placeholder={PLACEHOLDERS.interestRate}
                value={form.interestRate}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, interestRate: e.target.value }))
                }
                error={errors.interestRate}
                errorMessage={ERROR_FIELD_REQUIRED}
              />
            </div>
            <MortgageTypeRadios
              value={form.mortgageType}
              onChange={(value) =>
                setForm((prev) => ({ ...prev, mortgageType: value }))
              }
            />
            <CalculateButton onClick={handleCalculate} />
          </form>
        </section>
        {/* Results column */}
        <ResultsSection results={results} />
      </div>
    </main>
  );
}
