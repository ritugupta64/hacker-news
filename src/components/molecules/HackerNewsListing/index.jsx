import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { HackerNewsListingView } from '../HackerNewsListingView'
import { Loader } from '../../atoms/Loader'

import { GlobalContext } from '../../../store/context'

export const HackerNewsListing = ({ news, hide }) => {
  const { state } = useContext(GlobalContext)

  const { upvotedItem } = state

  const upVote = (post) => {
    const index = upvotedItem.length
      ? upvotedItem.findIndex((item) => item.objectID === post.objectID)
      : -1
    if (index >= 0) {
      return '\u25BC'
    }
    return '\u25B2'
  }

  return news && news.length > 0 ? (
    news.map((item, idx) =>
     !localStorage.getItem(`${item.objectID}_hide`) && item.title ? (
        <HackerNewsListingView
          key={item.objectID}
          newsView={item}
          hideItem={() => hide(item.objectID)}
          upVote={upVote(item)}
          index={idx}
        />
      ) : null
    )
  ) : (
    <Loader />
  )
}

HackerNewsListing.propTypes = {
  news: PropTypes.PropTypes.arrayOf(PropTypes.shape()),
  hide: PropTypes.func,
}
