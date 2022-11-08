import React from 'react'
import PropTypes from 'prop-types'

const Cell = ({ type = 'data', children, ...otherProps }) => {
  return type === 'header' ? <th {...otherProps}>{children}</th> : <td {...otherProps}>{children}</td>
}

Cell.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node
}

export default Cell
