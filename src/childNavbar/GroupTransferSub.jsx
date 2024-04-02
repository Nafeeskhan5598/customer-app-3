import React from "react";
import Dropdown from "../field/Dropdown";
// import HrLine from "../ChildComponents/HrLine";
import TextAreaInput from '../field/TextAreaInput';
// import RadioBtn from "../button/RadioBtn";
import FormHeading from "../SubComponents/formSub/FormHeading";
import createPropertyDrop from "..//js/DropdownVarible";

function GroupTransferSub(props) {

    return (

        <>
            <div className="group-transfer-area">
                {/* <form action="" className="block"> */}
                    <FormHeading
                        headingForm="Transfer for"
                        headingItalic="All Contacts"
                        headingTotal=" total record will transfer:"
                        headingValue="7330"
                    />

                       <div className="input-dropdown">
                        <Dropdown {...createPropertyDrop[0]}
                         labelName="Folder"
                            dropHeading="Select"
                            dropOp1='Select'
                            dropOp2='Mrs'
                            dropOp3='Ms'
                            dropOp4='Miss'
                            dropOp5='Mr'
                        />
                    </div>
                    {/* <HrLine /> */}

                    <div className="input-dropdown">
                        <Dropdown {...createPropertyDrop[0]}
                         labelName="Branch"
                            dropHeading="Select"
                            dropOp1='Select'
                            dropOp2='Mrs'
                            dropOp3='Ms'
                            dropOp4='Miss'
                            dropOp5='Mr'
                        />
                    </div>
                    <div className="input-dropdown">
                        <Dropdown {...createPropertyDrop[0]}
                             labelName="Assign to"
                            dropHeading="Select"
                            dropOp1='Select'
                            dropOp2='Mrs'
                            dropOp3='Ms'
                            dropOp4='Miss'
                            dropOp5='Mr'
                        />
                    </div>

                    <div className="your-form-container pl-2 text-sm">
                        < TextAreaInput
                            id="myTextarea"
                            label="Comment"
                            rows={3}
                            textAreaWidth="87%"
                            textAreaLabelWidth="13%"
                        />
                    </div>
                    <div className="form-control form-btn">
                        <label></label>
                        <button type="submit">TRANSFER</button>
                        <button type="button" className="cancle-btn text-white">CANCEL</button>
                    </div>
                {/* </form> */}
            </div>
        </>
    )
}
export default GroupTransferSub;