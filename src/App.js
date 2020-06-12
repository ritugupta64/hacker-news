import React, { useReducer } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { GlobalContextProvider } from './store/context'
import { Reducer, initialState } from './store/reducer'
import { ErrorPage } from './components/templates/Error'
import { HackerRank } from './components/templates/HackerRank'

export const App = () => {
  const [state, dispatch] = useReducer(Reducer, initialState)
  return (
    <GlobalContextProvider data={{ state, dispatch }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HackerRank} />
          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </GlobalContextProvider>
  )
}
