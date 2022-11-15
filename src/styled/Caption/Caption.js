import React from 'react'
import PropTypes from 'prop-types'
import SCaption from './Caption.styled'

const Caption = ({ style, children, ...otherProps }) => {
  return (
    <SCaption
      style={style}
      {...otherProps}
    >
      {children}
    </SCaption>
  )
}

Caption.propTypes = {
  style: PropTypes.object,
  children: PropTypes.string
}

export default Caption
