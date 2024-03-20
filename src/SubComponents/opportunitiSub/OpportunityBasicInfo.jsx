import React, { useState, useEffect } from 'react';
import Dropdown from "../../field/Dropdown";
import TextAreaInput from "../../field/TextAreaInput";
import PageHeading from '../../common/PageHeading';

function OpportunityBasicInfo({ onContinueClick, currentStep }) {

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
                <div className="create-lead-area p-8">
                    <PageHeading pageHeading="Give us Some information basic requiments" />
                    <div className="input-dropdown">

                        <label className="label-name" > Request Date</label>
                        <div className='flex w-full'>
                        <input
                            type='date'
                            className="form-search !w-[35%] responsive-date"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                        />
                        <label className="form-search !w-[30%] bg-[#efefef]">Est Close Date</label>
                        <input type="date" className="form-search !w-[35%] responsive-date" placeholder="First Name" />
                        </div>
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
                            dropOp2='Buy'
                            dropOp3='PG'
                            dropOp4='Rent/Lease'
                            dropOp5='Re-Development'
                            dropOp6='Joint Ventures'
                            dropOp7='Services'
                        
                        />
                    </div>
                    <div className="input-dropdown">
                        <label className="label-name" > Looking For</label> <Dropdown

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
                        <label className="label-name" > Budget</label>
                        <div className='flex w-full'>
                        <Dropdown
                            dropBg="#ffffff"
                            dropWidth='100%'
                            dropFont='11px'
                            dropPadding='10px 0px'
                            dropColor='#686868'
                            drodownWidth='47%'
                            dropHeading="Select"
                            dropOp1='Select'
                            dropOp2='Mrs'
                            dropOp3='Ms'
                            dropOp4='Miss'
                            dropOp5='Mr'
                        />
                        <label className="form-search !w-[6%] bg-[#efefef]">to</label>

                        <Dropdown
                            dropBg="#ffffff"
                            dropWidth='100%'
                            dropFont='11px'
                            dropPadding='10px 0px'
                            dropColor='#686868'
                            drodownWidth='47%'
                            dropHeading="Select"
                            dropOp1='Select'
                            dropOp2='Mrs'
                            dropOp3='Ms'
                            dropOp4='Miss'
                            dropOp5='Mr'
                        />
                    </div>
                    </div>
                    <div className="input-dropdown">
                        <label className="label-name" > Area </label>
                        <div className='flex w-full'>
                        <label className="form-search !w-[23%]">0.00</label>
                        <label className="form-search !w-[6%] bg-[#efefef]">to</label>
                        <label className="form-search !w-[24%]">0.00</label>
                     

                        <Dropdown
                            dropBg="#ffffff"
                            dropWidth='100%'
                            dropFont='11px'
                            dropPadding='10px 0px'
                            dropColor='#686868'
                            drodownWidth='47%'
                            dropHeading="Select"
                            dropOp1='Select'
                            dropOp2='Sq.Ft.'
                            dropOp3='Sq.Meter'
                            dropOp4='Ground'
                            dropOp5='Aankadam'
                            dropOp6='Rood'
                            dropOp7='Chataks'
                        />
                           </div>
                    </div>
                    <div className="input-dropdown">
                        <label className="label-name" > City</label>
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
                        <label className="label-name" > Locality</label>
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
                        <label className="label-name" > Bedroom</label>
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
                        <label className="label-name" > Furnishing</label>
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
                        <label className="label-name" > Transaction</label>
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
                        <label className="label-name" > Purpose/Preferences</label>
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
                        <label className="label-name" > Property Age</label>
                        <Dropdown
                            dropBg="#ffffff"
                            dropWidth='100%'
                            dropFont='11px'
                            dropPadding='10px 0px'
                            dropColor='#686868'
                            drodownWidth='100%'
                            dropHeading="Select"
                            dropOp1='Select'
                            dropOp2='Under Construction'
                            dropOp3='Less than 5 year'
                            dropOp4='5 - 10 years'
                            dropOp5='10 - 20 years'
                            dropOp6='More than 20 year'
                            dropOp7='Less than 6 month'
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
export default OpportunityBasicInfo;