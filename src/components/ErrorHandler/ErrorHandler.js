import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { selectors } from '../../redux/selectors/selectors'

export default function ErrorHandler() {

    const errorHandler = useSelector(selectors.getError)

    return (
        <Fragment>
            { errorHandler && (
                <div className="handler-error">
                    <h1 id="error-message">Não foi possível completar sua ação. Por favor, tente novamente</h1>
                </div>
            )}
        </Fragment>
    )
}
