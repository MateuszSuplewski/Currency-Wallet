import React from 'react'
import Cell from './Cell'
import Button from './Button'
import PropTypes from 'prop-types'

const Wallet = ({ headerRowContent, bodyContent, handleCurrencyDelete, getCurrencies }) => {
  return (
    <table>
      <caption>Wallet of your currencies</caption>
      <thead>
        <tr>
          {headerRowContent.map((cellContent, index) => (
            <Cell
              type={'header'}
              key={index}
            >
              {cellContent}
            </Cell>
          ))}
        </tr>
      </thead>
      <tbody> {/* Add error,loading state handling! (getCurrencies) */}
        {bodyContent &&
          bodyContent.map(
            ({ type, quantity, purchaseDate, purchasePrice, id, currentRate, currentValue, currentProfitOrLoss }, index) => {
              return (
                <tr key={index}>
                  <Cell>{type}</Cell>
                  <Cell>{quantity}</Cell>
                  <Cell>{purchaseDate}</Cell>
                  <Cell>{purchasePrice}</Cell>
                  <Cell>{currentRate}</Cell>
                  <Cell>{currentValue}</Cell>
                  <Cell>{currentProfitOrLoss}</Cell>
                  <Cell>
                    <Button onClick={() => handleCurrencyDelete(id)}>
                      REMOVE
                    </Button>
                  </Cell>
                </tr>
              )
            }
          )}
      </tbody>
      <tfoot>
        <tr>
          <Cell colSpan={6}>Summary of your all currency gains/losses</Cell>
          <Cell> {/* Just a random reduce for now */}
            {bodyContent &&
              bodyContent.reduce(
                (prev, curr) => prev + Number(curr.currentValue),
                0
              )}
          </Cell>
        </tr>
      </tfoot>
    </table>
  )
}

Wallet.propTypes = {
  headerRowContent: PropTypes.array,
  bodyContent: PropTypes.array,
  handleCurrencyDelete: PropTypes.func,
  getCurrencies: PropTypes.object
}
export default Wallet
