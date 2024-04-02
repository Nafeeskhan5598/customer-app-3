import React, { useState } from "react";
import FormHeading from "../../SubComponents/formSub/FormHeading";
import FormValidation from "../../ChildComponents/FormValidation";
import Dropdown from "../../field/Dropdown";
import TextAreaInput from "../../field/TextAreaInput";
import CurrentDateTime from "../../field/CurrentDateTime";
import createPropertyDrop from "..//..//js/DropdownVarible";

function SendGroupSMS(props) {

    const [message, setMessage] = useState('');
    const [charCount, setCharCount] = useState(0);
    const maxCharCount = 165;

    const handleTextAreaChange = (event) => {
        const newMessage = event.target.value;
        if (newMessage.length <= maxCharCount) {
            setMessage(newMessage);
            setCharCount(newMessage.length);
        }
    };


    return (

        <>
            <FormHeading
               headingForm={props.headingForm} //" Create Audience for"
               headingItalic={props.headingItalic}      //"All Contacts"
               headingTotal={props.headingTotal}  //props"Total Records"
               headingValue={props.headingValue} 
            />

            <div className="p-4">


                <div className="input-dropdown ">
                     <Dropdown {...createPropertyDrop[0]}
                     labelName="Tamplate"
                        dropBg="#ffffff"
                        dropWidth='100%'
                        dropFont='11px'
                        dropPadding='10px 0px'
                        dropColor='#686868'
                        drodownWidth='100%'
                        dropHeading="Select"
                        dropOp1='Select'


                    />
                </div>
                < FormValidation
                    FormOnSubmit="loginHandle"
                    labelName="DLT Tamplate ID"
                    placeholder=""
                    inputName="user name"

                />

                <div className="your-form-container pl-2 text-sm">
                    < TextAreaInput
                        id="myTextarea"
                        label="Massage"
                        rows={3}
                        textAreaWidth="100%"
                        textAreaLabelWidth="16%"
                        value={message}
                        onChange={handleTextAreaChange}
                    />
                </div>

                <span className="text-end">
                    <h6>Total Character <span>{charCount}</span>/{maxCharCount}</h6>
                    {charCount > maxCharCount && <p className="text-red-500">Character limit exceeded!</p>}
                </span>

                <CurrentDateTime
                    labelName="Schedule"
                    dateWidth="50%"
                    timeWidth="40%"
                />


            <div className="form-control form-btn">
                <label></label>
                <button type="submit" className='continue-btn' >CONTINUE</button>
                <button type="button" className="cancle-btn">CANCEL</button>
            </div>

        </div >

        </>
    )
}

export default SendGroupSMS;