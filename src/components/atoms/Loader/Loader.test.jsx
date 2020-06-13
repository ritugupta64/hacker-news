import React from 'react'
import { render } from '@testing-library/react'

import {Loader} from '.'

describe('render a Loader', () => {
  let result
  beforeEach(() => {
    result = render(
     <Loader />
    )
  })

  it('should have a loader class', () => {
    const { container } = result
    expect(container.querySelector('.loader')).toBeTruthy()
  })
})
