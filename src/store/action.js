export const getHideItems = (data, dispatch) => {
    dispatch({
        type: 'hideItems',
        payload: data
    })
 }

 export const getUpVotedItem = (data, dispatch) => {
    dispatch({
        type: 'upVotedItem',
        payload: data
    })
 }

 export const getPageItem = (data, dispatch) => {
    dispatch({
        type: 'pageItem',
        payload: data
    })
 }

