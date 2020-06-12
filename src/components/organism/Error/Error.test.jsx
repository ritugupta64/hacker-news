import React from 'react'
import { render } from '@testing-library/react'

import { Error } from '.'

describe('Error screen', () => {
  let result
  beforeEach(() => {
    result = render(<Error />)
  })

  it('should have heading', () => {
    const { container } = result
    expect(container.querySelector('h1')).toBeTruthy()
  })
})
