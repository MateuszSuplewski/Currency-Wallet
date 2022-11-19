export const initialState = {
  type: 'EUR',
  quantity: '',
  purchaseDate: '',
  purchasePrice: ''
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'updateFieldValue':
      return {
        ...state,
        [action.payload.key]: action.payload.value
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
