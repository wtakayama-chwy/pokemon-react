import { actionTypes } from '../actions/actionTypes'

const INITIAL_STATE = {
    inputValue: ''
}

const inputReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.INPUT_VALUE: 
            return { 
                ...state, 
                inputValue: action.payload 
        }    
        default: 
            return state
    }
}

export { inputReducer }