import React, { useState } from 'react';
import Dropdown from "../../field/Dropdown";
import CheckRectangle from '../../button/CheckRectangle';
import RadioBtn from '../../button/RadioBtn';
import Switch from 'react-js-switch'
import PageHeading from '../../common/PageHeading';
import SubmitCancelBtn from '../../button/SubmitCancelBtn';
import createPropertyDrop from '../../js/DropdownVarible';

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
                    </div>
                    <div className="input-dropdown">
                        <Dropdown {...createPropertyDrop[0]}
                            labelName="Refer By"
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
                        <Dropdown {...createPropertyDrop[0]}
                            labelName="Key Holder"
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
                        <Dropdown {...createPropertyDrop[0]}
                            labelName="Folder"
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
                        <Dropdown {...createPropertyDrop[0]}
                            labelName="Source"
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
                        <Dropdown {...createPropertyDrop[0]}
                            labelName="Branch"
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
                        <Dropdown {...createPropertyDrop[0]}
                            labelName="Assignee"
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

                    <SubmitCancelBtn submitName="CONTINUE" cancelName="CANCEL" onContinueClick={onContinueClick} />

                </div>
            </form>
        </>
    )
}
export default CreatePropertiesSaveInfo;
