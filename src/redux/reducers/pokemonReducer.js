import { actionTypes } from '../actions/actionTypes'

const INITIAL_STATE = {
    loading: false,
    fetched: false,
    pokemon: {},
    ability: {},
    error: ''
}

const pokemonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // POKEMON
    case actionTypes.FETCH_POKEMON_REQUEST: 
        return { 
            ...state, 
            loading: true,
            fetched: false,
            pokemon: action.payload 
        }  
    case actionTypes.FETCH_POKEMON_SUCCESS:
        return {
            loading: false,
            fetched: true,
            pokemon: action.payload,
            error: ''
        }  
    case actionTypes.FETCH_POKEMON_FAILURE: 
        return {
            loading: false,
            pokemon: {},
            fetched: true,
            error: action.payload
        }
    // ABILITY
    case actionTypes.FETCH_ABILITY_REQUEST: 
    return { 
        ...state, 
        loading: true,
        // fetched: false,
        ability: action.payload 
    }  
    case actionTypes.FETCH_ABILITY_SUCCESS:
        return {
            loading: false,
            // fetched: true,
            ability: action.payload,
            error: ''
        }  
    case actionTypes.FETCH_ABILITY_FAILURE: 
        return {
            loading: false,
            ability: {},
            // fetched: true,
            error: action.payload
        }        
    default: 
      return state
  }
}

export { pokemonReducer }