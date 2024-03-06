import React, { useState } from "react";
import ProgressSteps from "../../progress/ProgressSteps";
import Form from "../../ChildComponents/FormValidation";
import Dropdown from "../../field/Dropdown";

function ContactSaveInfoSub() {

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const handleSubmit = (e) => {
        // For demonstration purposes, we'll show a success message
        window.alert('Your form is successfully submitted');
        setShowSuccessMessage(true);
    };

    const [completedStepsForth, setcompletedStepsForth] = useState(0);
    const handleContinueForth = () => {

        // Update completedSteps when CONTINUE button is clicked
        setcompletedStepsForth(completedStepsForth + 1);
    };


    return (
        // page Personal  information form page in create contact

        <>
            <form action="" onSubmit={handleSubmit}>
                <div className="create-contact-all-area">
                    <div className="contact-area">
                        <div className="information-icons-area">
                            <div className="">
                                {<ProgressSteps completedSteps={completedStepsForth} />}
                            </div>
                            <div >
                                <div className="form-all-area">
                                    <div className="form-heading">
                                        <h3>Give Some Official Detail</h3>
                                    </div>
                                    < Form
                                        labelName="Keyword"
                                        inputName="user name"
                                    />

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
                                            dropOp2='Mrs'
                                            dropOp3='Ms'
                                            dropOp4='Miss'
                                            dropOp5='Mr'
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
                                            dropOp2='Mrs'
                                            dropOp3='Ms'
                                            dropOp4='Miss'
                                            dropOp5='Mr'
                                        />
                                    </div>
                                    < Form
                                        labelName="Photograph"
                                        inputName="user name"
                                        inputType="file"
                                        labelBg="#525252"
                                        labelWidth="30%"
                                        labelLeft="-1.3rem"
                                        labelColor="white"
                                        labelTxtTransform="uppercase"

                                    />
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
    )
}
export default ContactSaveInfoSub;