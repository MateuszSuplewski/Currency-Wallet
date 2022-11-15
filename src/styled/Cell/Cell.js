import React from 'react'
import PropTypes from 'prop-types'
import { SDataCell, SHeaderCell } from './Cell.styled'

const Cell = ({ style, align, type = 'data', children, ...otherProps }) => {
  return type === 'header'
    ? (
      <SHeaderCell
        style={style}
        align={align}
        {...otherProps}
      >
        {children}
      </SHeaderCell>
      )
    :
      (
        <SDataCell
          style={style}
          align={align}
          {...otherProps}
        >
          {children}
        </SDataCell>
      )
}

Cell.propTypes = {
  style: PropTypes.object,
  type: PropTypes.string,
  align: PropTypes.string,
  children: PropTypes.node
}

export default Cell
