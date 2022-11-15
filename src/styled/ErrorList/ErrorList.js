import React from 'react'
import PropTypes from 'prop-types'
import SErrorList from './ErrorList.styled'

const ErrorList = ({ style, children, ...otherProps }) => {
  return (
    <SErrorList
      style={style}
      {...otherProps}
    >
      {children}
    </SErrorList>
  )
}

ErrorList.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node
}

export default ErrorList
