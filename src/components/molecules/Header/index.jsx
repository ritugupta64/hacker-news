import React from 'react'

import './header.scss'

export const Header = ({ comments, voteCount, upVote, newsDetails }) => {
  return (
    <header className="header">
      <div className="header__comments">{comments}</div>
      <div className="header__vote-count">{voteCount}</div>
      <div className="header__up-vote">{upVote}</div>
      <div className="header__news-details">{newsDetails}</div>
    </header>
  )
}
