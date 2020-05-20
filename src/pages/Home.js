import React, { Fragment } from 'react'

import Header from '../components/Header';
import Pokemons from '../components/Pokemons';

export default function Home() {
    // Variables with state

    return(
        <Fragment>
            <Header />
            <Pokemons />
        </Fragment>
    )
}
