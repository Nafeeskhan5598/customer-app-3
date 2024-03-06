import React from 'react';
import FormHeading from '../../../SubComponents/formSub/FormHeading';
import TextAreaInput from '../../../field/TextAreaInput';
import Dropdown from '../../../field/Dropdown';

function QuickNote(props) {
    return (
        <>
            <FormHeading
                headingForm={props.headingForm} //" Create Audience for"
                headingItalic={props.headingItalic}      //"All Contacts"
                headingTotal={props.headingTotal}  //props"Total Records"
                headingValue={props.headingValue}   //"7676"
            />
            <div className="input-dropdown ">
                <label className="label-name" > Custumer Type</label> <Dropdown
                    dropBg="#ffffff"
                    dropWidth='100%'
                    dropFont='11px'
                    dropPadding='10px 0px'
                    dropColor='#686868'
                    drodownWidth='100%'
                    dropHeading="Select"
                    dropOp1='Select'
                    dropOp2='Customer Comments'
                    dropOp3='Customer Meeting(MOM)'
                    dropOp4='Document'
                    dropOp5='Instruction'
                    dropOp6='Justification'

                />
            </div>

            <div className="your-form-container text-sm">
                < TextAreaInput
                    id="myTextarea"
                    label="Comment"
                    rows={3}
                    textAreaWidth="83.5%"
                    textAreaLabelWidth="15%"
                    // value={message}
                    // onChange={handleTextAreaChange}
                />
            </div>

            <div className="form-control form-btn">
          <label></label>
          <button type="submit" className='continue-btn' >SAVE</button>
          <button type="button" className="cancle-btn">CANCEL</button>
        </div>



        </>
    );
}

export default QuickNote;