# Assignment 5 - Redux Basics

## 1. Installing Redux

```npm install redux react-redux```

## 2. Creating Reducer

```javascript
const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    // switch between actions and declare the specifications on what to do for each of them
    //return the state
    return state;
}
```

## 3. Creating Store

```javascript
import { createStore } from 'redux';
const store = createStore(reducer); // inform the reducer or combinedReducers as a param to createStore
```

Wrap the ```<App />``` or the component you deseire to use Redux with the ```<Provider />``` component.

```javascript
import { Provider } from 'react-redux';
<Provider store={store}><App /></Provider>
```

## 4. Connecting the application to the Redux store

```javascript
import { connect } from 'react-redux';
export default connect(mapStateToProps, mapDispatchToProps)(Persons);
```

## 5. Mapping the state properties to the component's props and dispatch the actions to the reducer

```javascript
const mapStateToProps = state => {
    return {
        data: state.persons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPerson: () => dispatch({type: actionTypes.ADD_PERSON}),
        onDeletePerson: (id) => dispatch({type: actionTypes.DELETE_PERSON, id: id})
    }
}
```
