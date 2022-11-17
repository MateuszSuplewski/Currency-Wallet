class CurrenciesAPI {
  constructor (API_URL, API_KEY, exchangeTo = 'PLN') {
    this.API_URL = API_URL
    this.API_KEY = API_KEY
    this.exchangeTo = exchangeTo
  }

  getCurrencies = async (currencyTypes) => {
    return await this._fetch(`/latest?symbols=${currencyTypes}&base=${this.exchangeTo}`)
  }

  getCurrencyFromDate = async (currencyType, date) => {
    const currencyFromDate = await this._fetch(`/${date}?symbols=${currencyType}&base=${this.exchangeTo}`)
    return await currencyFromDate[currencyType]
  }

  async _fetch (additionalPath = '') {
    const ApiHeaders = new Headers()
    ApiHeaders.append('apikey', this.API_KEY)

    const fullUrl = this.API_URL + additionalPath

    const options = {
      method: 'GET',
      redirect: 'follow',
      headers: ApiHeaders
    }

    const response = await fetch(fullUrl, options)
    const data = await response.json()
    return data.rates
  }
}

export default CurrenciesAPI
