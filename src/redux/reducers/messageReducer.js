import { actionTypes } from '../actions/actionTypes'

const INITIAL_STATE = {
    message: false
}

const messageReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.SHOW_MESSAGE:
            return {
                ...state,
                message: true
            }
        case actionTypes.HIDE_MESSAGE:
            return {
                ...state,
                message: false
            }
        default: 
            return state
    }
}

export { messageReducer }