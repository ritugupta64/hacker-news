import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../y18.png'

import './header.scss'

export const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} width="18" alt="Hacker News" className="header__img" />
      </Link>
      <h1>
        {' '}
        <Link to="/">Hacker News</Link>
      </h1>
    </header>
  )
}
