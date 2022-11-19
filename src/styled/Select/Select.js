import React from 'react'
import PropTypes from 'prop-types'
import SSelect from './Select.styled'

const Select = ({ style, value, name, onChange, children, options, ...otherProps }) => {
  return (
    <SSelect
      style={style}
      value={value}
      name={name}
      onChange={onChange}
      {...otherProps}
    >
      {options.map((symbol, index) => (
        <option
          key={index}
          value={symbol}
        >
          {symbol}
        </option>
      ))}
    </SSelect>
  )
}

Select.propTypes = {
  style: PropTypes.object,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.node,
  options: PropTypes.array
}

export default Select
