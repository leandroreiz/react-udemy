// Import redux to use with node
const redux = require('redux');

// Reducer function
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment')
    return {
      counter: state.counter + 1,
    };

  if (action.type === 'decrement')
    return {
      counter: state.counter - 1,
    };

  return state;
};

// Creating the store
const store = redux.createStore(counterReducer);

// Subscriber function
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// Adding a subscription
store.subscribe(counterSubscriber);

// Dispatching an action
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });
