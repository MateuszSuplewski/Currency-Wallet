import React from 'react'
import PropTypes from 'prop-types'
import ErrorList from '../styled/ErrorList'
import Error from '../styled/Error'

const ErrorManager = ({ errors }) => {
  return errors.length !== 0
    ? (
      <ErrorList>
        {errors.map((error, index) => (
          <Error key={index}>{error}</Error>
        ))}
      </ErrorList>
      )
    : null
}

ErrorManager.propTypes = {
  errors: PropTypes.array
}

export default ErrorManager
