import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { selectors } from '../../redux/selectors/selectors'

export default function Loader() {

    const loading = useSelector(selectors.getLoading)    

    return(
        <Fragment>
            { loading && (
                <div className="loader-container">
                    <div id="loader">			
                        <div id="moving-container">
                            <div id="pokeball-container">
                                <div id="pokeball">
                                    <div className="pokeball-details"></div>
                                </div>
                            </div>				
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    )
}