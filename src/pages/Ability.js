import React, { useEffect, Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../redux/actions'

import Header from '../components/Header/Header'
import Abilities from '../components/Search/Abilities'
import Searchbar from '../components/Search/Searchbar'
import RadioButton from '../components/Search/RadioButton'
import Message from '../components/Message/Message'

export default function Ability() {

    const dispatch = useDispatch()

    const handleCheckedName = (event) => {                 
        dispatch(actions.searchTypeName(event.target.id)) 
    }
    const handleCheckedSkills = (event) => {                 
        dispatch(actions.searchTypeSkills(event.target.id))
    }

    useEffect(() => {
        dispatch(actions.searchTypeSkills(true))        
    })

    return(
        <Fragment>
            <Header />
            <Message />
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
            <Abilities />
        </Fragment>
    )
}
