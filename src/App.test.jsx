import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import {GlobalContextProvider} from './store/context'
import {HackerRank} from './components/organism/HackerNews'

const dispatch = jest.fn()

const initialState = {
  character: [],
}

it('renders', () => {
  const { asFragment } = render(
    <GlobalContextProvider data={{ state: initialState, dispatch }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HackerRank} />
        </Switch>
      </BrowserRouter>
    </GlobalContextProvider>
  )
  expect(asFragment()).toMatchSnapshot()
})
