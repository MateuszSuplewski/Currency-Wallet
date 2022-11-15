import React from 'react'
import PropTypes from 'prop-types'
import SInput from './Input.styled'

const Input = ({ style, type, name, value, onChange, ...otherProps }) => {
  return (
    <SInput
      style={style}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      {...otherProps}
    />
  )
}

Input.propTypes = {
  style: PropTypes.object,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default Input
