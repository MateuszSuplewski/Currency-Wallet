import React from 'react'
import PropTypes from 'prop-types'
import Cell from '../styled/Cell'
import Row from '../styled/Row'
import Table from '../styled/Table'
import Caption from '../styled/Caption'
import TableInformer from '../styled/TableInformer'
import BodyRow from './WalletBodyRow'

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
                bodyContent.map((rowContent, index) => (
                  <BodyRow
                    key={index}
                    rowCellsContent={Object.values(rowContent)}
                    colNames={headerContent}
                    handleDelete={handleDelete}
                  />
                )
                )
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
