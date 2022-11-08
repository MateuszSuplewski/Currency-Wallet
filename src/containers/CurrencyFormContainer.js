import React, { useReducer } from 'react'
import fields from '../formFieldsData'
import { validateForm } from '../helper'
import CurrencyForm from '../components/Currency/Form'
import { useDispatch } from 'react-redux'
import { createActionAdd } from '../actions/wallet'
import { v4 as uuidv4 } from 'uuid'

const CurrencyFormContainer = (props) => {
  const initialState = {
    ...Object.fromEntries(fields.map(field => [field.name, ''])),
    errors: []
  }

  const storeDispatch = useDispatch()

  const reducer = (state, action) => {
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

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleSubmit = (e) => {
    e.preventDefault()
    const errors = validateForm(fields, state)
    if (errors.length !== 0) {
      dispatch({ type: 'setErrors', payload: errors })
      return
    }
    const currency = { ...state, id: uuidv4() }
    delete currency.errors
    storeDispatch(createActionAdd(currency))
    dispatch({ type: 'clearFields' })
  }

  const handleInputChange = (e) => {
    dispatch(
      {
        type: 'updateFieldValue',
        payload: { key: e.target.name, value: e.target.value }
      }
    )
  }

  return (
    <CurrencyForm
      state={state}
      submitHandler={handleSubmit}
      fields={fields}
      inputHandler={handleInputChange}
    />
  )
}

export default CurrencyFormContainer
