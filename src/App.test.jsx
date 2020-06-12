import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import {GlobalContextProvider} from './store/context'
import {Header} from './components/molecules/Header/Header'
import {HackerRank} from './components/organism/HackerNews'

let result
const dispatch = jest.fn()

const initialState = {
  character: [],
}

it('renders', () => {
  const { asFragment } = render(
    <GlobalContextProvider data={{ state: initialState, dispatch }}>
      <BrowserRouter>
        <Header
          comments="Comments"
          voteCount="Vote count"
          upVote="Up vote"
          newsDetails="News Details"
        />
        <Switch>
          <Route exact path="/" component={HackerRank} />
        </Switch>
      </BrowserRouter>
    </GlobalContextProvider>
  )
  expect(asFragment()).toMatchSnapshot()
})
