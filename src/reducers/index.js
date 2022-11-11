import { combineReducers } from 'redux'
import walletReducer from './wallet'
import getCurrenciesReducer from '../state/getCurrencies'

const rootReducer = combineReducers({
  wallet: walletReducer,
  getCurrencies: getCurrenciesReducer
})

export default rootReducer
