import React from 'react'
import PropTypes from 'prop-types'
import SInputContainer from './InputContainer.styled'

const InputContainer = ({ style, children, ...otherProps }) => {
  return (
    <SInputContainer
      style={style}
      {...otherProps}
    >
      {children}
    </SInputContainer>
  )
}

InputContainer.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node
}

export default InputContainer
