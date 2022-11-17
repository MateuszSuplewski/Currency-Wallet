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

const getSummaryOfCurrencyGainsOrLosses = (currenciesData) => {
  const summaryOfCurrencyGainsOrLosses = currenciesData.reduce((prev, { currentProfitOrLoss }) => {
    const profitOrLossData = currentProfitOrLoss.split(' ')
    const [value] = profitOrLossData

    return prev + Number(value)
  }, 0).toFixed(2)

  return summaryOfCurrencyGainsOrLosses
}

export { getCurrentCurrencyRate, getTotalPurchasePrice, getTotalCurrentPrice, getCurrentProfitOrLoss, getUniqueCurrencyTypesFromWallet, getSummaryOfCurrencyGainsOrLosses }
