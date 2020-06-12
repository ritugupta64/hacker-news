import { HIDE_ITEMS, UP_VOTED_ITEMS, PAGE_ITEM } from './constant'

const initialState = {
  hideItem: '',
  upvotedItem: [],
  page: 1,
}

const Reducer = (state, action) => {
  switch (action.type) {
    case HIDE_ITEMS:
      return {
        ...state,
        hideItem: action.payload,
      }
    case UP_VOTED_ITEMS:
      return {
        ...state,
        upvotedItem: [...action.payload],
      }
    case PAGE_ITEM:
      return {
        ...state,
        page: action.payload,
      }
    default:
      return state || initialState
  }
}

export { initialState, Reducer }
