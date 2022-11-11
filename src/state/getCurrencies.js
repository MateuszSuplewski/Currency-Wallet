import { createAsyncDuck } from '../createAsyncDuck'
import { getCurrencies as getCurrenciesAPICall } from '../api/getCurrencies'

export const { actionTypes, actionCreators, reducer, selector } = createAsyncDuck('getCurrencies', getCurrenciesAPICall)

export default reducer
