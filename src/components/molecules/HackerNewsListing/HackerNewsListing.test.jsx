import React from 'react'
import { render, cleanup } from '@testing-library/react'

import { GlobalContextProvider } from '../../../store/context'
import { HackerNewsListing } from '.'

const dispatch = jest.fn()

const initialState = {
  upvotedItem: [],
}

const news = [
  {
    created_at: '2017-02-23T13:01:08.000Z',
    title: 'Announcing the first SHA-1 collision',
    url:
      'https://security.googleblog.com/2017/02/announcing-first-sha1-collision.html',
    author: 'pfg',
    points: 3030,
    comment_text: null,
    num_comments: 485,
    objectID: '13713480',
  },
]

const hide = jest.fn()

describe('Hacker news listing component', () => {
  let result
  beforeEach(() => {
    result = render(
      <GlobalContextProvider data={{ state: initialState, dispatch }}>
        <HackerNewsListing news={[]} hide={hide} />
      </GlobalContextProvider>
    )
  })
 
  afterEach(cleanup)

  it('should have a loader class if news does not have data', () => {
    const { container } = result
    expect(container.querySelector('.loader')).toBeTruthy()
  })

  it('should have a listing when data is available', () => {
    const { container } =  render(
        <GlobalContextProvider data={{ state: initialState, dispatch }}>
          <HackerNewsListing news={news} hide={hide} />
        </GlobalContextProvider>
      )
    expect(container.querySelector('h2')).toBeTruthy()
    expect(container.querySelector('.loader')).toBeFalsy()
  })
})
