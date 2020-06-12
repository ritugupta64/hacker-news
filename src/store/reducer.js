const initialState = {
  hideItem: '',
  upvotedItem: [],
  page: 1,
}

const Reducer = (state, action) => {
  switch (action.type) {
    case 'hideItems':
      return {
        ...state,
        hideItem: action.payload,
      };
    case 'upVotedItem':
      return {
        ...state,
        upvotedItem: [...action.payload],
      };
    case 'pageItem':
        return{
            ...state,
            page: action.payload
        };
    default:
      return state || initialState
  }
}

export { initialState, Reducer }
