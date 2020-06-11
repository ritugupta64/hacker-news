import React from 'react'
import PropTypes from 'prop-types'

import { getDomain, timeStampConvertor } from '../../../utils'
import { Heading } from '../../atoms/Heading/heading'

import './hackerNewsListingView.scss'

export const HackerNewsListingView = ({ newsView, hideItem, upVote }) => {

  const { title, created_at, num_comments, url, points, author } = newsView
  return (
    <article className="article">
      <HackerNewsListingView.Title title={title} url={url} />
      <HackerNewsListingView.Summary
        created_at={created_at}
        num_comments={num_comments}
        points={points}
        author={author}
        hideItem={hideItem}
        upVote = {upVote}
      />
    </article>
  )
}

const Title = ({ title, url }) => {
  return (
    <Heading headingtype = "h2">
      {title && title} {url ? (<a href={url} rel="noopener noreferrer" target="_blank">({getDomain(url)})</a>) : null}
    </Heading>
  )
}

Title.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
}

const Summary = ({ created_at, num_comments, points, author, objectID, hideItem, upVote }) => {
  return (
    <div className="article__details">
     
      <address>
        {points ? `${points} points` : 0} by {author && author}
        <span onClick={() => upVote(objectID)} style={{display:'inlineBlock', padding: '5px', border: '1px solid red'}}>test</span>
      </address>
      <time>{created_at && timeStampConvertor(created_at)} </time>
      <button type="button" onClick={hideItem}>| hide |</button>
      <small>{`${num_comments ? num_comments : 0} comments`}</small>
    </div>
  )
}

Summary.propTypes = {
  created_at: PropTypes.string,
  num_comments: PropTypes.number,
  points: PropTypes.number,
  author: PropTypes.string,
}

HackerNewsListingView.Title = Title
HackerNewsListingView.Summary = Summary
