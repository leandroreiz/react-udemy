import * as actionTypes from './actions';

const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PERSON:
            const newPerson = {
                id: Math.random(),
                name: 'Leandro',
                age: Math.floor( Math.random() * 36 )
            }
            return {
                ...state,
                persons: state.persons.concat(newPerson)
            }
        case actionTypes.DELETE_PERSON:
            return {
                ...state,
                persons: state.persons.filter(person => action.id !== person.id)
            }
        default:
            return state;
    }
}

export default reducer;