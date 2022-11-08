
import Wallet from '../components/Wallet'
import { useSelector, useDispatch } from 'react-redux'
import { createActionRemove } from '../actions/wallet'
import React from 'react'

const WalletContainer = () => {
  const headerRowContent = [
    'Currency',
    'Quantity',
    'Date of purchase',
    'Purchase price',
    'Current rate',
    'Current value',
    'Profit/Loss'
  ]

  const state = useSelector((state) => state.wallet)
  const storeDispatch = useDispatch()
  const { currencies } = state

  const handleDelete = (id) => {
    storeDispatch(createActionRemove(id))
  }

  return (
    <Wallet
      headerRowContent = {headerRowContent}
      currencies = {currencies}
      handleCurrencyDelete = {handleDelete}
    />
  )
}

export default WalletContainer
