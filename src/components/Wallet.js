import React from 'react'
import Cell from './Cell'
import Button from './Button'
import PropTypes from 'prop-types'

const Wallet = ({ headerRowContent, currencies, handleCurrencyDelete }) => {
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
      <tbody>
        {currencies.map(
          ({ type, quantity, purchaseDate, purchasePrice, id }, index) => {
            return (
              <tr key={index}>
                <Cell>{type}</Cell>
                <Cell>{quantity}</Cell>
                <Cell>{purchaseDate}</Cell>
                <Cell>{purchasePrice}</Cell>
                <Cell>-</Cell> {/* Last 3 cells will be passed by api */}
                <Cell>-</Cell>
                <Cell>-</Cell>
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
          <Cell>Total Profit/Loss value</Cell>
        </tr>
      </tfoot>
    </table>
  )
}

Wallet.propTypes = {
  headerRowContent: PropTypes.array,
  currencies: PropTypes.array,
  handleCurrencyDelete: PropTypes.func
}
export default Wallet
