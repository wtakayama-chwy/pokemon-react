import React, { Fragment } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { actions } from '../../redux/actions'
import { selectors } from '../../redux/selectors/selectors'

export default function Abilities() {

    const history = useHistory()
    const dispatch = useDispatch()

    const ability = useSelector(selectors.getAbility)

    const fetchedSkills = useSelector(selectors.getFetchedSkills)

    const searchTypeSkills = useSelector(selectors.getSearchTypeSkills)

    const handleLink = () => {
        setTimeout(() => {
            let newSearch = history.location.pathname.slice(9).replace('/','')
            dispatch(actions.fetchPokemon(newSearch))
        },400)
    }

    return ( 
        <Fragment> 
            { searchTypeSkills && fetchedSkills ? ( 
                <div className="abilities">
                    <h2 className="ability-name">Habilidade: {ability['name']} </h2> 
                    <ul className="abilities-list">
                        {ability['pokemon'].map(item => (
                            <Link key={item.index} to={`/${item['pokemon'].url.substr(26)}`} onClick={handleLink} id="list-item" className="link">
                                <li key={item.id} className="list-item">{item['pokemon'].name}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
            ) 
                : null 
            }               
        </Fragment>
    )
}
