
const initialState = {
    hideItem:''
}
 
const Reducer = (state, action) => {
    switch(action.type){
        case 'hideItems':
        return{
            ...state,
            hideItem:action.payload
        }
        default:
            return state || initialState
    }

}

export {
    initialState, Reducer
}