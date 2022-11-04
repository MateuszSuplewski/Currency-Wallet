export const fields = [
  {
    name: 'type',
    label: 'Type of currency',
    placeholder: 'EUR',
    pattern: /[A-Z]{3}/,
    error: 'Invalid type of currency!',
    type: 'text',
    required: true
  },
  {
    name: 'quantity',
    label: 'Quantity',
    placeholder: '100',
    pattern: /(?:^|\s)(?=.)((?:0|(?:[1-9](?:\d*|\d{0,2}(?:,\d{3})*)))?(?:\.\d*[1-9])?)(?!\S)/,
    error: 'Correct entered quantity',
    type: 'number',
    required: true
  },
  {
    name: 'purchaseDate',
    label: 'Date of purchase',
    placeholder: 'YYYY-MM-DD',
    pattern: /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/,
    error: 'Correctly enter date in format: YYYY-MM-DD',
    type: 'text',
    required: true
  },
  {
    name: 'purchasePrice',
    label: 'Purchase price',
    pattern: /(?:^|\s)(?=.)((?:0|(?:[1-9](?:\d*|\d{0,2}(?:,\d{3})*)))?(?:\.\d*[1-9])?)(?!\S)/,
    error: 'Correct entered purchase price',
    type: 'number',
    required: true
  }
]

export default fields
