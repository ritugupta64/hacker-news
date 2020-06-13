import React, { useState, useEffect, useContext } from 'react'

import { HACKER_NEWS } from '../../../API'
import { HackerNewsListing } from '../../molecules/HackerNewsListing/HackerNewsListing'
import { GlobalContext } from '../../../store/context'
import Graph from '../../molecules/Graph/Graph'
import { Header } from '../../molecules/Header/Header'

import './hackerNews.scss'

export const HackerNews = () => {
  const { state } = useContext(GlobalContext)
  const { page } = state

  const [hits, sethits] = useState([])
  const [loadItems, setLoadItems] = useState(page)

  useEffect(() => {
    fetch(`${HACKER_NEWS}?page=${loadItems}`)
      .then(function (response) {
        if (response.status >= 400) {
          throw new Error('Bad response from server')
        }
        return response.json()
      })
      .then((data) => {
        sethits(data?.hits)
      })
  }, [loadItems])

  const hide = (id) => {
    const hideItem = hits.filter((itm) => itm.objectID !== id)
    sethits(hideItem)
  }

  const resultId = hits.map((obj) => {
    return {
      objectID: Object.values(obj.objectID).join(''),
      val: obj.points,
    }
  })

  return (
    <>
      <Header
        comments="Comments"
        voteCount="Vote count"
        upVote="Up vote"
        newsDetails="News Details"
      />
      <HackerNewsListing news={hits} hide={hide} />
      <div className="btn-container">
        <button
          type="button"
          disabled={loadItems === 1}
          onClick={() => setLoadItems(loadItems - 1)}
          className={`btn-container__btn ${
            loadItems === 1 ? 'disabled' : null
          }`}
        >
          Previous
        </button>
        <button
          type="button"
          onClick={() => setLoadItems(loadItems + 1)}
          className="btn-container__btn"
        >
          Next
        </button>
      </div>
      <Graph graphData={resultId} />
    </>
  )
}
