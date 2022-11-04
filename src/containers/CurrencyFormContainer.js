
import React, { useReducer } from 'react'
import fields from '../formFieldsData'
import { validateForm } from '../helper'
import CurrencyForm from '../components/CurrencyForm'

const CurrencyFormContainer = (props) => {
  const initialState = {
    ...Object.fromEntries(fields.map(field => [field.name, ''])),
    errors: []
  }

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
