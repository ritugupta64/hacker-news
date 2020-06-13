import React from 'react'
import { render } from '@testing-library/react'

import {Heading} from '.'

describe('render a Heading', () => {
  let result
  beforeEach(() => {
    result = render(
      <Heading className="heading" headingtype="h2">
        h2 heading
      </Heading>
    )
  })

  it('should have heading element', () => {
    const { container } = result
    expect(container.querySelector('h2')).toBeTruthy()
  })

  it('should have className attribute', () => {
    const { container } = result
    expect(container.querySelector('.heading')).toBeTruthy()
  })
})
