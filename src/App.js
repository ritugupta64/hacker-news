import React, { useReducer } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { GlobalContextProvider } from './store/context'
import { Reducer, initialState } from './store/reducer'
import { Header } from './components/molecules/Header/Header'
import { ErrorPage } from './components/templates/Error'
import { HackerRank } from './components/templates/HackerRank'

export const App = () => {
  const [state, dispatch] = useReducer(Reducer, initialState)
  return (
    <GlobalContextProvider data={{ state, dispatch }}>
      <BrowserRouter>
        <Header comments= "Comments" voteCount = "Vote count" upVote = "Up vote" newsDetails = "News Details" />
        <Switch>
          <Route exact path="/" component={HackerRank} />
          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </GlobalContextProvider>
  )
}

