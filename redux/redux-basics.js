// Import Redux
const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: null
}

// Reducer
// the reducer function receives 2 parameters. The STATE and the ACTION params.
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        };
    }
    
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        };
    }

    return state;
};

// Store
// the parameter passed here needs to be the reducer function created above
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

// Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());
