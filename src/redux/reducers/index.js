import { inputReducer } from './inputReducer'
import { combineReducers } from 'redux'
import { pokemonReducer } from './pokemonReducer'

const reducers = combineReducers({
    inputState: inputReducer,
    pokemonState: pokemonReducer
})

export { reducers }