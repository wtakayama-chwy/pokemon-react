import { actionTypes } from './actionTypes'
import apiService from '../../services/apiService'

const actions = {
    inputValue: (event) => ({
        type: actionTypes.INPUT_VALUE, 
        payload: event
    }),  
    fetchPokemonRequest: () => ({
        type: actionTypes.FETCH_POKEMON_REQUEST
    }),
    fetchPokemonSuccess: (pokemon) => ({
        type: actionTypes.FETCH_POKEMON_SUCCESS,
        payload: pokemon
    }),
    fetchPokemonFailure: (error) => ({
        type: actionTypes.FETCH_POKEMON_FAILURE,
        payload: error
    }),
    fetchPokemon: (inputValue) => {
        return (dispatch) => {
            dispatch(actions.fetchPokemonRequest)
            apiService.ListPokemons(inputValue)
                .then(res => {
                    const pokemon = res
                    dispatch(actions.fetchPokemonSuccess(pokemon))
                })
                .catch(err => {
                    const errorMsg = err.message
                    dispatch(actions.fetchPokemonFailure(errorMsg))
                })
        }
    }
}

export { actions }
