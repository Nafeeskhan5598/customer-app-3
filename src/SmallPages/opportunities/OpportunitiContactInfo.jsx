import React  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPerson, faClock, faEarth } from '@fortawesome/free-solid-svg-icons';
import Dropdown from "../../field/Dropdown";

function OpportunitiContactInfo({ currentStep, onContinueClick }) {

    return (

        <>
            <form action="">
                <div className="create-lead-area pt-10">
                    <div className="stepper-wrapper">
                        <div className={`stepper-item completed ${currentStep >= 1 ? 'completed' : ''}`}>
                            <div className="step-counter">
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <div className="step-name font-bold">Contact Information</div>
                        </div>
                        <div className={`stepper-item ${currentStep >= 2 ? 'completed' : ''}`}>
                            <div className="step-counter">
                                <FontAwesomeIcon icon={faPerson} />
                            </div>
                            <div className="step-name">Basic Information</div>
                        </div>
                        <div className={`stepper-item ${currentStep >= 3 ? 'completed' : ''}`}>
                            <div className="step-counter">
                                <FontAwesomeIcon icon={faClock} />
                            </div>
                            <div className="step-name">Schedule</div>
                        </div>
                        <div className={`stepper-item ${currentStep >= 4 ? 'completed' : ''}`}>
                            <div className="step-counter">
                                <FontAwesomeIcon icon={faEarth} />
                            </div>
                            <div className="step-name">Save and publish</div>
                        </div>

                    </div>
                    <div className="form-heading">
                        <h3>Give us customer information about opportunity</h3>
                    </div>
                    <div className="your-form-container">
                        <div className="input-dropdown">
                            <label className="label-name" > Folder </label> <Dropdown
                                dropBg="#ffffff"
                                dropWidth='100%;'
                                dropFont='11px'
                                dropPadding='10px 0px'
                                dropColor='#686868'
                                drodownWidth='100%'
                                dropHeading="Select"
                                dropOp1='Select'
                                dropSearch="search"
                                dropOp2="text-2"
                                dropOp3="text-3"
                                dropOp4="text-4"
                            />
                        </div>
                        <div className="form-control form-btn">
                            <label></label>
                            <button type="submit" className='continue-btn' onClick={onContinueClick}>CONTINUE</button>
                            <button type="button" className="cancle-btn">CANCEL</button>
                            <button type="button" className="cancle-btn-Contact">
                                <span>
                                    <FontAwesomeIcon icon={faUser} />
                                </span>
                                ADD NEW CONTACT</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
export default OpportunitiContactInfo;