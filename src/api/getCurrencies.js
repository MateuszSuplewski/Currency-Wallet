const getCurrencies = async (url, API_KEY, currencyTypes, exchangeTo = 'PLN') => {
  const ApiHeaders = new Headers()
  ApiHeaders.append('apikey', API_KEY)

  const fullUrl = `${url}/latest?symbols=${currencyTypes}&base=${exchangeTo}`

  const options = {
    method: 'GET',
    redirect: 'follow',
    headers: ApiHeaders
  }

  const response = await fetch(fullUrl, options)
  const data = await response.json()
  return data.rates
}

export { getCurrencies }
