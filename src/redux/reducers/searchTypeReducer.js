import { actionTypes } from '../actions/actionTypes'

const INITIAL_STATE = {
    checkedName: false,
    checkedSkills: false
}

const searchTypeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_TYPE_NAME: 
            return { 
                ...state, 
                checkedName: true,
                checkedSkills: false
        }    
        case actionTypes.SEARCH_TYPE_SKILLS:
            return {
                ...state,
                checkedName: false,
                checkedSkills: true
            }
        default: 
            return state
    }
}

export { searchTypeReducer }