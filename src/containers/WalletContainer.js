import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createActionRemove } from '../state/wallet'
import { actionCreators, selector } from '../state/getCurrencies'
import Wallet from '../components/Wallet'
import { getCurrentCurrencyRate, getTotalCurrentPrice, getCurrentProfitOrLoss, getUniqueCurrencyTypesFromWallet, getSummaryOfCurrencyGainsOrLosses } from '../helpers/mainHelper'
import headerContent from '../data/walletHeader'

const WalletContainer = () => {
  const storeDispatch = useDispatch()
  const walletState = useSelector((state) => state.wallet)
  const currenciesState = useSelector(selector)
  const { currencies } = walletState
  const { value } = currenciesState
  const uniqueCurrencies = getUniqueCurrencyTypesFromWallet(currencies).join(',')

  const bodyContent = value &&
    currencies.map(({ type, quantity, purchaseDate, purchasePrice, id }) => ({
      type,
      quantity,
      purchaseDate,
      purchasePrice,
      currentRate: getCurrentCurrencyRate(value[type]),
      currentValue: getTotalCurrentPrice(value[type], quantity),
      currentProfitOrLoss: getCurrentProfitOrLoss(value[type], purchasePrice, quantity),
      id
    }))

  const summaryOfCurrencyGainsOrLosses = bodyContent && getSummaryOfCurrencyGainsOrLosses(bodyContent)

  const handleDelete = (id) => storeDispatch(createActionRemove(id))

  useEffect(() => {
    storeDispatch(actionCreators.getCurrencies(uniqueCurrencies))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currencies])

  return (
    <Wallet
      headerContent={headerContent}
      bodyContent={bodyContent}
      footerValue={summaryOfCurrencyGainsOrLosses}
      currenciesState={currenciesState}
      handleDelete={handleDelete}
    />
  )
}

export default WalletContainer
