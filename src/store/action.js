import { HIDE_ITEMS, UP_VOTED_ITEMS, PAGE_ITEM } from './constant'

export const getHideItems = (data, dispatch) => {
    dispatch({
        type: HIDE_ITEMS,
        payload: data
    })
 }

 export const getUpVotedItem = (data, dispatch) => {
    dispatch({
        type: UP_VOTED_ITEMS,
        payload: data
    })
 }

 export const getPageItem = (data, dispatch) => {
    dispatch({
        type: PAGE_ITEM,
        payload: data
    })
 }

