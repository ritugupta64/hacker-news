import React, { useReducer } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { GlobalContextProvider } from './store/context'
import { Reducer, initialState } from './store/reducer'
import { Header } from './components/molecules/Header/Header'
import { ErrorPage } from './components/templates/Error'
import { HackerRank } from './components/templates/HackerRank'

function App() {
  const [state, dispatch] = useReducer(Reducer, initialState)
  return (
    <GlobalContextProvider data={{ state, dispatch }}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HackerRank} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </GlobalContextProvider>
  )
}

export default App
