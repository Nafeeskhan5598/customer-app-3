import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPerson, faEarth, faLocationDot, faChartArea, faGear } from '@fortawesome/free-solid-svg-icons';
import Dropdown from "../../field/Dropdown";
import TextAreaInput from "../../field/TextAreaInput";
import CheckRectangle from '../../button/CheckRectangle';
// import RadioBtn from '../../button/RadioBtn';

function CreatePropertiesBasicInfo({ onContinueClick }) {

    // const [setShowContactProfessionalSub, email, setEmail, setErrorMessage, mobileNumber, setMobileNumber, setMobileNumberError, currentStep, setCurrentStep] = useState(0); 

    // const [showContactProfessionalSub, setShowContactProfessionalSub] = useState(false);

    // const [email, setEmail] = useState('');
    // const [errorMessage, setErrorMessage] = useState('');
    // const [mobileNumber, setMobileNumber] = useState('');
    // const [mobileNumberError, setMobileNumberError] = useState('');
    // const [currentStep, setCurrentStep] = useState(0);

    // const handleChange = (e) => {
    //     setEmail(e.target.value);
    //     setErrorMessage(''); // Clear any previous error message when the user types

    // };

    // const handleChangeMobileNumber = (e) => {
    //     setMobileNumber(e.target.value);
    //     setMobileNumberError(''); // Clear any previous error message when the user types

    // };

    // const handleContinue = () => {
    //     setCurrentStep((prevStep) => prevStep + 1);
    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     if (!emailRegex.test(email)) {
    //         setErrorMessage('Please enter a valid email address.');
    //         return;
    //     }

    //     // Check if the email has a Gmail domain
    //     if (!email.endsWith('@gmail.com')) {
    //         setErrorMessage('Please enter a Gmail address.');
    //         return;
    //     }

    // Validate mobile number
    // const mobileRegex = /^[0-9]{10}$/;
    // if (!mobileRegex.test(mobileNumber)) {
    //     setMobileNumberError('Please enter a valid 10-digit mobile number.');
    //     return;
    // }

    //     setShowContactProfessionalSub(true);


    // };

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
                    <div className="stepper-wrapper">
                        <div className='stepper-item completed currentStep'>
                            <div className="step-counter">
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <div className="step-name">Contact Information</div>
                        </div>
                        <div className='stepper-item '>
                            <div className="step-counter">
                                <FontAwesomeIcon icon={faPerson} />
                            </div>
                            <div className="step-name font-bold">Basic Information</div>
                        </div>
                        <div className='stepper-item'>
                            <div className="step-counter">
                                <FontAwesomeIcon icon={faLocationDot} />
                            </div>
                            <div className="step-name">Location</div>
                        </div>
                        <div className='stepper-item'>
                            <div className="step-counter">
                                <FontAwesomeIcon icon={faChartArea} />
                            </div>
                            <div className="step-name">Area and pricing</div>
                        </div>
                        <div className='stepper-item'>
                            <div className="step-counter">
                                <FontAwesomeIcon icon={faGear} />
                            </div>
                            <div className="step-name">Other details</div>
                        </div>
                        <div className='stepper-item'>
                            <div className="step-counter">
                                <FontAwesomeIcon icon={faEarth} />
                            </div>
                            <div className="step-name">Save and publish</div>
                        </div>
                    </div>
                    <div className="form-heading">
                        <h3>Give us Some information basic requiments</h3>
                    </div>
                    <div className="input-dropdown">

                        <label className="label-name" > Request Date</label>
                        <input
                            type='date'
                            className="form-search !w-[100%]"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                        />
                        {/* <label className="form-search !w-[30%] bg-[#efefef]">Est Close Date</label>
                        <input type="date" className="form-search !w-[35%]" placeholder="First Name" /> */}
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
                            dropOp2='Sale'
                            dropOp3='PG'
                            dropOp4='Rent/Lease'
                            dropOp5='Re-Development'
                            dropOp6='Joint Ventures'
                            dropOp7='Services'

                        />
                    </div>
                    <div className="input-dropdown">
                        <label className="label-name" > Property Type</label> <Dropdown

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
                        <label className="label-name" >Transaction</label>
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
                        <label className="label-name" > Ownership</label>
                        <Dropdown
                            dropBg="#ffffff"
                            dropWidth='100%'
                            dropFont='11px'
                            dropPadding='10px 0px'
                            dropColor='#686868'
                            drodownWidth='100%'
                            dropHeading="Select"
                            dropOp1='Select'
                            dropOp2='Free Hold'
                            dropOp3='Lease Hold'
                            dropOp4='Co-operative Society'
                            dropOp5='Power Of Attorney'
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
                            dropOp2='1 RK'
                            dropOp3='1 BHK'
                            dropOp4='1.5 BHK'
                            dropOp5='2 BHK'
                            dropOp6='2.5 BHK'
                            dropOp7='3 BHK'

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
                        <label className="label-name" > Suitable For</label>
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
export default CreatePropertiesBasicInfo;