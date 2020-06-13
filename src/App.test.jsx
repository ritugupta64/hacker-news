import React from 'react'
import { render } from '@testing-library/react'

import {GlobalContextProvider} from './store/context'
import {HackerRank} from './components/templates/HackerRank'

const dispatch = jest.fn()

const initialState = {
  character: [],
}

it('renders', () => {
  const { asFragment } = render(
    <GlobalContextProvider data={{ state: initialState, dispatch }}>
      <HackerRank />
    </GlobalContextProvider>
  )
  expect(asFragment()).toMatchSnapshot()
})
