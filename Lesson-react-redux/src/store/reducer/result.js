import * as actionType from '../actions';

const initialState = {
    result: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionType.STORE_RESULT:
            return {
                ...state,
                result: state.result.concat({id: new Date(), value: action.payload})
            }    
        case actionType.DELETE_RESULT:
            const newArray = state.result.filter(res => res.id !== action.itemId)
            return {
                ...state,
                result: newArray

            }
        default:
            return state;
    }
}

export default reducer;