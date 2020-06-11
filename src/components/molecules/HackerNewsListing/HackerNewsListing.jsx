import React from 'react'
import PropTypes from 'prop-types'

import { HackerNewsListingView } from '../HackerNewsListingView/HackerNewsListingView'
import { Loader } from '../../atoms/Loader/Loader'

import './hackerNewsListing.scss'

export const HackerNewsListing = ({ news, hide, upVote }) => {
  console.log(upVote)
  return news && news.length > 0 ? (
    <ol>
      {news.map((item) =>
        item.title ? (
          <li key={item.objectID}>
            <HackerNewsListingView newsView={item} hideItem={() => hide(item.objectID)} upVote={upVote} />
          </li>
        ) : null
      )}
    </ol>
  ) : (
    <Loader />
  )
}

HackerNewsListing.propTypes = {
  news: PropTypes.array,
}
