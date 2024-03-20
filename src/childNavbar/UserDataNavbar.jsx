import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { faHome, faShare, faBars, faCircleArrowLeft, faStar, faEdit, faBan, faCircleCheck, faCommentDots, faEnvelope, faHistory, faPenToSquare, faClipboardList, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import UserContactSub from "../SubComponents/contactSub/UserContactSub";
// import FolderItemSub from "../childNavbar/FolderItemSub";
// import GroupTransferSub from "../childNavbar/GroupTransferSub";
import UserContact from "../common/UserContact";
import { For } from "million/react";
import ChangeStatus from "./LeadNavbar/LeadActionChild/ChangeStatus";
import SendGroupSMS from "./action/SendGroupSMS";
import SendGroupEmail from "./action/SendGroupEmail";
import QuickNote from "./LeadNavbar/LeadActionChild/QuickNote";
import DeleteLead from "./LeadNavbar/LeadActionChild/DeleteLead";
import History from "./action/History";
import BanComponent from "./ban/BanComponent";
import ConvertToLeadComponent from "./convertToLead/ConvertToLeadComponent";
import FormHeading from "../SubComponents/formSub/FormHeading";
import axios from "axios";
import ContactPersonalSub from "../SubComponents/contactSub/ContactPersonalSub";

function UserDataNavbar({ handleDropdownToggleTransfer, handleNoneProfile, handleContactFavorit }, props) {

    const [dashboardData, setDashboardData] = useState({ allContacts: { contactConvertLead: [] } });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/allContacts");
                setDashboardData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);

            }
        };

        fetchData();
    }, []);
    const { contactConvertLead = [] } = dashboardData;






    const [isDropdownOpen, setDropdownOpen] = useState(false);
    // const [isDropdownOpenFolder, setDropdownOpenFolder] = useState(false);
    // const [isDropdownOpenTransfer, setDropdownOpenTransfer] = useState(false);
    const [openConvertToLead, setOpenConvertToLead] = useState(false);
    const [editVisitForm, setEditVisitForm] = useState(false);
    const [opnBan, setOpenBan] = useState(false);

    const handleConvertToLead = () => {
        setOpenConvertToLead(!openConvertToLead)
    }
    const handleEditVisitForm = () => {
        setEditVisitForm(!editVisitForm);
    }

    const handleDropdownToggleBan = () => {
        setOpenBan(!opnBan);
    }

    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);

    };

    // const handleDropdownToggleFolder = () => {
    //     setDropdownOpenFolder(!isDropdownOpenFolder);
    // };
    // const handleSmallNavTransferClick = (event) => {
    //     event.stopPropagation();
    //     setDropdownOpenTransfer(!isDropdownOpenTransfer);
    // };

    // action Content 

    const [isOpenAudienceItem, setOpenAudienceItem] = useState(false);
    const [isContentVisible, setIsContentVisible] = useState(true);

    const handleToggleAudience = () => {
        setOpenAudienceItem(!isOpenAudienceItem);
        setIsContentVisible(!isContentVisible);
    };


    // user Profile information
    const [isuserProfileVisible, setisuserProfileVisible] = useState(true);
    const [ischangeStatus, setIsChangeStatus] = useState(false);
    const [isLeadActionVisible, setisLeadActionVisible] = useState(false)

    const handleActionChangeStatus = () => {
        setIsChangeStatus(!ischangeStatus);
        setisuserProfileVisible(!isuserProfileVisible);
        setisLeadActionVisible(!isLeadActionVisible)

    }
    const [isActionSendSMS, setIsActionSendSMS] = useState(false);
    const handleActionSendSMS = () => {
        setIsActionSendSMS(!isActionSendSMS)
        setisuserProfileVisible(!isuserProfileVisible);
        setisLeadActionVisible(!isLeadActionVisible)
    }

    const [isActionSendEmail, setIsActionSendEmail] = useState(false);
    const handleActionSendEmail = () => {
        setIsActionSendEmail(!isActionSendEmail)
        setisuserProfileVisible(!isuserProfileVisible);
        setisLeadActionVisible(!isLeadActionVisible)
    }

    const [isActionQuickNote, setActionQuickNote] = useState(false);
    const handleActionQuickNote = () => {
        setActionQuickNote(!isActionQuickNote)
        setisuserProfileVisible(!isuserProfileVisible);
        setisLeadActionVisible(!isLeadActionVisible)
    }

    const [isActionDeleteLead, setIsActionDeleteLead] = useState(false);
    const handleActionDeleteLead = () => {
        setIsActionDeleteLead(!isActionDeleteLead);
        setisuserProfileVisible(!isuserProfileVisible);
        setisLeadActionVisible(!isLeadActionVisible)
    }
    const [actionHistory, setActionHistory] = useState(false);
    const handleActionHistory = () => {
        setActionHistory(!actionHistory);
        setisuserProfileVisible(!isuserProfileVisible);
        setisLeadActionVisible(!isLeadActionVisible);
    }

    const subNavActionItem = [
        { id: 1, icon: faCircleCheck, userName: "Change Status", userEmail: "Change lead status", handleActionClick: handleActionChangeStatus },
        { id: 2, icon: faCommentDots, userName: "Send SMS", userEmail: "Send SMS to leads", handleActionClick: handleActionSendSMS },
        { id: 3, icon: faEnvelope, userName: "Send Email", userEmail: "Send email to leads", handleActionClick: handleActionSendEmail },
        { id: 4, icon: faCommentDots, userName: "Quick Note", userEmail: "Write some remarkables", handleActionClick: handleActionQuickNote },
        { id: 5, icon: faHistory, userName: "History", userEmail: "Contact history", handleActionClick: handleActionHistory },
        { id: 6, icon: faPenToSquare, userName: "Edit Contact", userEmail: "Edit contact" },
        { id: 7, icon: faClipboardList, userName: "Site Visit", userEmail: "View all site visits" },
        { id: 8, icon: faTrashCan, userName: "Delete", userEmail: "Delete your lead", handleActionClick: handleActionDeleteLead }

    ]


    


    return (

        <>
            <nav className="w-full pb-4">
                <ul className="todo-unorder w-full flex justify-around flex-wrap gap-0">
                    <li>
                        <Link to="/AllTask" rel="noopener noreferrer" className="flex">
                            <span>
                                <FontAwesomeIcon className="pl-2" icon={faCircleArrowLeft} />
                            </span>
                            <span className="text-sm pl-2">BACK</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/CreateContactPersonal" className="flex">
                            <span>
                                <FontAwesomeIcon className="pl-2" icon={faHome} />
                            </span>
                            <span className="text-sm pl-2">PROFILE</span>
                        </Link>
                    </li>
                    <li className="small-nav-transfer flex" onClick={(e) => { handleContactFavorit(e);}}>
                        <span>
                            <FontAwesomeIcon className="pl-2" icon={faStar} />
                        </span>
                        <span className="text-sm pl-2">FAVORIT</span>
                    </li>
                    <li className="small-nav-folder flex" onClick={(e) => { handleConvertToLead(); handleNoneProfile(e);}}>
                        <span>
                            <FontAwesomeIcon className="pl-2" icon={faShare} />
                        </span>
                        <span className="text-sm pl-2">CONVERT TO LEAD </span>
                    </li>
                    <li className="small-nav-folder flex" onClick={(e) => { handleEditVisitForm(); handleNoneProfile(e);}}>
                        <span>
                            <FontAwesomeIcon className="pl-2" icon={faEdit} />
                        </span>
                        <span className="text-sm pl-2">EDIT </span>
                    </li>

                    <li className="small-nav-folder flex" onClick={(e) => { handleDropdownToggleBan(); handleNoneProfile(e); }}>
                        <span>
                            <FontAwesomeIcon className="pl-2" icon={faBan} />
                        </span>
                        <span className="text-sm pl-2">BAN </span>
                    </li>



                    <li className="small-nav-action flex"
                    //  onClick={handleDropdownToggle}
                     onClick={() => props.toggleFavorite()} >
                        <span className="nav-action">
                            <FontAwesomeIcon className="pl-2" icon={faBars} />
                        </span>
                        <span className="text-sm pl-2">ACTIONS</span>

                        {isDropdownOpen && (
                            <div className="small-nav-dropdown">

                                {/* <UserContactSub /> */}

                                <For each={subNavActionItem}>
                                    {(audience) =>
                                        <section key={audience.id} onClick={(e) => { handleToggleAudience(); }}>
                                            <UserContact
                                                contactIcon={<FontAwesomeIcon className="pl-2" icon={audience.icon} />}
                                                userName={audience.userName}
                                                userEmail={audience.userEmail}
                                                toggleActionClick={audience.handleActionClick}
                                            />
                                        </section>
                                    }
                                </For>
                            </div>
                        )}
                    </li>
                </ul>
            </nav>



            {/* Convert to lead  */}
            {openConvertToLead && (
                <div className="LeadTransfer">
                    <FormHeading
                        headingForm="Rahul's previous lead"
                    />

                    <div className='Convert-to-lead w-11/12 border-2 border-gray-300 m-auto'>
                        <div className='convert-lead-heading w-full bg-gray-100 p-2'>Qualified Lead</div>
                        <div className='w-full flex p-2 border-b-2'>
                            <div className='w-[60%]'><span className='text-xs'>Remark</span></div>
                            <div className='w-[40%] flex justify-around'>
                                <div><span className='text-xs'>Assign TO </span></div>
                                <div><span className='text-xs'>Planned Date</span></div>
                                <div><span className='text-xs'>Status</span> </div>
                            </div>
                        </div>

                        <For each={contactConvertLead}>
                            {(converLead, index) =>
                                <ConvertToLeadComponent
                                    key={index}
                                    remarkAddress={converLead.remarkAddress} //"Interested in OMR Crown,Sector 106,residential,3BHK,new-projects for [18865392]"
                                    assignTo={converLead.assignTo}//"Paras Ranjan"
                                    planedDate={converLead.planedDate}  //"12-Mar-2024 12:53 PM"
                                    status={converLead.status} //"New"
                                />
                            }
                        </For>
                    </div>
                </div>
            )}


            {/* Ban  */}
            {opnBan && (
                <div className="LeadTransfer">
                    <BanComponent headingForm="Are you sure to block/unblock this contact?"
                    />
                </div>
            )}

            {/* Action Items child Navbar sub */}
            {ischangeStatus && (
                <div className="LeadTransfer">
                    <ChangeStatus headingForm="Change Lead status"
                        headingItalic=""
                        headingTotal=""
                        headingValue=""
                    />
                </div>
            )}

            {isActionSendSMS && (
                <div className="SendSMS">
                    <SendGroupSMS headingForm="Send SMS To Ranka k"
                        headingItalic=""
                        headingTotal=""
                        headingValue="" />
                </div>
            )}
            {isActionSendEmail && (
                <div>
                    <SendGroupEmail
                        headingForm="Send Email to Ranka k"
                        headingItalic=""
                        headingTotal=""
                        headingValue=""
                    />
                </div>
            )}
            {isActionQuickNote && (
                <QuickNote
                    headingForm="Add Quick Note"
                    headingItalic=""
                    headingTotal=""
                    headingValue="" />
            )}
            {actionHistory && (
                <History
                    headingForm="Jatin Ahuja's"
                    headingItalic="History"
                    headingTotal=""
                    headingValue="" />
            )}


            {isActionDeleteLead && (
                <DeleteLead
                    headingForm="Add Quick Note"
                    headingItalic=""
                    headingTotal=""
                    headingValue="" />
            )}

            {/* </div> */}

            {editVisitForm  && (
                 <ContactPersonalSub createContactHeading="Contact Form" />
            ) }
        </>
    )
}
export default UserDataNavbar;