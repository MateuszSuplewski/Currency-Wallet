import React, { useEffect, useReducer } from 'react'
import fields from '../formFieldsData'
import { validateForm, validateField } from '../helper'
import CurrencyForm from '../components/Currency/Form'
import { useDispatch } from 'react-redux'
import { createActionAdd } from '../actions/wallet'
import { v4 as uuidv4 } from 'uuid'
import { getCurrencyFromDate } from '../api/getCurrencyFromDate'

const CurrencyFormContainer = (props) => {
  const initialState = {
    type: 'EUR',
    quantity: '',
    purchaseDate: '',
    purchasePrice: '',
    errors: []
  }

  const API_URL = 'https://api.apilayer.com/exchangerates_data'
  const API_KEY = 'pDqHzqBd6BbRUcW4Ng8PD52A6pxwoOjX'

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

  useEffect(() => {
    if (validateField(fields[2], state)) {
      (async () => {
        try {
          const purchaseAPIPrice = await getCurrencyFromDate(API_URL, API_KEY, state.purchaseDate, 'PLN', state.type)
          console.log(purchaseAPIPrice) // Add popup to inform
          dispatch({ type: 'updateFieldValue', payload: { key: 'purchasePrice', value: purchaseAPIPrice.toFixed(4) } })
        } catch (error) {
          console.log(error) // Add popup to inform
        }
      })()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.purchaseDate])

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
