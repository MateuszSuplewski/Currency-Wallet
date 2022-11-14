const getCurrencyFromDate = async (url, API_KEY, date, currencyType = 'PLN', exchangeTo) => {
  const ApiHeaders = new Headers()
  ApiHeaders.append('apikey', API_KEY)

  const fullUrl = `${url}/${date}?symbols=${currencyType}&base=${exchangeTo}`

  const options = {
    method: 'GET',
    redirect: 'follow',
    headers: ApiHeaders
  }

  const response = await fetch(fullUrl, options)
  const data = await response.json()
  return data.rates[currencyType]
}

export { getCurrencyFromDate }
