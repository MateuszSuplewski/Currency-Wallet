import React, { useEffect, useReducer, useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { createActionAdd } from '../state/wallet'
import { initialState, reducer } from '../state/form'
import CurrencyForm from '../components/CurrencyForm'
import CurrenciesAPI from '../api/currencies'
import { getCurrentCurrencyRate } from '../helpers/mainHelper'
import validateForm from '../helpers/validateForm'
import { API_URL, API_KEY } from '../data/api'
import fields from '../data/formFields'

const CurrencyFormContainer = () => {
  const storeDispatch = useDispatch()
  const [state, dispatch] = useReducer(reducer, initialState)
  const [errors, setErrors] = useState([])
  const currAPI = new CurrenciesAPI(API_URL, API_KEY)

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validateForm(fields, state)

    if (validationErrors.length !== 0) {
      setErrors(validationErrors)
      return
    }

    const currency = { ...state, id: uuidv4() }

    storeDispatch(createActionAdd(currency))
    dispatch({ type: 'clearFields' })
    setErrors(validationErrors)
  }

  const handleInputChange = ({ target }) => {
    dispatch({
      type: 'updateFieldValue',
      payload: { key: target.name, value: target.value }
    })
  }

  useEffect(() => {
    if (state.purchaseDate) {
      (async () => {
        try {
          const purchaseAPIPrice = await currAPI.getCurrencyFromDate(state.type, state.purchaseDate)
          const currentPrice = await getCurrentCurrencyRate(purchaseAPIPrice)
          dispatch({ type: 'updateFieldValue', payload: { key: 'purchasePrice', value: currentPrice } })
        } catch (error) {}
      })()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.purchaseDate])

  return (
    <CurrencyForm
      state={state}
      errors={errors}
      submitHandler={handleSubmit}
      fields={fields}
      inputHandler={handleInputChange}
    />
  )
}

export default CurrencyFormContainer
