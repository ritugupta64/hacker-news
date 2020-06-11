import React from 'react'

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

Heading.defaultProps = {
  headingtype: 'h1',
  variation: '',
}
