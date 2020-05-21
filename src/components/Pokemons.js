import React, { useState, Fragment } from 'react'
import { useSelector } from 'react-redux'

import ApiService from '../services/apiService'
import { selectors } from '../redux/selectors/selectors'

export default function Pokemons() {

    const [click, setClick] = useState(false)
    const [name, setName] = useState()
    const apiService = ApiService
    const pokemon = useSelector(selectors.getPokemon)
    const loading = useSelector(selectors.getLoading)
    const fetched = useSelector(selectors.getFetched)
    const searchTypeSkills = useSelector(selectors.getSearchTypeSkills)

    return ( 
        <Fragment> 
            { searchTypeSkills ? ( <h1>Skills</h1> ) : <h1>Name</h1> }   
            { fetched ? (
                <div className="pokemon">
                    <div className="pokemon-card">                    
                        <h2 className="pokemon-name">{pokemon['name']}</h2>
                        <div className="img-wrapper">
                            <img src={pokemon['sprites']['front_default']} alt={pokemon['name']}/>
                        </div>
                        <div className="pokemon-details">
                            <h4>Peso: {(pokemon['weight']/10).toFixed(2).toLocaleString()}kg</h4>
                            <h4>Altura: {(pokemon['height']/10).toFixed(2).toLocaleString()}m</h4>
                            <ul>
                                {pokemon['types'].map(item => (
                                    <h4><li key={item.slot}>{item['type'].name}</li></h4>                            
                                ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            ): 
                null
            }
        </Fragment>
    )
}
