import { combineReducers } from 'redux'

import { searchTypeReducer } from './searchTypeReducer'
import { inputReducer } from './inputReducer'
import { pokemonReducer } from './pokemonReducer'
import { messageReducer } from './messageReducer'
import { loadingReducer } from './loadingReducer'
import { errorReducer } from './errorReducer'

const reducers = combineReducers({
    searchTypeState: searchTypeReducer,
    inputState: inputReducer,
    messageState: messageReducer,
    loadingState: loadingReducer,
    pokemonState: pokemonReducer,
    errorState: errorReducer
})

export { reducers }