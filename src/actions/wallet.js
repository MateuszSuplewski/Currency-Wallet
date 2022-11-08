import { ADD, REMOVE } from '../types/wallet'

const createActionAdd = (currency) => {
  return {
    type: ADD,
    payload: currency
  }
}

const createActionRemove = (currencyId) => {
  return {
    type: REMOVE,
    payload: currencyId
  }
}

export { createActionAdd, createActionRemove }
