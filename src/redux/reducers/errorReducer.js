import { actionTypes } from '../actions/actionTypes'

const INITIAL_STATE = {
    error: false
}

const errorReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.ERROR_HANDLER:
            return {
                ...state,
                error: true
            }
        case actionTypes.HIDE_ERROR:
            return {
                ...state,
                error: false
            }
        default: 
            return state
    }
}

export { errorReducer }