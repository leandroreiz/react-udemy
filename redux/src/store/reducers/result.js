import * as actionTypes from '../actions/actionTypes'; 

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result}) //do not use push as it updates the state
            }
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.resultElementId);    
            return {
                ...state,
                results: updatedArray
            }
        default:
            return state;
    }
}

export default reducer;
