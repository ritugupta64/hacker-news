import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { getDomain, timeStampConvertor } from '../../../utils'
import { Heading } from '../../atoms/Heading'
import { GlobalContext } from '../../../store/context'
import { getUpVotedItem } from '../../../store/action'

import './hackerNewsListingView.scss'

export const HackerNewsListingView = ({
  newsView,
  hideItem,
  upVote,
  index,
}) => {
  const { state, dispatch } = useContext(GlobalContext)
  const { upvotedItem } = state
  const { title, created_at, num_comments, url, points, author } = newsView

  const upvoteNewsItem = (newsView) => {
    const newList = [...upvotedItem]
    const index = newList.findIndex(
      (item) => item.objectID === newsView.objectID
    )
    if (index >= 0) {
      newList.splice(index, 1)
    } else {
      newList.push(newsView)
    }

    getUpVotedItem(newList, dispatch)
  }

  return (
    <article className={`article ${index % 2 === 0 ? 'even' : 'odd'}`}>
      <span className="article__comments">
        {num_comments ? num_comments : 0}
      </span>

      <span className="article__points">{points ? points : 0}</span>

      <button
        className="article__up-vote"
        onClick={() => upvoteNewsItem(newsView)}
      >
        {upVote}
      </button>

      <HackerNewsListingView.Summary
        created_at={created_at}
        author={author}
        hideItem={hideItem}
        title={title}
        url={url}
      />
    </article>
  )
}

const Summary = ({ created_at, author, hideItem, title, url }) => {
  return (
    <div className="article__creation-details">
      <Heading headingtype="h2">{title}&nbsp;</Heading>

      <small className="article__external-url">
        <a href={url} rel="noopener noreferrer" target="_blank">
          ({getDomain(url)})
        </a>
      </small>
      <address className="article__author">&nbsp;by {author}</address>
      <time className="article__date"> {timeStampConvertor(created_at)}</time>
      <button className="article__btn-hide" type="button" onClick={hideItem}>
        &nbsp;[ hide ]
      </button>
    </div>
  )
}
HackerNewsListingView.Summary = Summary

HackerNewsListingView.propTypes = {
  newsView: PropTypes.arrayOf(
    PropTypes.shape({
      created_at: PropTypes.string,
      author: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
    })
  ),
  hideItem: PropTypes.func,
  upVote: PropTypes.string,
  index: PropTypes.number,
  num_comments: PropTypes.number,
  points: PropTypes.number,
}
