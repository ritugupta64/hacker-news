import React, { useReducer } from 'react'

import { GlobalContextProvider } from './store/context'
import { Reducer, initialState } from './store/reducer'
import { HackerRank } from './components/templates/HackerRank'


const App = () => {
  const [state, dispatch] = useReducer(Reducer, initialState)
  return (
    <GlobalContextProvider data={{ state, dispatch }}>
         <HackerRank />
    </GlobalContextProvider>
  )
}
export default App
