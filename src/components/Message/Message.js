import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { selectors } from '../../redux/selectors/selectors'

export default function Message() {

    const message = useSelector(selectors.getMessage)

    return (
        <Fragment>
            { message && (
                <div className="handler-messages">
                    <h1>Busca completada com sucesso!</h1>
                </div>
            )}
        </Fragment>
    )
}
