export const destinationReducer = ( state, action ) => {
    switch(action.type){
        case 'ADD_DESTINATION':
            return [
                ...state, action.newDestination
            ]
        case 'REMOVE_DESTINATION':
            return state.filter(des => des.id !== action.id)
        default:
            return state
    }   
}
