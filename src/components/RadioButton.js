import React from 'react';
import { Fragment } from 'react';

const RadioButton = (props) => {

    return (
        <Fragment>
            <div className="radio-button">
                <input type="radio"
                    {...props}
                />
                <label className="checkmark">{props.title}</label>
            </div>
        </Fragment>
    );
}

export default RadioButton;