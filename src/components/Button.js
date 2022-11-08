import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string
}

export default Button
