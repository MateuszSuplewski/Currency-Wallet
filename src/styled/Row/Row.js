import React from 'react'
import PropTypes from 'prop-types'
import SRow from './Row.styled'

const Row = ({ style, children, ...otherProps }) => {
  return (
    <SRow
      style={style}
      {...otherProps}
    >
      {children}
    </SRow>
  )
}

Row.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node
}

export default Row
