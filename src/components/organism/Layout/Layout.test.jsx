import React from 'react'
import { render } from '@testing-library/react'

import {Layout} from '.'

describe('render a Layout', () => {
  let result
  beforeEach(() => {
    result = render(
     <Layout>
       <main>test</main>
      </Layout> 
    )
  })

  it('should have a main tag', () => {
    const { container } = result
    expect(container.querySelector('main')).toBeTruthy()
  })
})
