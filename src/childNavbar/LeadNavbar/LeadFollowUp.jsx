import React from "react";
import Dropdown from "..//..//field/Dropdown";
import HrLine from "..//..//ChildComponents/HrLine";
import TextAreaInput from '..//..//field/TextAreaInput';
// import RadioBtn from "../button/RadioBtn";
import FormHeading from "..//..//SubComponents/formSub/FormHeading";
import CurrentDateTime from "../../field/CurrentDateTime";
import ProgressColor from "../../progress/ProgressColor";
import CheckBoxBtn from "../../button/CheckBoxBtn";

function LeadFollowUp(props) {

    return (

        <>
            <div className="group-transfer-area">
                <form action="" className="block">
                    <FormHeading
                        headingForm="Next followup for "
                        headingItalic="ranya k"
                    />
                    <div className="your-form-container pl-2 text-sm">
                        <div className="input-dropdown">
                            <label className="label-name !w-[21%]" > Keyword</label>
                            <input
                                type='text'
                                className="form-search !w-[77%]"

                            />
                        </div>
                    </div>
                    <div className="your-form-container pl-2 text-sm">
                        < TextAreaInput
                            id="myTextarea"
                            label="Requirement"
                            rows={3}
                            textAreaWidth="77.5%"
                            textAreaLabelWidth="21%"
                        />
                    </div>

                    <HrLine hrText="Next follow up information" />

                    <div className="input-dropdown pl-2">
                        <label className=" w-[11.5rem] text-sm"> Current Update</label>
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
                        <label className=" w-48 pl-2 text-sm" > Purpose</label>
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

                    <div className="your-form-container pl-2 text-sm">
                        < TextAreaInput
                            id="myTextarea"
                            label="Followup Note"
                            rows={3}
                            textAreaWidth="77.5%"
                            textAreaLabelWidth="21%"
                        />
                    </div>

                    <div className="your-form-container pl-2 text-sm">
                        <CurrentDateTime
                            labelwidth="21%"
                            labelName="Schedule Date"
                            dateWidth="38%"
                            timeWidth="39%"
                        />
                    </div>
                    <div className="your-form-container pl-2 text-sm">
                        <ProgressColor
                            rangeLabelWidth="21%"
                            rangeWidth="77%"
                        />
                    </div>

                    <div className="your-form-container pl-2 text-sm">
                        <div className="input-dropdown">
                            <label className="label-name" > Reminder (30 Mint)</label>
                            <div className="!w-full flex flex-wrap">
                                <CheckBoxBtn
                                    label="Enable sms reminder"
                                    labelClass="!w-full"
                                />
                                <CheckBoxBtn

                                    label="Enable email reminder"
                                    labelClass="!w-full"
                                />
                                <CheckBoxBtn

                                    label="Have you signed or shared your term and condition with contact?"
                                    labelClass="!w-full"
                                />
                                <CheckBoxBtn

                                    label="Stay on this list after i submit."
                                    labelClass="!w-full"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-control form-btn">
                        <label></label>
                        <button type="submit">FIX FOLLOW UP</button>
                        <button type="button" className="cancle-btn text-white">CANCEL</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default LeadFollowUp;