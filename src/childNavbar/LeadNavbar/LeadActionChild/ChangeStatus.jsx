import React from 'react';
import FormHeading from '../../../SubComponents/formSub/FormHeading';
import TextAreaInput from '../../../field/TextAreaInput';
import Dropdown from '../../../field/Dropdown';

function ChangeStatus(props) {
    return (
        <>
            <FormHeading
                headingForm={props.headingForm} //" Create Audience for"
                headingItalic={props.headingItalic}      //"All Contacts"
                headingTotal={props.headingTotal}  //props"Total Records"
                headingValue={props.headingValue}   //"7676"
            />
            <div className="input-dropdown ">
                 <Dropdown
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

            <div className="your-form-container pl-2 text-sm">
                < TextAreaInput
                    id="myTextarea"
                    label="Massage"
                    rows={3}
                    textAreaWidth="100%"
                    textAreaLabelWidth="16%"
                    // value={message}
                    // onChange={handleTextAreaChange}
                />
            </div>

            <div className="form-control form-btn">
          <label></label>
          <button type="submit" className='continue-btn' >Submit</button>
        </div>



        </>
    );
}

export default ChangeStatus;