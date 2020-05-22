import React, { useEffect, Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../redux/actions'

import Header from '../components/Header/Header'
import Pokemons from '../components/Search/Pokemons'
import Searchbar from '../components/Search/Searchbar'
import RadioButton from '../components/Search/RadioButton'
import Message from '../components/Message/Message'

export default function Pokemon() {

    const dispatch = useDispatch()

    const handleCheckedName = (event) => {                 
        dispatch(actions.searchTypeName(event.target.id)) 
    }
    const handleCheckedSkills = (event) => {                         
        dispatch(actions.searchTypeSkills(event.target.id))
    }

    useEffect(() => {
        dispatch(actions.searchTypeName(true))        
    })

    return(
        <Fragment>                        
            <Message />
            <Header />
            <div className="radiobuttons">
                <RadioButton                     
                    id="Nome"
                    name="search"
                    onChange={handleCheckedName} 
                    title="Nome ou id"
                />
                <RadioButton                     
                    id="Habilidades"
                    name="search"
                    onChange={handleCheckedSkills} 
                    title="Habilidades"
                />
            </div>
            <Searchbar />
            <Pokemons />
        </Fragment>
    )
}
