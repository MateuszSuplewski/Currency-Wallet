import React from 'react'
import PropTypes from 'prop-types'
import Label from '../styled/Label'
import InputContainer from '../styled/InputContainer'
import Button from '../styled/Button'
import Form from '../styled/Form'
import ErrorManager from './ErrorManager'
import Field from './Field'

const CurrencyForm = (props) => {
  const { state, submitHandler, fields, inputHandler, errors } = props
  return (
    <Form
      onSubmit={submitHandler}
      noValidate
    >
      <ErrorManager errors={errors}/>
      {fields.map(({ name, label, placeholder, type, options }) => (
        <InputContainer key={name}>
          <Label htmlFor={name}>{label + ': '}</Label>
          <Field
            id={name}
            type={type}
            name={name}
            placeholder={placeholder}
            value={state[name]}
            onChange={(e) => inputHandler(e)}
            options={options}
          />
        </InputContainer>
      )
      )}
      <Button
        fullWidth
        type={'submit'}
      >
        SUBMIT
      </Button>
    </Form>
  )
}

CurrencyForm.propTypes = {
  state: PropTypes.object,
  submitHandler: PropTypes.func,
  fields: PropTypes.array,
  inputHandler: PropTypes.func,
  errors: PropTypes.array
}

export default CurrencyForm
