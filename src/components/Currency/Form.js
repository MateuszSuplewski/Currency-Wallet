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
      {fields.map(({ name, label, placeholder, type, options }) => {
        if (type === 'select') {
          return (
            <div key={name}>
              <label htmlFor={name}>{label + ': '}</label>
              <select
                value={state[name]}
                name={name}
                onChange={(e) => inputHandler(e)}
                id={name}
              >
                {
                  options.map((symbol, index) => (
                    <option
                      key={index}
                      value={symbol}
                    >{symbol}
                    </option>
                  ))
                }
              </select>
            </div>
          )
        }
        return (
          <div key={name}>
            <label htmlFor={name}>{label + ': '}</label>
            <input
              id={name}
              type={type}
              name={name}
              placeholder={placeholder}
              value={state[name]}
              onChange={(e) => inputHandler(e)}
            />
          </div>
        )
      })}
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
