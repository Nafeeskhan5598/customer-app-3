import React  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPerson, faClock, faEarth } from '@fortawesome/free-solid-svg-icons';
import Dropdown from "../../field/Dropdown";
import RadioBtn from '../../button/RadioBtn';
import CheckRectangle from '../../button/CheckRectangle';

function OpportunitySaveInfo({ onContinueClickFor, handleSubmit, currentStep }) {

 
    return (

        <>
            {/* onSubmit={handleSubmit} */}
            <form action="" onSubmit={handleSubmit}>
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
                            <div className="step-name ">Schedule</div>
                        </div>
                        <div className={`stepper-item completed ${currentStep >= 3 ? 'completed' : ''}`}>
                            <div className="step-counter">
                                <FontAwesomeIcon icon={faEarth} />
                            </div>
                            <div className="step-name font-bold">Save and publish</div>
                        </div>
                    </div>
                    <div className="form-heading">
                        <h3>Great ! Lets save and Publish the opportunity</h3>
                    </div>
                    <div className="input-dropdown">
                        <label className="label-name" > Keyword</label>
                        <input type="text" className='box-border border border-solid border-gray-300 bg-white w-full text-xs p-2 rounded-md' />
                    </div>

                    <div className="input-dropdown">
                        <label className="label-name" > Refer By</label> <Dropdown
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
                    <div className="input-dropdown">
                        <label className="label-name" > Folder</label> <Dropdown
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
                    <div className="input-dropdown">
                        <label className="label-name" > Source</label> <Dropdown
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
                    <div className="input-dropdown">
                        <label className="label-name" > Branch</label> <Dropdown
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
                    <div className="input-dropdown">
                        <label className="label-name" > Assignee</label> <Dropdown
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


                    <div className="input-dropdown">
                        <label className="label-name" > Est. Revenue</label>
                        <div className='box-border relative border border-solid border-gray-300 bg-white w-full text-xs p-2 rounded-md'>
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500">
                                ₹
                            </span>
                            <input
                                type="text"
                                className="pl-8 w-full"
                                placeholder='0.00'
                            />
                        </div>
                    </div>

                    <div className='chec flex justify-around pl-28'>
                        <div className="">
                            <CheckRectangle
                                checkTxt="Send SMS Notification To Assignee"
                            />
                            <CheckRectangle
                                checkTxt="Send SMS Notification To Customer"
                            />
                            <div className="from-radio-btn !pl-0">
                                <div className="radio text-[#8b8a8a] font-bold">
                                    <RadioBtn
                                        id="option1"
                                        name="radioGroup"
                                        value="option1"
                                        label="Private"

                                    />
                                </div>
                                <div className="radio text-[#8b8a8a] font-bold">
                                    <RadioBtn
                                        id="option1"
                                        name="radioGroup"
                                        value="option1"
                                        label="Branch"

                                    />
                                </div>
                            </div>

                        </div>
                        <div>
                            <CheckRectangle
                                checkTxt="Send Email Notification To Assignee"
                            />
                            <CheckRectangle
                                checkTxt="Send Email Notification To Customer"
                            />
                            <div className='flex'>
                                <div>
                                    <CheckRectangle
                                        checkTxt="Protected"
                                    />
                                </div>
                                <div>
                                    <CheckRectangle
                                        checkTxt="Matching Alert"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-control form-btn">
                        <label></label>
                        <button type="submit" className='continue-btn' onClick={onContinueClickFor}>CONTINUE</button>
                        <button type="button" className="cancle-btn">CANCEL</button>
                    </div>
                </div>
            </form>
        </>
    )
}
export default OpportunitySaveInfo;