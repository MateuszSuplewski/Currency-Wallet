import React from 'react'
import PropTypes from 'prop-types'

const CurrencyForm = (props) => {
  const { state, submitHandler, fields, inputHandler } = props
  return (
    <form
      onSubmit={submitHandler}
      noValidate
    >
      {state.errors.length !== 0
        ? state.errors.map((error, index) => <li key={index}>{error}</li>)
        : null}
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.label + ': '}</label>
          <input
            id={field.name}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={state[field.name]}
            onChange={(e) => inputHandler(e)}
          />
        </div>
      ))}
      <button>SUBMIT</button>
    </form>
  )
}

CurrencyForm.propTypes = {
  state: PropTypes.object,
  submitHandler: PropTypes.func,
  fields: PropTypes.array,
  inputHandler: PropTypes.func
}

export default CurrencyForm
