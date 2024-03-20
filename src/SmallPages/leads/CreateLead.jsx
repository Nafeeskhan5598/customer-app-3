import React, { useState, useEffect } from 'react';
import TextAreaInput from "../../field/TextAreaInput";
import FormValidation from "../../ChildComponents/FormValidation";
import ProgressColor from "../../progress/ProgressColor";
import HalfDropdown from '../../field/HalfDropdown';
import PageHeading from '../../common/PageHeading';
import ContinueCancelNewBtn from '../../button/ContinueCancelNewBtn';

function CreateLead(props) {

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
                    <PageHeading pageHeading="Lets Started  with some basic detail" ></PageHeading>

                    <div className="input-dropdown">
                        <label className="label-name" > Contact </label>
                        <div className='flex w-full responsive-half-drop'>
                            <HalfDropdown
                                dropBg="#ffffff"
                                dropWidth='90%;'
                                dropFont='11px'
                                dropPadding='10px 0px'
                                dropColor='#686868'
                                drodownWidth='90%'
                                dropHeading="Select"
                                dropOp1='Select'
                                dropSearch="search"

                            />


                            <span className='check-box-btn !w-[10%] responsive-check'>
                                <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} /> <span className='text-[#8b8a8a]'>Add</span>
                            </span>
                        </div>
                    </div>
                    {/* <YourDropdownComponent /> */}
                    {isChecked && (
                        <div className="your-form-container">
                            < FormValidation
                                FormOnSubmit="loginHandle"
                                labelName="Name"
                                placeholder="Last Name"
                                inputName="user_name"
                            />
                        </div>
                    )}
                    {isChecked && (
                        <div className="input-dropdown">
                            <label className="label-name" > Mobile </label>
                            <div className='flex w-full'>
                                <HalfDropdown
                                    dropBg="#ffffff"
                                    dropWidth='10%;'
                                    dropFont='11px'
                                    dropPadding='10px 0px'
                                    dropColor='#686868'
                                    drodownWidth='10%'
                                    dropOp1='Selected'
                                    dropOp2='+71'
                                    dropOp3='+31'
                                    dropOp4='+77'
                                    dropOp5='+75'
                                    dropOp6='+45'
                                    dropOp7='+87'

                                />

                                <input
                                    type="tel"
                                    pattern="[0-9]{10}"
                                    id="phoneNumber"
                                    required
                                    className="form-search !w-[90%] responsive-mobile"
                                    placeholder="10-Digit Mobile"
                                    value={mobileNumber}
                                    onChange={handleChangeMobileNumber}
                                />
                            </div>
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


                    <ProgressColor />

                    <ContinueCancelNewBtn onContinueClick={props.onContinueClick} />
                </div>
            </form>
        </>
    )
}
export default CreateLead;