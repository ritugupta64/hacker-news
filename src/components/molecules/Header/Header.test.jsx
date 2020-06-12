import React from 'react'
import { render } from '@testing-library/react'

import {Header} from './Header'

describe('render a Header', () => {
  let result
  beforeEach(() => {
    result = render(
     <Header />
    )
  })

  it('should have a header class', () => {
    const { container, debug } = result
    expect(container.querySelector('.header')).toBeTruthy()
  })
})
