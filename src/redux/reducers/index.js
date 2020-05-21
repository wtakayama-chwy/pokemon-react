import { combineReducers } from 'redux'

import { searchTypeReducer } from './searchTypeReducer'
import { inputReducer } from './inputReducer'
import { pokemonReducer } from './pokemonReducer'

const reducers = combineReducers({
    searchTypeState: searchTypeReducer,
    inputState: inputReducer,
    pokemonState: pokemonReducer
})

export { reducers }