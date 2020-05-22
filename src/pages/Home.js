import React, { Fragment, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../redux/actions'

import Header from '../components/Header/Header'
import Searchbar from '../components/Search/Searchbar'
import RadioButton from '../components/Search/RadioButton'

export default function Home() {

    useEffect(() => {
        dispatch(actions.showLoader())
        setTimeout(() => {
           dispatch(actions.hideLoader()) 
        }, 1500);
    })
    
    useEffect(() => {
        dispatch(actions.searchTypeName(true))        
    })
    
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
        </Fragment>
    )
}
