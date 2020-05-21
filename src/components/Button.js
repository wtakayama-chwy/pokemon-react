import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { actions } from '../redux/actions'
import { selectors } from '../redux/selectors/selectors'


export default function Button() { 

    const inputValue = useSelector(selectors.getInput)
    
    const dispatch = useDispatch()    

    const handlePokemon = (e) => {        
        e.preventDefault()
        dispatch(actions.fetchPokemon(inputValue))
    } 

    return (
        <div>
            <button className="search-button" onClick={handlePokemon}>
                Buscar
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </button>            
        </div>
    )
}



