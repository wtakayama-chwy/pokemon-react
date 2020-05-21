import React, { Fragment, useState } from 'react'

import Header from '../components/Header';
import Pokemons from '../components/Pokemons';
import Searchbar from '../components/Searchbar';

export default function Home() {
    
    const [search, setSearch] = useState()

    function updateSearch(text) { 
        console.log(search)
    }

    return(
        <Fragment>
            <Header />
            <Searchbar updateSearch={updateSearch}/>
            <Pokemons search={search}/>
        </Fragment>
    )
}
