import React from 'react'
import PropTypes from 'prop-types'
import SButton from './Button.styled'

const Button = ({ style, type = 'button', onClick, children, ...otherProps }) => {
  return (
    <SButton
      style={style}
      type={type}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </SButton>
  )
}

Button.propTypes = {
  style: PropTypes.object,
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string
}

export default Button
