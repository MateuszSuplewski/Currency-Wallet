import React from 'react'
import PropTypes from 'prop-types'
import Input from '../styled/Input'
import Select from '../styled/Select'

const Field = (props) => {
  const data = {
    select: Select,
    input: Input,
    number: Input,
    date: Input
  }

  const FieldComponent = data[props.type]

  return <FieldComponent {...props} />
}

Field.propTypes = {
  type: PropTypes.string
}

export default Field
