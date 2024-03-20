import React, { useState } from 'react';
import Dropdown from "../../field/Dropdown";
import CheckRectangle from '../../button/CheckRectangle';
import RadioBtn from '../../button/RadioBtn';
import Switch from 'react-js-switch'
import PageHeading from '../../common/PageHeading';

function CreatePropertiesSaveInfo({ onContinueClick, currentStep }) {


    const [isSwitchOn, setIsSwitchOn] = useState(true)

    const switch_onChange_handle = () => {
        setIsSwitchOn(!isSwitchOn)

    }


    return (

        <>
            {/* onSubmit={handleSubmit} */}
            <form action="" >
                <div className="create-lead-area pt-10">
                    <PageHeading pageHeading="Give us Some information basic requiments" />

                    <div className="input-dropdown">

                        <label className="label-name" > Keyword</label>
                        <input
                            type='text'
                            className="form-search !w-[100%]"

                        />
                        {/* <label className="form-search !w-[30%] bg-[#efefef]">Est Close Date</label>
                        <input type="date" className="form-search !w-[35%]" placeholder="First Name" /> */}
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
                            dropOp2='Sale'
                            dropOp3='PG'
                            dropOp4='Rent/Lease'
                            dropOp5='Re-Development'
                            dropOp6='Joint Ventures'
                            dropOp7='Services'

                        />
                    </div>
                    <div className="input-dropdown">
                        <label className="label-name" > Key Holder </label> <Dropdown

                            dropBg="#ffffff"
                            dropWidth='100%'
                            dropFont='11px'
                            dropPadding='10px 0px'
                            dropColor='#686868'
                            drodownWidth='100%'
                            dropHeading="Select"
                            dropOp1='Select'
                            dropOp2='Residetial'
                            dropOp3='Residetial Apartment'
                            dropOp4='Residetial Independent House / Villa'
                            dropOp5='Residetial Independent / Builder Floor'
                            dropOp6='Residetial Studio Apartment'
                            dropOp7='Residetial Form House'


                        />
                    </div>

                    <div className="input-dropdown">
                        <label className="label-name" >Folder</label>
                        <Dropdown
                            dropBg="#ffffff"
                            dropWidth='100%'
                            dropFont='11px'
                            dropPadding='10px 0px'
                            dropColor='#686868'
                            drodownWidth='100%'
                            dropHeading="Select"
                            dropOp1='Select'
                            dropOp2='New'
                            dropOp3='Resale'
                            dropOp4='Pre Launch'
                            dropOp5='Pre Lease / Pre Rentel'
                            dropOp6='RIndividual'
                            dropOp7='Company'

                        />
                    </div>
                    <div className="input-dropdown">
                        <label className="label-name" > Source</label>
                        <Dropdown
                            dropBg="#ffffff"
                            dropWidth='100%'
                            dropFont='11px'
                            dropPadding='10px 0px'
                            dropColor='#686868'
                            drodownWidth='100%'
                            dropHeading="Select"
                            dropOp1='Select'
                            dropOp2='99acres.com'
                            dropOp3='99acres.com(free)'
                            dropOp4='Abodesindia'
                            dropOp5='ABP'
                            dropOp6='Agent Refferral'
                            dropOp7='Area Group'
                        />
                    </div>
                    <div className="input-dropdown">
                        <label className="label-name" >Branch</label>
                        <Dropdown
                            dropBg="#ffffff"
                            dropWidth='100%'
                            dropFont='11px'
                            dropPadding='10px 0px'
                            dropColor='#686868'
                            drodownWidth='100%'
                            dropHeading="Select"
                            dropOp1='Select'
                            dropOp2='1 RK'
                            dropOp3='1 BHK'
                            dropOp4='1.5 BHK'
                            dropOp5='2 BHK'
                            dropOp6='2.5 BHK'
                            dropOp7='3 BHK'

                        />
                    </div>
                    <div className="input-dropdown">
                        <label className="label-name" >Assignee</label>
                        <Dropdown
                            dropBg="#ffffff"
                            dropWidth='100%'
                            dropFont='11px'
                            dropPadding='10px 0px'
                            dropColor='#686868'
                            drodownWidth='100%'
                            dropHeading="Select"
                            dropOp1='Select'
                            dropOp2='Full Furnished'
                            dropOp3='UnFurnished'
                            dropOp4='Semi Furnished'
                            dropOp5='Redy to Furnished'
                            dropOp6='Bareshell'
                            dropOp7='Warmshell'

                        />
                    </div>
                    <div className="input-dropdown">
                        <label className="label-name" >Featured</label>
                    <Switch
                        value={isSwitchOn}
                        onChange={switch_onChange_handle}
                        backgroundColor={{ on: '#007bff', off: '#c5c5c5' }}
                        borderColor={{ on: '#007bff', off: 'white' }}
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
                                checkTxt="Protected(Hide your Contacts details)"
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
                                label="Branch"

                            />
                        </div>
                    </div>

                   {/* <div className="input-dropdown">
                        <label className="label-name" > Suitable For</label>
                        <DropdownSecond
                            dropBg="#ffffff"
                            dropWidth='100%'
                            dropFont='11px'
                            dropPadding='10px 0px'
                            dropColor='#686868'
                            drodownWidth='100%'
                            dropHeading="Select"
                            dropOp1='Select'
                            dropOp2='Mrs'
                            dropOp3='Ms'
                            dropOp4='Miss'
                            dropOp5='Mr'
                        />
                    </div> */}
                   {/*   <div className="input-dropdown">
                        <label className="label-name" > Uniqe Feature</label>
                        <Dropdown
                            dropBg="#ffffff"
                            dropWidth='100%'
                            dropFont='11px'
                            dropPadding='10px 0px'
                            dropColor='#686868'
                            drodownWidth='100%'
                            dropHeading="Select"
                            dropOp1='Select'
                            dropOp2='Mrs'
                            dropOp3='Ms'
                            dropOp4='Miss'
                            dropOp5='Mr'
                        />
                    </div>
                    <div className="input-dropdown">
                        <label className="label-name" > Channel</label>
                        <Dropdown
                            dropBg="#ffffff"
                            dropWidth='100%'
                            dropFont='11px'
                            dropPadding='10px 0px'
                            dropColor='#686868'
                            drodownWidth='100%'
                            dropHeading="Select"
                            dropOp1='Select'
                            dropOp2='Direct'
                            dropOp3='Agent'
                            dropOp4='Builder'
                            dropOp5='Other'
                        />
                    </div>
                    <div className="your-form-container">
                        < TextAreaInput
                            id="myTextarea"
                            label="Description"
                            placeholder="Enter your description here"
                            rows={3}
                            textAreaWidth="100%"
                        />
                    </div>
                    <div className="input-dropdown relative bottom-4">
                        <label className="label-name" ></label>
                        <div className='text-[#bbb8b8]'>Maximum 2000 character allowed</div>
                    </div>
                    <div className="your-form-container">
                        < TextAreaInput
                            id="myTextarea"
                            label="REmark"
                            placeholder="Enter your description here"
                            rows={3}
                            textAreaWidth="100%"
                        />
                    </div>
                    <div className="input-dropdown relative bottom-4">
                        <label className="label-name" ></label>
                        <div className='text-[#bbb8b8]'>Maximum 2000 character allowed</div>
                    </div> */}

                    {/* <div className='chec flex justify-around pl-28 pb-4'>
                        <div className="">
                            <CheckRectangle
                                checkTxt="Have you verified all Property ducument"
                            />

                        </div>
                        <div>
                            <CheckRectangle
                                checkTxt="Have you completedproperty visit"
                            />
                        </div>
                    </div> */}
                    <div className="form-control form-btn">
                        <label></label>
                        <button type="submit" className='continue-btn' onClick={onContinueClick}>SAVE & SUBMIT</button>
                        <button type="button" className="cancle-btn">CANCEL</button>
                    </div>
                </div>
            </form>
        </>
    )
}
export default CreatePropertiesSaveInfo;
