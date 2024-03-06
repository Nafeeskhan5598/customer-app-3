import React from "react";
import Dropdown from "..//..//field/Dropdown";
import HrLine from "..//..//ChildComponents/HrLine";
import TextAreaInput from '..//..//field/TextAreaInput';
// import RadioBtn from "../button/RadioBtn";
import FormHeading from "..//..//SubComponents/formSub/FormHeading";
// import CurrentDateTime from "../../field/CurrentDateTime";
// import ProgressColor from "../../progress/ProgressColor";
import CheckBoxBtn from "../../button/CheckBoxBtn";
import RadioBtn from "../../button/RadioBtn";

function LeadTransfer() {
 
    const LeadTransfetChack = [
        { id: "1", checkboxLabel: "Send SMS notification to Assignee", checkboxWidth: "100%" },
        { id: "2", checkboxLabel: "Send SMS notification to Customer", checkboxWidth: "100%"  },
        { id: "3", checkboxLabel: "Send Email notification to Assignee", checkboxWidth: "100%"  },
        { id: "4", checkboxLabel: "Send Email notification to Customer", checkboxWidth: "100%"  },
        { id: "5", checkboxLabel: "Stay on this list after i submit.", checkboxWidth: "100%"  },
     
    ]

    return (

        <>
            <div className="group-transfer-area">
                <form action="" className="block">
                    <FormHeading
                        headingForm="Transfer for "
                        headingItalic="Ranya k"
                    />
                    <div className="input-dropdown pl-2">
                        <label className=" w-[21%] text-sm" > Transfer Type</label>
                        <div className="from-radio-btn !pl-0">
                            <div className="radio">
                                <RadioBtn
                                    id="option1"
                                    name="radioGroup"
                                    value="option1"
                                    label="Lead Transfer"

                                />
                            </div>
                            <div className="radio">
                                <RadioBtn
                                    id="option1"
                                    name="radioGroup"
                                    value="option1"
                                    label="Cold Calling Transfer"

                                />
                            </div>
                        </div>
                    </div>

                    <div className="input-dropdown">
                        <label className=" w-48 pl-2 text-sm" > Folder</label>
                        <Dropdown
                            dropBg="#ffffff"
                            dropWidth='100%'
                            dropFont='11px'
                            dropPadding='10px 0px'
                            dropColor='#686868'
                            drodownWidth='100%'
                            dropHeading="Select"
                            dropOp1='Select'
                            dropOp2='Follow-up'
                            dropOp3='Office Visit'
                            dropOp4='Site Visit'
                            dropOp5='Finalization'
                            dropOp6='Completed'
                            dropOp7='Call for property'
                        />
                    </div>

                    <HrLine hrText="OR" />

                    <div className="input-dropdown pl-2">
                        <label className=" w-[11.5rem] text-sm">Branch</label>
                        <Dropdown
                            dropBg="#ffffff"
                            dropWidth='100%'
                            dropFont='11px'
                            dropPadding='10px 0px'
                            dropColor='#686868'
                            drodownWidth='100%'
                            dropHeading="Select"
                            dropOp1='Select'
                            dropOp2='Conversation Done'
                            dropOp3='Conversation Done (Via WhatsApp)'
                            dropOp4='Phone not reachable'
                            dropOp5='Phone is ringing'
                            dropOp6='Disconnecting call'
                            dropOp7='Call me later'
                        />
                    </div>


                    <div className="input-dropdown">
                        <label className=" w-48 pl-2 text-sm" >Assign to</label>
                        <Dropdown
                            dropBg="#ffffff"
                            dropWidth='100%'
                            dropFont='11px'
                            dropPadding='10px 0px'
                            dropColor='#686868'
                            drodownWidth='100%'
                            dropHeading="Select"
                            dropOp1='Select'
                            dropOp2='Follow-up'
                            dropOp3='Office Visit'
                            dropOp4='Site Visit'
                            dropOp5='Finalization'
                            dropOp6='Completed'
                            dropOp7='Call for property'
                        />
                    </div>

                    <HrLine hrText="OR" />


                    <div className="input-dropdown">
                        <label className=" w-48 pl-2 text-sm" >Permission</label>
                        <Dropdown
                            dropBg="#ffffff"
                            dropWidth='100%'
                            dropFont='11px'
                            dropPadding='10px 0px'
                            dropColor='#686868'
                            drodownWidth='100%'
                            dropHeading="Select"
                            dropOp1='Select'
                            dropOp2='Follow-up'
                            dropOp3='Office Visit'
                            dropOp4='Site Visit'
                            dropOp5='Finalization'
                            dropOp6='Completed'
                            dropOp7='Call for property'
                        />
                    </div>

                    <div className="your-form-container pl-2 text-sm p-3">
                        <div className="input-dropdown">
                            <label className="label-name" > </label>
                        
                            <div className="!w-full flex flex-wrap">
                            {LeadTransfetChack.map((index) => (
                                <CheckBoxBtn
                                key={index.id}
                                label={index.checkboxLabel}
                                checkLabelWidth={index.checkboxWidth}
                                />
                                ) )}
                            </div>
                              
                        </div>
                    </div>

                        <div className="your-form-container pl-2 text-sm">
                        < TextAreaInput
                            id="myTextarea"
                            label="Comment"
                            rows={3}
                            textAreaWidth="77.5%"
                            textAreaLabelWidth="21%"
                        />
                    </div>

                    <div className="form-control form-btn">
                        <label></label>
                        <button type="submit">Transfer</button>
                        <button type="button" className="cancle-btn text-white">CANCEL</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default LeadTransfer;