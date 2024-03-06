import React, { useState } from "react";
import ProgressSteps from "../../progress/ProgressSteps";
import Form from "../../ChildComponents/FormValidation";
import TextAreaInput from "../../field/TextAreaInput";
import CheckBoxBtn from "../../button/CheckBoxBtn";
import ContactSaveInfoSub from "./ContactSaveInfoSub";

function ContactOtherInfoSub() {

    const [showContactSaveInfoSub, setShowContactSaveInfoSub] = useState(false);
    const [completedStepsThird, setcompletedStepsThird] = useState(0);
    const handleContinue = () => {
        // Update completedSteps when CONTINUE button is clicked
        setcompletedStepsThird(completedStepsThird + 1);
        setShowContactSaveInfoSub(true);
    };

    return (


        <>
            {showContactSaveInfoSub ? (
                <ContactSaveInfoSub />
            ) : (
                <form action=""  >
                    <div className="create-contact-all-area">
                        <div className="contact-area">
                            <div className="contact-heading">
                                <h3>Create Contact</h3>
                            </div>
                            <div className="information-icons-area">
                                <div className="">
                                    {<ProgressSteps completedSteps={completedStepsThird} />}
                                </div>
                                <div >

                                    <div className="form-all-area">
                                        <div className="form-heading">
                                            <h3>Other Information</h3>
                                        </div>


                                        < Form
                                            labelName="DOB"
                                            inputName="user name"
                                            inputType="date"
                                        />

                                        < Form
                                            labelName="Anniversary"
                                            inputName="user name"
                                            inputType="date"
                                        />



                                        <div className="from-radio-btn">

                                            <div className="radio">
                                                <CheckBoxBtn
                                                    id="option1"
                                                    name="radioGroup"
                                                    value="option1"
                                                    label="Email greeting"

                                                />
                                            </div>
                                            <div className="radio">
                                                <CheckBoxBtn
                                                    id="option1"
                                                    name="radioGroup"
                                                    value="option1"
                                                    label="Sms greeting"

                                                />
                                            </div>
                                        </div>

                                        < Form
                                            labelName="Fax Number "
                                            inputName="user name"
                                            placeholder="Office Fax Number"
                                        />

                                        < Form
                                            labelName="Website"
                                            inputName="user name"
                                            placeholder="http://"
                                        />

                                        < Form
                                            labelName="Skype"
                                            inputName="user name"
                                            placeholder="Skype Chat"
                                        />

                                        <div className="your-form-container">
                                            < TextAreaInput
                                                id="myTextarea"
                                                label="Customer's Remark"
                                                rows={3}
                                                textAreaWidth="100%"
                                            />
                                        </div>
                                        <div className="form-control form-btn">
                                            <label></label>
                                            <button type="button" onClick={handleContinue}>CONTINUE</button>
                                            <button type="button" className="cancle-btn">CANCLE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            )
            }
        </>
    )
}
export default ContactOtherInfoSub;