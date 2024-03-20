import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPerson, faEarth, faLocationDot, faChartArea, faGear } from '@fortawesome/free-solid-svg-icons';

function StepComponent(props) {
    return (
        <>
            <div className="stepper-wrapper">
                <div className='stepper-item completed currentStep'>
                    <div className="step-counter">
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className="step-name">Contact Information</div>
                </div>
                <div className='stepper-item completed'>
                    <div className="step-counter">
                        <FontAwesomeIcon icon={faPerson} />
                    </div>
                    <div className="step-name font-bold">Basic Information</div>
                </div>
                <div className='stepper-item'>
                    <div className="step-counter">
                        <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <div className="step-name">Location</div>
                </div>
                <div className='stepper-item'>
                    <div className="step-counter">
                        <FontAwesomeIcon icon={faChartArea} />
                    </div>
                    <div className="step-name">Area and pricing</div>
                </div>
                <div className='stepper-item'>
                    <div className="step-counter">
                        <FontAwesomeIcon icon={faGear} />
                    </div>
                    <div className="step-name">Other details</div>
                </div>
                <div className='stepper-item'>
                    <div className="step-counter">
                        <FontAwesomeIcon icon={faEarth} />
                    </div>
                    <div className="step-name">Save and publish</div>
                </div>
            </div >
        </>
    );
}

export default StepComponent;