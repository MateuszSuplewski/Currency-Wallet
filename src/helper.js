const validateForm = (fields, state) => {
  const errors = []

  fields.forEach(({ required, name, label, error, pattern }) => {
    if (required && state[name].length === 0) { errors.push(`${label} field requires data`) }
    if (!pattern.test(state[name]) && state[name]) errors.push(error)
  })

  return errors
}

const getCurrentCurrencyRate = currencyValue => (1 / Number(currencyValue)).toFixed(4)

const getTotalPurchasePrice = (purchasePrice, quantity) => (Number(quantity) * Number(purchasePrice))

const getTotalCurrentPrice = (currencyValue, quantity) => (getCurrentCurrencyRate(currencyValue) * Number(quantity)).toFixed(2)

const getCurrentProfitOrLoss = (currencyValue, purchasePrice, quantity) => {
  const totalPurchasePrice = getTotalPurchasePrice(purchasePrice, quantity)
  const ProfitOrLossValue = (getTotalCurrentPrice(currencyValue, quantity) - totalPurchasePrice).toFixed(2)
  const ProfitOrLossPercentage = ((ProfitOrLossValue / totalPurchasePrice) * 100).toFixed(2)

  return ProfitOrLossValue > 0 ? `${ProfitOrLossValue} (+${ProfitOrLossPercentage}%)` : `${ProfitOrLossValue} (${ProfitOrLossPercentage}%)`
}

const getUniqueCurrencyTypesFromWallet = (currencies) => {
  return currencies.map(({ type }) => type)
    .filter((type, index, array) => array.indexOf(type) === index)
}

export { validateForm, getCurrentCurrencyRate, getTotalPurchasePrice, getTotalCurrentPrice, getCurrentProfitOrLoss, getUniqueCurrencyTypesFromWallet }
