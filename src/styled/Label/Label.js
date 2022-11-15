import React from 'react'
import PropTypes from 'prop-types'
import SLabel from './Label.styled'

const Label = ({ style, htmlFor, children }) => {
  return (
    <SLabel
      style={style}
      htmlFor={htmlFor}
    >{children}
    </SLabel>
  )
}

Label.propTypes = {
  style: PropTypes.object,
  htmlFor: PropTypes.string,
  children: PropTypes.string
}

export default Label
