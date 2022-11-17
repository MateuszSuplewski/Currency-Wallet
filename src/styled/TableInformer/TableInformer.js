import React from 'react'
import PropTypes from 'prop-types'
import { STableInformer, SInformerText } from './TableInformer.styled'
import Row from '../Row'

const Informer = ({ style, color, children, ...otherProps }) => {
  return (
    <Row>
      <STableInformer
        colSpan={7}
        style={style}
        {...otherProps}
      >
        <SInformerText color={color}>
          {children}
        </SInformerText>
      </STableInformer>
    </Row>

  )
}

Informer.propTypes = {
  style: PropTypes.object,
  color: PropTypes.string,
  children: PropTypes.string
}

export default Informer
