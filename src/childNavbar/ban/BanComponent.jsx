import React from 'react';
import FormHeading from '../../SubComponents/formSub/FormHeading';
import TextAreaInput from '../../field/TextAreaInput';
import SubmitCancelBtn from '../../button/SubmitCancelBtn';

function BanComponent(props) {
    return (
        <>
            <FormHeading
                headingForm={props.headingForm} 
                headingItalic={props.headingItalic}     
                headingTotal={props.headingTotal}  
                headingValue={props.headingValue}
            />

            <div className="your-form-container pl-2 text-sm">
                < TextAreaInput
                    id="myTextarea"
                    label="Comment"
                    rows={3}
                    textAreaWidth="100%"
                    textAreaLabelWidth="16%"
                    placeholder="Please enter Justification..."
                    // value={message}
                    // onChange={handleTextAreaChange}
                />
            </div>


            <SubmitCancelBtn submitName="OK" cancelName="CANCEL" ></SubmitCancelBtn>

        </>
    );
}

export default BanComponent;