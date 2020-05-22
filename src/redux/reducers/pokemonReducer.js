import { actionTypes } from '../actions/actionTypes'

const INITIAL_STATE = {
    fetched: false,
    fetchedSkills: false,
    pokemon: {},
    ability: {},
    error: '', 
}

const pokemonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // POKEMON
    case actionTypes.FETCH_POKEMON_REQUEST: 
        return { 
            ...state,             
            fetched: false,
            pokemon: action.payload,
        }  
    case actionTypes.FETCH_POKEMON_SUCCESS:
        return {            
            fetched: true,
            pokemon: action.payload,
            error: '',
        }  
    case actionTypes.FETCH_POKEMON_FAILURE: 
        return {            
            pokemon: {},
            fetched: true,
            error: action.payload
        }
    // ABILITY
    case actionTypes.FETCH_ABILITY_REQUEST: 
        return { 
            ...state,             
            fetchedSkills: false,
            ability: action.payload,
    }  
    case actionTypes.FETCH_ABILITY_SUCCESS:
        return {            
            fetchedSkills: true,
            ability: action.payload,
            error: '',
        }  
    case actionTypes.FETCH_ABILITY_FAILURE: 
        return {            
            ability: {},
            fetchedSkills: true,
            error: action.payload,
        }        
    default: 
      return state
  }
}

export { pokemonReducer }