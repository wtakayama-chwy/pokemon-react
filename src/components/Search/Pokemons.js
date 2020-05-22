import React, { Fragment } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { actions } from '../../redux/actions'
import { selectors } from '../../redux/selectors/selectors'

export default function Pokemons() {

    const history = useHistory()
    const dispatch = useDispatch()

    const pokemon = useSelector(selectors.getPokemon)

    const fetched = useSelector(selectors.getFetched)
    const searchTypeName = useSelector(selectors.getSearchTypeName)

    const handleLink = () => {
        setTimeout(() => {
            let newSearch = history.location.pathname.slice(9).replace('/','')
            dispatch(actions.fetchAbility(newSearch))
        },400)
    }

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
                                ))}
                            </ul>
                        </div>
                        <div className="pokemon-abilities">
                            <h4 className="skills-title">Habilidades:</h4>
                            <ul className="skills-list">
                                {pokemon['abilities'].map(item => (
                                    <Link key={item.index} to={`/${item['ability'].url.substr(26)}`} onClick={handleLink} className="link">
                                        <li className="ability" key={item.id}>{item['ability'].name}</li>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                ) : null
            }
        </Fragment>
    )
}
