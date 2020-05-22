import React, { Fragment } from 'react'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'
import { selectors } from '../../redux/selectors/selectors'

export default function Pokemons() {

    const history = useHistory()

    const pokemon = useSelector(selectors.getPokemon)

    const fetched = useSelector(selectors.getFetched)
    const searchTypeName = useSelector(selectors.getSearchTypeName)

    return ( 
        <Fragment>                         
            { searchTypeName & fetched || history & fetched ? (
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
                                    <li key={item.slot}>{item['type'].name}</li>
                                ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                ) : null
            }
        </Fragment>
    )
}
