import React, { useState, useEffect, useCallback, Fragment } from 'react'
import ApiService from '../services/apiService'

export default function Pokemons() {

    const [pokemon, setPokemon] = useState()
    const [click, setClick] = useState(false)
    const [name, setName] = useState()
    const apiService = ApiService

    const getPokemons = useCallback(
        () => {
            apiService.ListPokemons(1)
                .then(res => {
                    setPokemon(res)                    
                })
        },
        [apiService],
    )

    const Name = () => {
        return (
            <h2>{pokemon['name']}</h2>
        )
    }

    // const getPokemon = useCallback(
    //     () => {
    //         console.log(pokemon)            
    //     },
    //     [pokemon],
    // )

    function handleClick() {
        setClick(true)
        console.log(pokemon)
    }

    useEffect(() => {
        getPokemons()        
    }, [getPokemons])

    return ( 
        <Fragment>
            <h1>Pokemon</h1>
            <button onClick={handleClick}>Clique</button>
            { click ? (
                <div>                    
                    <h2>Nome: {pokemon['name']}</h2>
                    <h2>Peso: {pokemon['weight']}kg</h2>
                    <h2>Altura: {pokemon['height']}pés</h2>
                    <h3>Tipos: </h3>
                    <ul>
                        {pokemon['types'].map(item => (
                            <li key={item.slot}>{item['type'].name}</li>                            
                        ))
                        }
                    </ul>
                    <img src={pokemon['sprites']['back_default']} alt={pokemon['name']}/>
                </div>
            ): 
                null
            }
        </Fragment>
    )
}
