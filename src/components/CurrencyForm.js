import React from 'react'
import PropTypes from 'prop-types'
import Input from '../styled/Input'
import Label from '../styled/Label'
import InputContainer from '../styled/InputContainer/InputContainer'
import Select from '../styled/Select'
import Button from '../styled/Button'
import Form from '../styled/Form'
import ErrorList from '../styled/ErrorList'
import Error from '../styled/Error'

const CurrencyForm = (props) => {
  const { state, submitHandler, fields, inputHandler } = props
  return (
    <Form
      onSubmit={submitHandler}
      noValidate
    >
      {state.errors.length !== 0
        ? (
          <ErrorList>
            {state.errors.map((error, index) => (
              <Error key={index}>{error}</Error>
            ))}
          </ErrorList>
          )
        : null}
      {fields.map(({ name, label, placeholder, type, options }) => {
        if (type === 'select') {
          return (
            <InputContainer key={name}>
              <Label htmlFor={name}>{label + ': '}</Label>
              <Select
                value={state[name]}
                name={name}
                onChange={(e) => inputHandler(e)}
                id={name}
              >
                {options.map((symbol, index) => (
                  <option
                    key={index}
                    value={symbol}
                  >
                    {symbol}
                  </option>
                ))}
              </Select>
            </InputContainer>
          )
        }
        return (
          <InputContainer key={name}>
            <Label htmlFor={name}>{label + ': '}</Label>
            <Input
              id={name}
              type={type}
              name={name}
              placeholder={placeholder}
              value={state[name]}
              onChange={(e) => inputHandler(e)}
            />
          </InputContainer>
        )
      })}
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
  inputHandler: PropTypes.func
}

export default CurrencyForm
