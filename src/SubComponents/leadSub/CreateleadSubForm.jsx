import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPerson } from '@fortawesome/free-solid-svg-icons';
import Dropdown from "../../field/Dropdown";
import RadioBtn from '../../button/RadioBtn';
import CheckRectangle from '../../button/CheckRectangle';

function CreateLeadSubForm({ currentStep }) {

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const handleSubmit = (e) => {
        window.alert('Your form is successfully submitted');

        setShowSuccessMessage(true);
    };


    return (

        <>
            <form action="" onSubmit={handleSubmit}>
                <div className="create-lead-area pt-10">
                    <div className="stepper-wrapper">
                        <div className={`stepper-item completed ${currentStep >= 1 ? 'completed' : ''}`}>
                            <div className="step-counter">
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <div className="step-name font-bold">Lead Information</div>
                        </div>
                        <div className={`stepper-item completed ${currentStep >= 2 ? 'completed' : ''}`}>
                            <div className="step-counter">
                                <FontAwesomeIcon icon={faPerson} />
                            </div>
                            <div className="step-name font-bold">Save and publish</div>
                        </div>
                    </div>
                    <div className="form-heading">
                        <h3>Lets Started  with some basic detail</h3>
                    </div>

                    <div className="input-dropdown">
                        <label className="label-name" > Source </label> <Dropdown
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

                    <div className="input-dropdown">
                        <label className="label-name" > Branch </label> <Dropdown
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

                    <div className="input-dropdown">
                        <label className="label-name" > Assignee </label> <Dropdown
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

                    <div className='chec flex justify-around pl-28'>
                        <div className="">
                            <CheckRectangle
                                checkTxt="Send SMS Notification To Assignee"
                            />
                            <CheckRectangle
                                checkTxt="Send SMS Notification To Customer"
                            />
                        </div>
                        <div>
                            <CheckRectangle
                                checkTxt="Send Email Notification To Assignee"
                            />
                            <CheckRectangle
                                checkTxt="Send Email Notification To Customer"
                            />
                            <CheckRectangle
                                checkTxt="Terms And Condition Shared"
                            />
                        </div>
                    </div>

                    <div className="from-radio-btn">
                        <div className="radio">
                            <RadioBtn
                                id="option1"
                                name="radioGroup"
                                value="option1"
                                label="Private"

                            />
                        </div>
                        <div className="radio">
                            <RadioBtn
                                id="option1"
                                name="radioGroup"
                                value="option1"
                                label="Private"

                            />
                        </div>
                    </div>

                    <div className="form-control form-btn">
                        <label></label>
                        <button type="submit" className='continue-btn'>CONTINUE</button>
                        <button type="button" className="cancle-btn">CANCEL</button>
                    </div>
                </div>
                {showSuccessMessage && (
                    <div className="success-message">
                        Your form is successfully submitted
                        <span className="green-icon">✔</span>
                    </div>
                )}
            </form>
        </>
    )
}
export default CreateLeadSubForm;