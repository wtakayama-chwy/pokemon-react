import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../../redux/selectors/selectors';
import { actions } from '../../redux/actions';

import Button from './Button';

export default function Searchbar() {

    const searchTypeName = useSelector(selectors.getSearchTypeName)
    const searchTypeSkills = useSelector(selectors.getSearchTypeSkills)
    const inputValue = useSelector(selectors.getInput)
    const dispatch = useDispatch()

    const handleInput = (event) => dispatch(actions.inputValue(event.target.value))

    return (
        
        <Fragment>
        { searchTypeName &&
            <div className="contact-form">
                <form className="form">
                    <input 
                        className="form-field"
                        name="Pokemon"
                        type="text" 
                        placeholder="Qual pokémon procura? Nome ou id"
                        onChange={handleInput}
                        required
                    />
                    <Button query={inputValue}/>
                </form>
            </div>
        }
        { searchTypeSkills &&
             <div className="contact-form">
                <form className="form">
                    <input 
                        className="form-field"
                        name="Pokemon"
                        type="text" 
                        placeholder="Qual habilidade procura?"
                        onChange={handleInput}
                        required
                    />
                    <Button query={inputValue}/>
                </form>
            </div> 
        }
            
        </Fragment>
    )
}