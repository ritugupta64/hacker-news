import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'

import { GlobalContextProvider } from '../../../store/context'
import { HackerNewsListingView } from '.'

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
  {
    created_at: '2018-02-23T13:01:08.000Z',
    title: 'Announcing the first SHA-2 collision',
    url:
      'https://security.googleblog.com/2017/02/announcing-first-sha1-collision.html',
    author: 'abc',
    points: 3030,
    comment_text: null,
    num_comments: 485,
    objectID: '13713490',
  },
]

const hideItem = jest.fn()

afterEach(cleanup)

describe('render a view component', () => {
  let result
  beforeEach(() => {
    result = render(
      <GlobalContextProvider data={{ state: initialState, dispatch }}>
        <HackerNewsListingView newsView={news} hideItem={hideItem} />
      </GlobalContextProvider>
    )
  })

  it('should hide the item to click on hide button', () => {
    const { container } = result
    fireEvent.click(container.querySelector('.article__btn-hide'))
    expect(hideItem).toHaveBeenCalled()
  })

  it('if index is 1 then class name should be odd', () => {
    const { container } = render(
      <GlobalContextProvider data={{ state: initialState, dispatch }}>
        <HackerNewsListingView newsView={news} hideItem={hideItem} index={1} />
      </GlobalContextProvider>
    )
    expect(container.querySelector('.odd')).toBeTruthy()
  })

  it('if index is 2 then class name should be odd', () => {
    const { container } = render(
      <GlobalContextProvider data={{ state: initialState, dispatch }}>
        <HackerNewsListingView newsView={news} hideItem={hideItem} index={2} />
      </GlobalContextProvider>
    )
    expect(container.querySelector('.even')).toBeTruthy()
  })

  it('should have all valid classes', () => {
    const { container } = result
    expect(container.querySelector('.article')).toBeTruthy()
    expect(container.querySelector('.article__comments')).toBeTruthy()
    expect(container.querySelector('.article__points')).toBeTruthy()
    expect(container.querySelector('.article__up-vote')).toBeTruthy()
    expect(container.querySelector('.article__creation-details')).toBeTruthy()
    expect(container.querySelector('.article__external-url')).toBeTruthy()
    expect(container.querySelector('.article__author')).toBeTruthy()
    expect(container.querySelector('.article__date')).toBeTruthy()
    expect(container.querySelector('.article__btn-hide')).toBeTruthy()
  })
})
