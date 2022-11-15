import React from 'react'
import PropTypes from 'prop-types'
import SForm from './Form.styled'

const Form = ({ onSubmit, style, children, ...otherProps }) => {
  return (
    <SForm
      style={style}
      onSubmit={onSubmit}
      {...otherProps}
    >
      {children}
    </SForm>
  )
}

Form.propTypes = {
  style: PropTypes.object,
  onSubmit: PropTypes.func,
  children: PropTypes.node
}

export default Form
