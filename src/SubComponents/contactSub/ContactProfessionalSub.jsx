import React, { useState } from "react";
import ProgressSteps from "../../progress/ProgressStepsForm";
import Dropdown from "../../field/Dropdown";
import TextAreaInput from "../../field/TextAreaInput";
import FormValidation from "../../ChildComponents/FormValidation";
import ContactOtherInfoSub from "./ContactOtherInfoSub"

function ContactProfessionalSub() {
    const [showContactOtherInfoSub, setShowContactOtherInfoSub] = useState(false)
    const [addClassSecond, setAddClassSecond] = useState(false);
    const [completedSteps, setCompletedSteps] = useState(0);

    const handleContinue = () => {
        setAddClassSecond('addClassSecond');
        setCompletedSteps(completedSteps + 1);
        setShowContactOtherInfoSub(true);
    };

    return (
        <>
            {showContactOtherInfoSub ? (
                <ContactOtherInfoSub />
            ) : (
                <form action="">
                    <div className="create-contact-all-area">
                        <div className="contact-area">
                            <div className="contact-heading">
                                <h3>Create Contact</h3>
                            </div>
                            <div className="information-icons-area">
                                <div className="">
                                    {<ProgressSteps addClass={addClassSecond} />}
                                </div>
                                <div >
                                    <div className="form-all-area">
                                        <div className="form-heading">
                                            <h3>Give Some Official Detail</h3>
                                        </div>

                                        < FormValidation
                                            labelName="Invest Capacity"
                                            inputName="username"
                                            placeholder="Enter your username"
                                        />

                                        < FormValidation
                                            labelName="Business"
                                            inputName="user name"
                                            placeholder="Enter your Business"
                                        />

                                        < FormValidation
                                            labelName="Company Type "
                                            inputName="user name"
                                            placeholder="Enter your Company Type"
                                        />

                                        < FormValidation
                                            labelName="Designation "
                                            inputName="user name"
                                            placeholder="Enter your Designation "
                                        />

                                        < FormValidation
                                            labelName="Invest Capacity"
                                            inputName="user name"
                                            placeholder="Enter your Invest Capacity"
                                        />


                                        < FormValidation
                                            labelName="Bank Name "
                                            inputName="user name"
                                            placeholder="Enter your Bank Name "
                                        />

                                        < FormValidation
                                            labelName="Bank A/C"
                                            inputName="user name"
                                            placeholder="Enter your Bank A/C "
                                        />

                                        < FormValidation
                                            labelName="IFSC Code"
                                            inputName="user name"
                                            placeholder="Enter your IFSC Code"
                                        />


                                        <div className="your-form-container">

                                            < TextAreaInput
                                                id="myTextarea"
                                                label="Address"
                                                placeholder="Enter Massage"
                                                rows={3}
                                                textAreaWidth="100%"
                                            />
                                        </div>


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
                                            <label className="label-name" > Locality</label> <Dropdown
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
                                            <button type="submit" onClick={handleContinue}>CONTINUE</button>
                                            <button type="button" className="cancle-btn">CANCLE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </>
    )
}
export default ContactProfessionalSub;