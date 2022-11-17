export const initialState = {
  type: 'EUR',
  quantity: '',
  purchaseDate: '',
  purchasePrice: '',
  errors: []
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'updateFieldValue':
      return {
        ...state,
        [action.payload.key]: action.payload.value
      }
    case 'setErrors':
      return {
        ...state,
        errors: action.payload
      }
    case 'clearFields':
      return {
        ...initialState
      }
    default:
      return state
  }
}

export default reducer
