import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProgressStepsForm(props) {
    return (
        <>
                <div className={props.steperClassName}>
                    <div className="step-counter">
                        <FontAwesomeIcon icon={props.steperIcon}/>
                    </div>
                    <div className={props.txtClassName}>{props.steperName}</div>
                </div>
        </>
    );
}

export default ProgressStepsForm;
