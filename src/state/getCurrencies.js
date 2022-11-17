import { createAsyncDuck } from '../helpers/createAsyncDuck'
import CurrenciesAPI from '../api/currencies'
import { API_URL, API_KEY } from '../data/api'

const currAPI = new CurrenciesAPI(API_URL, API_KEY)

export const { actionTypes, actionCreators, reducer, selector } = createAsyncDuck('getCurrencies', currAPI.getCurrencies)

export default reducer
