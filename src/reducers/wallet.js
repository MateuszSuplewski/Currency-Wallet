import { ADD, REMOVE } from '../types/wallet'

const initialState = {
  currencies: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        currencies: [...state.currencies, action.payload]
      }
    case REMOVE:
      return {
        ...state,
        currencies: state.currencies.filter(
          (currency) => currency.id !== action.payload
        )
      }
    default:
      return state
  }
}

export default reducer
