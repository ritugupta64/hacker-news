import React from 'react'
import PropTypes from 'prop-types'

import './heading.scss'

export const Heading = ({ children, variation, headingtype }) => {
  const HeadingElement = headingtype
  return (
    <HeadingElement
      headingtype={headingtype}
      className={`heading ${variation}`}
    >
      {children}
    </HeadingElement>
  )
}

Heading.propTypes = {
  children: PropTypes.node.isRequired
}

Heading.defaultProps = {
  headingtype: 'h1',
  variation: '',
}
