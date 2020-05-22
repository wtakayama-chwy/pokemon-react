import { actionTypes } from '../actions/actionTypes'

const INITIAL_STATE = {
    loading: false
}

const loadingReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.SHOW_LOADER:
            return {
                ...state,
                loading: true
            }
        case actionTypes.HIDE_LOADER:
            return {
                ...state,
                loading: false
            }
        default: 
            return state
    }
}

export { loadingReducer }