import React from 'react'
import { useHistory } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { actions } from '../../redux/actions'
import { selectors } from '../../redux/selectors/selectors'

export default function Button() { 

    const history = useHistory()

    const inputValue = useSelector(selectors.getInput)
    const searchTypeSkills = useSelector(selectors.getSearchTypeSkills)
    const searchTypeName = useSelector(selectors.getSearchTypeName)
    
    const dispatch = useDispatch()    

    const handlePokemon = (e) => {        
        e.preventDefault()
        dispatch(actions.fetchPokemon(inputValue))        
        history.push(`/pokemon/${inputValue}`)
    } 

    const handleAbility = (e) => {
        e.preventDefault()
        dispatch(actions.fetchAbility(inputValue))
        history.push(`/ability/${inputValue}`)
    }

    return (
        <div className="button">
            { searchTypeSkills && ( 
                <button className="search-button" onClick={handleAbility}>
                    Buscar
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>   
            )}
            { searchTypeName && (
                <button className="search-button" onClick={handlePokemon}>
                    Buscar
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>   
            )}                     
        </div>
    )
}



