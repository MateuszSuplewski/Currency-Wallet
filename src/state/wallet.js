export const ADD = 'currencies/ADD'
export const REMOVE = 'currencies/REMOVE'

export const createActionAdd = (currency) => {
  return {
    type: ADD,
    payload: currency
  }
}

export const createActionRemove = (currencyId) => {
  return {
    type: REMOVE,
    payload: currencyId
  }
}

export const initialState = {
  currencies: []
}

export const reducer = (state = initialState, action) => {
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
