import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPerson } from '@fortawesome/free-solid-svg-icons';
import Dropdown from "../../field/Dropdown";
import TextAreaInput from "../../field/TextAreaInput";
import FormValidation from "../../ChildComponents/FormValidation";
import ProgressColor from "../../progress/ProgressColor";
// import ColorProgressDiv from '../../progress/ColorProgressDiv';

function CreateLead(props, { currentStep, onContinueClick }) {

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 10 : 100));
        }, 1000);


        return () => clearInterval(interval);
    }, [progress]);

    const [mobileNumber, setMobileNumber] = useState('');
    const [mobileNumberError, setMobileNumberError] = useState('');

    const handleChangeMobileNumber = (e) => {
        setMobileNumber(e.target.value);
        setMobileNumberError('');

    };
    const [isChecked, setChecked] = useState(false);
    const handleCheckboxChange = () => {
        setChecked(!isChecked);
    };

    return (

        <>
            <form action="">
                <div className="create-lead-area pt-10">
                    <div className="stepper-wrapper">
                        <div className={`stepper-item completed ${currentStep >= 1 ? 'completed' : ''}`}>
                            <div className="step-counter">
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <div className="step-name font-bold">Lead Information</div>
                        </div>
                        <div className={`stepper-item ${currentStep >= 2 ? 'completed' : ''}`}>
                            <div className="step-counter">
                                <FontAwesomeIcon icon={faPerson} />
                            </div>
                            <div className="step-name">Save and publish</div>
                        </div>
                    </div>
                    <div className="form-heading">
                        <h3>Lets Started  with some basic detail</h3>
                    </div>
                    <div className="input-dropdown">
                        <label className="label-name" > Contact </label> <Dropdown
                            dropBg="#ffffff"
                            dropWidth='96.5%;'
                            dropFont='11px'
                            dropPadding='10px 0px'
                            dropColor='#686868'
                            drodownWidth='100%'
                            dropHeading="Select"
                            dropOp1='Select'
                            dropSearch="search"

                        />


                        <span className='check-box-btn'>
                            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} /> <span className='text-[#8b8a8a]'>Add</span>
                        </span>
                    </div>
                    {/* <YourDropdownComponent /> */}
                    {isChecked && (
                        <div className="your-form-container">
                            < FormValidation
                                FormOnSubmit="loginHandle"
                                labelName="Name"
                                placeholder="Last Name"
                                inputName="user name"
                            />
                        </div>
                    )}
                    {isChecked && (
                        <div className="input-dropdown">
                            <label className="label-name" > Mobile</label> <Dropdown
                                dropBg="#ffffff"
                                dropWidth='100%'
                                dropFont='11px'
                                dropPadding='10px 0px'
                                dropColor='#686868'
                                drodownWidth='23%'
                                dropHeading="Select"
                                dropOp1='India +91'
                                dropOp2='+31'
                                dropOp3='+71'
                                dropOp4='+78'
                                dropOp5='+70'

                            />


                            <input
                                type="tel"
                                pattern="[0-9]{10}"
                                id="phoneNumber"
                                required
                                className="form-search"
                                placeholder="10-Digit Mobile"
                                value={mobileNumber}
                                onChange={handleChangeMobileNumber}
                            />
                            {mobileNumberError && <div style={{ color: 'red' }}>{mobileNumberError}</div>}
                        </div>
                    )}

                    {isChecked && (
                        <div className="your-form-container">
                            < FormValidation
                                FormOnSubmit="loginHandle"
                                labelName="Email"
                                placeholder="Email"
                                inputName="user name"
                            />
                        </div>
                    )}

                    {isChecked && (
                        <div className="your-form-container">
                            < FormValidation
                                FormOnSubmit="loginHandle"
                                labelName="Company"
                                placeholder="Company"
                                inputName="user name"
                            />
                        </div>
                    )}
                    <div className="your-form-container">

                        < TextAreaInput
                            id="myTextarea"
                            label="Recruitment"
                            placeholder="Enter your description here"
                            rows={3}
                            textAreaWidth="100%"
                        />
                    </div>

                    <div className="your-form-container">

                        < TextAreaInput
                            id="myTextarea"
                            label="FollowUp Note"
                            placeholder="Enter your description here"
                            rows={3}
                            textAreaWidth="100%"
                        />
                    </div>

                    <div className="your-form-container">
                        < FormValidation
                            labelName="Schedule Date"
                            inputName="user name"
                            inputType="date"
                        />
                    </div>

                    <div className="your-form-container">
                        < FormValidation
                            labelName="Schedule Time"
                            inputName="time"
                            inputType="time"
                        />
                    </div>


                    <ProgressColor
                    />

                    <div className="form-control form-btn">
                        <label></label>
                        <button type="submit" className='continue-btn' onClick={props.onContinueClick}>CONTINUE</button>
                        <button type="button" className="cancle-btn">CANCEL</button>
                        <button type="button" className="cancle-btn-Contact">
                            <span>
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                            ADD NEW CONTACT</button>
                    </div>
                </div>
            </form>
        </>
    )
}
export default CreateLead;