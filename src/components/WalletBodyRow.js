import React from 'react'
import PropTypes from 'prop-types'
import Button from '../styled/Button'
import Cell from '../styled/Cell'
import Row from '../styled/Row'

const BodyRow = ({ colNames, rowCellsContent, handleDelete }) => {
  const lastCellContent = rowCellsContent[colNames.length]
  return (
    <Row>
      {colNames.map((colName, index) => (
        <Cell
          key={index}
          colName={colName}
        >
          {rowCellsContent[index]}
        </Cell>
      ))}
      <Cell>
        <Button onClick={() => handleDelete(lastCellContent)}>REMOVE</Button>
      </Cell>
    </Row>
  )
}

BodyRow.propTypes = {
  colNames: PropTypes.array,
  rowCellsContent: PropTypes.array,
  handleDelete: PropTypes.func
}

export default BodyRow
