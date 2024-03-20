import React from "react";
import Dropdown from "../common/Dropdown";
import ContactNewBtn from "../button/ContactNewBtn";
import VisitAddressContact from "../common/VisitAddressContact";
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

function VisitAddressContactSub(Props) {

    return (

        <>
            <div className="todolist-first-area">
                <div className="todo-area">
                    <div className="todo-text">
                        <h3 className="todo-heading-txt">{Props.todoHeading}</h3>
                        <span className="todo-record">Total Records 1544</span>
                    </div>
                    <div className="dropdown-boxs">
                        < Dropdown
                            dropHeading="SORT BY"
                            dropBg="#0a81ff"
                            dropWidth='100%'
                            dropFont='11px'
                            dropPadding='8px 0px'
                            dropColor='white'
                            dropOp1='SORT By'
                            dropOp2='Mrs'
                            dropOp3='Ms'
                            dropOp4='Miss'
                            dropOp5='Mr'


                        />
                        < Dropdown
                            dropHeading="ORDER BY"
                            dropBg="#0a81ff"
                            dropWidth='100%'
                            dropFont='11px'
                            dropPadding='8px 0px'
                            dropColor='white'
                            dropOp1='ORDER BY'
                            dropOp2='Create Date'
                            dropOp3='Update Date'
                            dropOp4='Name'
                            dropOp5='Mr'
                        />
                    </div>



                </div>
                <div className="pb-4">

                    <VisitAddressContact

                        contactIcon={faBookmark}
                        flateHeading="Looking for by 1 BHK residential"
                        userName="virat kohli"
                        flateAddress="Sector 61-Gurgaon, Sector 65-Gurgaon"
                        Price="1 Cr - 1.5 Cr"
                        Size=" 600 - 700 Sq. Ft."
                        dateTime="20-jan-2024  10:47 PM"
                        VisitePannel="   Inspection[Site Visit Planned-1]"
                        mobileNumber="9610968587"
                        byUser="Paras Ranjan"
                        userDateAndTime="10-jan-2024"
                        userDate="5-Feb-2023"
                        webDomain="google.com"
                        tooltipSmall="Cold"
                        tooltipBigg="Housing.com"
                        ContactNewBtn={<ContactNewBtn
                            contactStatus="In progress"
                            newBtnBorder=" 2px solid #898888"
                            newBtnColor="#898888"

                        />}
                    />
                </div>

                <VisitAddressContact
                    // UserImgs={UserF}
                    contactIcon={faBookmark}
                    flateHeading="Looking for by 1 BHK residential"
                    userName="virat kohli"
                    flateAddress="Sector 65-Gurgaon, Sector 68-Gurgaon"
                    Price="1 Cr - 1.5 Cr"
                    Size=" 300 - 400 Sq. Ft."
                    dateTime="20-jan-2024  10:47 PM"
                    VisitePannel="   Inspection[Site Visit Planned-1]"
                    mobileNumber="9610968587"
                    byUser="Paras Ranjan"
                    userDateAndTime="10-jan-2024"
                    userDate="5-march-2023"
                    webDomain="google.com"
                    tooltipSmall="Cold"
                    tooltipBigg="Housing.com"
                    ContactNewBtn={<ContactNewBtn
                        contactStatus="In progress"
                        newBtnBorder=" 2px solid #898888"
                        newBtnColor="#898888"
                    />}
                />

            </div>
        </>
    )
}
export default VisitAddressContactSub;