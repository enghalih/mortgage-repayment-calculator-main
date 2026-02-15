/** Form copy and options for mortgage calculator */

export const PAGE_TITLE = 'Mortgage Calculator';
export const CLEAR_ALL_LABEL = 'Clear All';

export const FIELD_LABELS = {
  propertyPrice: 'Property Price',
  mortgageTerm: 'Mortgage Term',
  interestRate: 'Interest Rate',
  mortgageType: 'Mortgage Type',
};

export const PLACEHOLDERS = {
  propertyPrice: '0',
  mortgageTerm: '0',
  interestRate: '0',
};

export const MORTGAGE_TYPES = [
  { value: 'repayment', label: 'Repayment' },
  { value: 'interest-only', label: 'Interest Only' },
];

export const BUTTON_LABEL = 'Calculate repayments';

export const RESULTS_HEADING = 'Results shown here';
export const RESULTS_DESCRIPTION =
  'Complete the form and click "calculate repayments" to see what your monthly repayments would be.';

export const ERROR_FIELD_REQUIRED = 'This field is required';
