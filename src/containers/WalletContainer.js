import Wallet from '../components/Wallet'
import { useSelector, useDispatch } from 'react-redux'
import { createActionRemove } from '../actions/wallet'
import React, { useEffect } from 'react'
import { actionCreators, selector } from '../state/getCurrencies'
import { getCurrentCurrencyRate, getTotalCurrentPrice, getCurrentProfitOrLoss, getUniqueCurrencyTypesFromWallet } from '../helper'
import { headerRowContent } from '../walletData'

const WalletContainer = () => {
  const API_URL = 'https://api.apilayer.com/exchangerates_data'
  const API_KEY = 'YOUR_API_KEY'

  const storeDispatch = useDispatch()
  const walletState = useSelector((state) => state.wallet)
  const currenciesState = useSelector(selector)
  const { currencies } = walletState
  const { value } = currenciesState

  const bodyContent = value &&
    currencies.map((currency) => ({
      ...currency,
      currentRate: getCurrentCurrencyRate(value[currency.type]),
      currentValue: getTotalCurrentPrice(value[currency.type], currency.quantity),
      currentProfitOrLoss: getCurrentProfitOrLoss(value[currency.type], currency.purchasePrice, currency.quantity)
    }))

  const summaryOfCurrencyGainsOrLosses = bodyContent && bodyContent.reduce((prev, { currentProfitOrLoss }) => {
    const profitOrLossData = currentProfitOrLoss.split(' ')
    const [value] = profitOrLossData
    return prev + Number(value)
  }, 0).toFixed(2)

  const handleDelete = (id) => storeDispatch(createActionRemove(id))

  useEffect(() => {
    storeDispatch(actionCreators.getCurrencies(API_URL, API_KEY, getUniqueCurrencyTypesFromWallet(currencies).join(',')))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currencies, storeDispatch])

  return (
    <Wallet
      headerRowContent={headerRowContent}
      bodyContent={bodyContent}
      footerContent={summaryOfCurrencyGainsOrLosses}
      getCurrencies={currenciesState}
      handleCurrencyDelete={handleDelete}
    />
  )
}

export default WalletContainer
