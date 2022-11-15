import React from 'react'
import PropTypes from 'prop-types'
import SSelect from './Select.styled'

const Select = ({ style, value, name, onChange, children, ...otherProps }) => {
  return (
    <SSelect
      style={style}
      value={value}
      name={name}
      onChange={onChange}
      {...otherProps}
    >
      {children}
    </SSelect>
  )
}

Select.propTypes = {
  style: PropTypes.object,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.node
}

export default Select
