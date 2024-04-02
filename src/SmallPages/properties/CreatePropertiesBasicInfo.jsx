import React, { useState, useEffect } from 'react';
import Dropdown from "../../field/Dropdown";
import TextAreaInput from "../../field/TextAreaInput";
import CheckRectangle from '../../button/CheckRectangle';
import PageHeading from '../../common/PageHeading';
import SubmitCancelBtn from '../../button/SubmitCancelBtn';
import LabelName from '../../field/LabelName';
import createPropertyDrop from '..//..//js/DropdownVarible'

function CreatePropertiesBasicInfo({ onContinueClick }) {

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


    return (

        <>
            {/* onSubmit={handleSubmit} */}
            <form action="" >
                <div className="create-lead-area pt-10">
                    <PageHeading pageHeading="Give us Some information basic requiments" />

                    <div className="input-dropdown">
                        <LabelName labelName="Request Date" />
                        <input
                            type='date'
                            className="form-search !w-[100%]"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                        />

                    </div>
                    <div className="input-dropdown">
                        <Dropdown {...createPropertyDrop[0]}
                            labelName="For"
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
                            labelName="Property Type"
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
                            labelName="Transaction"
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
                            labelName="Ownership"
                            dropHeading="Select"
                            dropOp1='Select'
                            dropOp2='Free Hold'
                            dropOp3='Lease Hold'
                            dropOp4='Co-operative Society'
                            dropOp5='Power Of Attorney'
                        />
                    </div>
                    <div className="input-dropdown">
                        <Dropdown {...createPropertyDrop[0]}
                            labelName="Bedroom"
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
                        <Dropdown {...createPropertyDrop[0]}
                            labelName="Furnishing"
                            dropBg="#ffffff"
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
                        <Dropdown {...createPropertyDrop[0]}
                            labelName="Suitable For"
                            dropHeading="Select"
                            dropOp1='Select'
                            dropOp2='Mrs'
                            dropOp3='Ms'
                            dropOp4='Miss'
                            dropOp5='Mr'
                        />
                    </div>
                    <div className="input-dropdown">
                        <Dropdown {...createPropertyDrop[0]}
                            labelName="Uniqe Feature"
                            dropHeading="Select"
                            dropOp1='Select'
                            dropOp2='Mrs'
                            dropOp3='Ms'
                            dropOp4='Miss'
                            dropOp5='Mr'
                        />
                    </div>
                    <div className="input-dropdown">
                        <Dropdown {...createPropertyDrop[0]}
                            labelName="Channel"
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
                    </div>

                    <div className='chec flex justify-around pl-28 pb-4'>
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
                    </div>
                    <SubmitCancelBtn submitName="CONTINUE" cancelName="CANCEL" onContinueClick={onContinueClick} />
                </div>
            </form>
        </>
    )

}
export default CreatePropertiesBasicInfo;