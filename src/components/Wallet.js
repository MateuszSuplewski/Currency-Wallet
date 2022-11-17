import React from 'react'
import Button from '../styled/Button'
import PropTypes from 'prop-types'
import Cell from '../styled/Cell'
import Row from '../styled/Row'
import Table from '../styled/Table'
import Caption from '../styled/Caption'
import TableInformer from '../styled/TableInformer'

const Wallet = ({ headerContent, bodyContent, handleDelete, footerValue, currenciesState }) => {
  const { loading, error } = currenciesState

  return (
    <Table>
      <Caption>Wallet of your currencies</Caption>
      <thead>
        <Row>
          {headerContent.map((cellContent, index) => (
            <Cell
              type={'header'}
              align={'left'}
              key={index}
            >
              {cellContent}
            </Cell>
          ))}
        </Row>
      </thead>
      <tbody>
        {loading
          ? <TableInformer color={'yellow'}>Your wallet is loading ...</TableInformer>
          : error
            ? <TableInformer color={'red'}>{'Oops, something went wrong! ' + error}</TableInformer>
            : (
                bodyContent &&
                bodyContent.map(({ type, quantity, purchaseDate, purchasePrice, id, currentRate, currentValue, currentProfitOrLoss }, index) => {
                  return (
                    <Row key={index}>
                      <Cell colName={'Currency'}>{type}</Cell>
                      <Cell colName={'Quantity'}>{quantity}</Cell>
                      <Cell colName={'Date of purchase'}>{purchaseDate}</Cell>
                      <Cell colName={'Purchase price'}>{purchasePrice}</Cell>
                      <Cell colName={'Current rate'}>{currentRate}</Cell>
                      <Cell colName={'Current value'}>{currentValue}</Cell>
                      <Cell colName={'Profit / Loss'}>{currentProfitOrLoss}</Cell>
                      <Cell><Button onClick={() => handleDelete(id)}>REMOVE</Button>
                      </Cell>
                    </Row>
                  )
                })
              )}
      </tbody>
      <tfoot>
        <Row>
          <Cell
            colSpan={6}
            align={'center'}
          >
            Summary of your all currency gains/losses
          </Cell>
          <Cell>{footerValue}</Cell>
        </Row>
      </tfoot>
    </Table>
  )
}

Wallet.propTypes = {
  headerContent: PropTypes.array,
  bodyContent: PropTypes.array,
  handleDelete: PropTypes.func,
  footerValue: PropTypes.string,
  currenciesState: PropTypes.object
}

export default Wallet
