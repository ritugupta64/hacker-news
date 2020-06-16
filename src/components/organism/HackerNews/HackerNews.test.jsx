import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'

import { GlobalContextProvider } from '../../../store/context'
import { HackerNews } from '.'

const initialState = {
  hideItem: '',
  upvotedItem: [],
  page: 1,
}

const dispatch = jest.fn()

const hits =  [
  {
    "created_at": "2017-02-23T13:01:08.000Z",
    "title": "Announcing the first SHA-1 collision",
    "url": "https://security.googleblog.com/2017/02/announcing-first-sha1-collision.html",
    "author": "pfg",
    "points": 3030,
    "story_text": null,
    "comment_text": null,
    "num_comments": 485,
    "story_id": null,
    "story_title": null,
    "story_url": null,
    "parent_id": null,
    "created_at_i": 1487854868,
    "relevancy_score": 7272,
    "_tags": [
      "story",
      "author_pfg",
      "story_13713480"
    ],
    "objectID": "13713480",
    "_highlightResult": {
      "title": {
        "value": "Announcing the first SHA-1 collision",
        "matchLevel": "none",
        "matchedWords": [
          
        ]
      },
      "url": {
        "value": "https://security.googleblog.com/2017/02/announcing-first-sha1-collision.html",
        "matchLevel": "none",
        "matchedWords": [
          
        ]
      },
      "author": {
        "value": "pfg",
        "matchLevel": "none",
        "matchedWords": [
          
        ]
      }
    }
  }
]


afterEach(cleanup)
describe('render a HackerNews', () => {
  let result
  beforeEach(() => {
    result = render(
      <GlobalContextProvider data={{ state: initialState, dispatch }}>
        <HackerNews />
      </GlobalContextProvider>
    )
    global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ hits }),
  })
);
  })

  it('match snapshot', () => {
    expect(result.asFragment()).toMatchSnapshot()
  })

  it('should have header class', () => {
    const { container } = result
    expect(container.querySelector('.header')).toBeTruthy()
  })

  it('header component should have 4 div element', () => {
    
    const { container } = result
    expect(container.querySelector('.header').querySelectorAll('div').length).toBe(4)
  })

  it('when the promise is resolved', async() => {
    fetch.mockResolvedValueOnce(() => ({success: true}))
    expect(await screen.findByText(/Announcing the first SHA-1 collision/i)).toBeInTheDocument()
  })

})
