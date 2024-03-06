import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPerson, faClock, faEarth } from '@fortawesome/free-solid-svg-icons';
import Dropdown from "../../field/Dropdown";
import TextAreaInput from "../../field/TextAreaInput";

function OpportunitySchedul({ onContinueClick, currentStep }) {

    const [selectedDate, setSelectedDate] = useState('');

    useEffect(() => {
        const getCurrentDate = () => {
            const today = new Date();
            const dd = String(today.getDate()).padStart(2, '0');
            const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
            const yyyy = today.getFullYear();

            return `${yyyy}-${mm}-${dd}`;
        };

        setSelectedDate(getCurrentDate());
    }, []);



    const [selectedTime, setSelectedTime] = useState('');

    useEffect(() => {
        const getCurrentTime = () => {
            const today = new Date();
            const hh = String(today.getHours()).padStart(2, '0');
            const mm = String(today.getMinutes()).padStart(2, '0');

            return `${hh}:${mm}`;
        };

        setSelectedTime(getCurrentTime());
    }, []);

    return (

        <>
            {/* onSubmit={handleSubmit} */}
            <form action="" >
                <div className="create-lead-area pt-10">
                    <div className="stepper-wrapper">
                        <div className={`stepper-item completed ${currentStep >= 1 ? 'completed' : ''}`}>
                            <div className="step-counter">
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <div className="step-name">Contact Information</div>
                        </div>
                        <div className={`stepper-item completed ${currentStep >= 2 ? 'completed' : ''}`}>
                            <div className="step-counter">
                                <FontAwesomeIcon icon={faPerson} />
                            </div>
                            <div className="step-name ">Basic Information</div>
                        </div>
                        <div className={`stepper-item completed ${currentStep >= 3 ? 'completed' : ''}`}>
                            <div className="step-counter">
                                <FontAwesomeIcon icon={faClock} />
                            </div>
                            <div className="step-name font-bold">Schedule</div>
                        </div>
                        <div className={`stepper-item ${currentStep >= 3 ? 'completed' : ''}`}>
                            <div className="step-counter">
                                <FontAwesomeIcon icon={faEarth} />
                            </div>
                            <div className="step-name">Save and publish</div>
                        </div>
                    </div>
                    <div className="form-heading">
                        <h3>Plan next followup for opportunity</h3>
                    </div>

                    <div className="input-dropdown">
                        <label className="label-name" > For</label> <Dropdown
                            dropBg="#ffffff"
                            dropWidth='100%'
                            dropFont='11px'
                            dropPadding='10px 0px'
                            dropColor='#686868'
                            drodownWidth='100%'
                            dropHeading="Select"
                            dropOp1='Select'
                            dropOp2='Initiated'
                            dropOp3='General Follow-Up'
                            dropOp4='Office visites[Meeting]'
                            dropOp5='Inspection [Site visit planed]'
                            dropOp6='Finalization [Site visit completed]'
                            dropOp7='Completed'
                        />
                    </div>



                    <div className="your-form-container">
                        < TextAreaInput
                            id="myTextarea"
                            label="Internal Note"
                            placeholder="Enter your description here"
                            rows={3}
                            textAreaWidth="100%"
                        />
                    </div>
                    <div className="input-dropdown relative bottom-4">
                        <label className="label-name" ></label>
                        <div className='text-[#bbb8b8]'>Maximum 2000 character allowed</div>
                    </div>

                    <div className="input-dropdown">

                        <label className="label-name" > Request Date</label>
                        <input
                            type='date'
                            className="form-search !w-[50%]"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                        />
                        {/* <label className="form-search !w-[30%] bg-[#efefef]">Est Close Date</label> */}
                        <input
                            type="time"
                            className="form-search !w-[50%]"
                            value={selectedTime}
                            onChange={(e) => setSelectedTime(e.target.value)}
                        />
                    </div>
                    <div className="form-control form-btn">
                        <label></label>
                        <button type="submit" className='continue-btn' onClick={onContinueClick}>CONTINUE</button>
                        <button type="button" className="cancle-btn">CANCEL</button>
                    </div>
                </div>
            </form>
        </>
    )
}
export default OpportunitySchedul;