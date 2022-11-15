import React from 'react'
import PropTypes from 'prop-types'
import SError from './Error.styled'

const Error = ({ style, children, ...otherProps }) => {
  return (
    <SError
      style={style}
      {...otherProps}
    >
      {children}
    </SError>
  )
}

Error.propTypes = {
  style: PropTypes.object,
  children: PropTypes.string
}

export default Error
