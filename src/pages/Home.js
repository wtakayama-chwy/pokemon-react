import React, { Fragment, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { actions } from '../redux/actions'
import { selectors } from '../redux/selectors/selectors'

import Header from '../components/Header'
import Pokemons from '../components/Pokemons'
import Searchbar from '../components/Searchbar'
import RadioButton from '../components/RadioButton'

export default function Home() {

    const dispatch = useDispatch()

    const handleCheckedName = (event) => {                 
        dispatch(actions.searchTypeName(event.target.id)) 
    }
    const handleCheckedSkills = (event) => {                 
        dispatch(actions.searchTypeSkills(event.target.id))
    }

    return(
        <Fragment>
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
