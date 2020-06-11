export const getHideItems = (data, dispatch) => {
    dispatch({
        type: 'hideItems',
        payload: data
    })
 }