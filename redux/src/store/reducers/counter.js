import * as actionTypes from '../actions'; 

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.INCREMENT:
            // Updating state immutably
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case actionTypes.DECREMENT:
            // Updating state immutably in a simpler way
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            }
        default:
            return state;
    }
}

export default reducer;