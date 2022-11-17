import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import walletReducer from './state/wallet'
import getCurrenciesReducer from './state/getCurrencies'

const LOCAL_STORAGE_KEY = 'CurrencyWallet'
const preloadedState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || undefined

const rootReducer = combineReducers({
  wallet: walletReducer,
  getCurrencies: getCurrenciesReducer
})

const store = createStore(
  rootReducer,
  preloadedState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

store.subscribe(() => {
  const state = store.getState()
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state))
})

export default store
