import React, { useState, useEffect } from "react";
import Dropdown from "../../field/Dropdown";
import EmailBtn from "../../button/EmailBtn";
import TextAreaInput from "../../field/TextAreaInput";
import FormValidation from "../../ChildComponents/FormValidation";
import PageHeading from "../../common/PageHeading";
import ToInputField from "../../field/ToInputField";

function ContactPersonalSub() {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [mobileNumberError, setMobileNumberError] = useState('');
    const [customerType, setCustomerType] = useState(false);
    const [contactType, setContactType] = useState("Select");
    const [contactTypeOptions, setContactTypeOptions] = useState(["Select"]); // Set default options

    useEffect(() => {   
        console.log("customerType:", customerType);

        if (customerType === 'Direct Customer') {
            setContactTypeOptions(["Select", "Customer", "Buyer", "Investor", "Seller"]);
        } else if (customerType === 'General Contact') {
            setContactTypeOptions(["Select", "Relative", "None", "Friends", "Employees"]);
        } else if (customerType === 'Custom Reference') {
            setContactTypeOptions(["Select", "Visitor", "demo1", "demo2", "demo3"]);
        }
    }, [customerType]);

    const handleChangeCustomerType = (selectedType) => {
        setCustomerType(selectedType);
    };

    const handleChangeContactType = (selectedType) => {
        setContactType(selectedType);
    };
    const handleChange = (e) => {
        setEmail(e.target.value);
        setErrorMessage(''); // Clear any previous error message when the user types

    };

    const handleChangeMobileNumber = (e) => {
        setMobileNumber(e.target.value);
        setMobileNumberError(''); // Clear any previous error message when the user types

    };


    const [completedStepsForth, setcompletedStepsForth] = useState(0);
    const handleContinueForth = () => {

        // Update completedSteps when CONTINUE button is clicked
        setcompletedStepsForth(completedStepsForth + 1);
    };


    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const handleSubmit = (e) => {
        // For demonstration purposes, we'll show a success message
        window.alert('Your form is successfully submitted');
        setShowSuccessMessage(true);
    };


    return (

        <>
                <form action=""  onSubmit={handleSubmit} >
                    <div className="create-contact-all-area">
                        <div className="contact-area">
                            <PageHeading pageHeading=" Create Contact" />
                            <div className="information-icons-area">
                                <div>
                                    <div className="form-all-area">
                                        <div className="form-heading pb-4">
                                            <h3>Lets Started  with some basic detail</h3>
                                        </div>

                                        <ToInputField
                                        labelName="name"
                                        placeholderFist="First Name"
                                        firstName='name'
                                        placeholderSecond="Last Name"
                                        secondName='name'
                                        />


                                        {/* TODO get value input type dropdown form json server */}

                                        <div className="input-dropdown">
                                            <label className="label-name">Customer Type</label>
                                            <select
                                                className="!w-full form-search  input-dropdown  text-{!#b3b3b3} bg-none border shadow-sm outline-none"
                                                onChange={(e) => handleChangeCustomerType(e.target.value)}
                                                value={customerType} 
                                            >
                                                <option value="Select">Select</option>
                                                <option value="Direct Customer">Direct Customer</option>
                                                <option value="General Contact">General Contact</option>
                                                <option value="Custom Reference">Custom Reference</option>
                                            </select>

                                        </div>

                                        <div className="input-dropdown">
                                            <label className="label-name">Contact Type</label>
                                            <select
                                                className="!w-full form-search  input-dropdown text-{!#b3b3b3} bg-none border shadow-sm outline-none p-[10px 0px]"
                                                onChange={(e) => handleChangeContactType(e.target.value)}
                                                value={contactType}
                                            >
                                                {contactTypeOptions.map((option) => (
                                                    <option key={option} value={option}>
                                                        {option}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        


                                        <div className="input-dropdown">
                                            <label className="label-name" > Mobile</label> <Dropdown

                                                dropBg="#ffffff"
                                                dropWidth='100%'
                                                dropFont='11px'
                                                dropPadding='10px 0px'
                                                dropColor='#686868'
                                                drodownWidth='26%'
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

                                        < FormValidation
                                            labelName="Other Number"
                                            placeholder="Other contact number"
                                            inputName=""
                                            
                                        />

                                        <div className="input-dropdown">
                                            <label className="label-name" > Email</label>
                                            <input type="email"
                                                id="email"
                                                name="email"
                                                value={email}
                                                onChange={handleChange}
                                                required
                                                className="form-search email-input"
                                                placeholder="Email address" />
                                            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                                            <EmailBtn />
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

                                        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                                        <div className="input-dropdown">
                                            <label className="label-name" > City</label> <Dropdown
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
                                            <label className="label-name" > Source</label> <Dropdown
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

                                        <div className="form-control form-btn">
                                            <label></label>
                                            <button type="submit" onClick={handleContinueForth}>SUBMIT</button>
                                            <button type="submit" className="cancle-btn">CANCLE</button>
                                        </div>
                                        {showSuccessMessage && (
                                            <div className="success-message">
                                                Your form is successfully submitted
                                                <span className="green-icon">✔</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
        </>
    );
}
export default ContactPersonalSub;