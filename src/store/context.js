import React from 'react'
import PropTypes from 'prop-types'

export const GlobalContext = React.createContext()

export const GlobalContextProvider = ({ data, children }) => {
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  )
}

GlobalContextProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.elementType,
        PropTypes.array,
        PropTypes.object,
      ]).isRequired,
      data: PropTypes.shape().isRequired
}