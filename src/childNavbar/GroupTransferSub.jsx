import React from "react";
import Dropdown from "../field/Dropdown";
// import HrLine from "../ChildComponents/HrLine";
import TextAreaInput from '../field/TextAreaInput';
// import RadioBtn from "../button/RadioBtn";
import FormHeading from "../SubComponents/formSub/FormHeading";

function GroupTransferSub(props) {

    return (

        <>
            <div className="group-transfer-area">
                <form action="" className="block">
                    <FormHeading
                        headingForm="Transfer for"
                        headingItalic="All Contacts"
                        headingTotal=" total record will transfer:"
                        headingValue="7330"
                    />

                    <div className="input-dropdown pl-2">
                        <label className=" w-[11.5rem] text-sm"> Folder</label>
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
                    {/* <HrLine /> */}

                    <div className="input-dropdown">
                        <label className=" w-48 pl-2 text-sm" > Branch</label>
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
                        <label className=" w-48 pl-2 text-sm"> Assign to</label>
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

                    <div className="your-form-container pl-2 text-sm">
                        < TextAreaInput
                            id="myTextarea"
                            label="Comment"
                            rows={3}
                            textAreaWidth="90%"
                            textAreaLabelWidth="26%"
                        />
                    </div>
                    <div className="form-control form-btn">
                        <label></label>
                        <button type="submit">TRANSFER</button>
                        <button type="button" className="cancle-btn text-white">CANCEL</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default GroupTransferSub;