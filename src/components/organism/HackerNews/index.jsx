import React, { useState, useEffect } from 'react'

// import { fetchWrapper } from "../../utils";
import { NEWS_HACKER } from '../../../API'
import { HackerNewsListing } from '../../molecules/HackerNewsListing/HackerNewsListing'
// import { GlobalContext } from '../../../store/context'
// import { getHideItems } from '../../../store/action'

import './hackerNews.scss'

export const HackerNews = () => {
  // const { dispatch } = useContext(GlobalContext)
  const [hits, sethits] = useState([])
  

  // const fetchURL = () => {
  //     const url = fetchWrapper(NEWS_HACKER)
  //     setData(url)
  // };

  useEffect(() => {
    fetch(NEWS_HACKER)
      .then((res) => res.json())
      .then((data) => {
        sethits(data?.hits)
      })
  }, [])

  const hide = (id) => {
    const hideItem = hits.filter((itm) => itm.objectID !== id)
    sethits(hideItem)
  }


  const upVote = (id) => {
    const upVoteItem = hits.map((itm) => {
      if(itm.objectID === id){
        itm.points++
      }
      return itm
    })
    console.log(upVoteItem, 'test')
   sethits(upVoteItem)
  }

    // const storedIn = localStorage.setItem('hide', JSON.stringify(id))
    // const getIn = JSON.parse(localStorage.getItem('hide'))

  return <HackerNewsListing news={hits} hide={hide} upVote={upVote} />
}
