import React, { useEffect, useState } from "react";
import SearchBar from "..//..//field/SearchBar";
import { faVectorSquare, faUser, faPhone, faTag, faEnvelope, faSearch, faHistory, faShare, faInfo, faRightLeft, faCalendarCheck, faFlag, faMap, faLocationDot, faSignsPost, faMapPin, faBank, faCode, faVenus, faCalendarDays, faCalendarPlus, faPhoneVolume, faFolder, faClock, faCheckToSlot, faCircleArrowLeft, faBars, faSitemap, faGlobe, faCircleQuestion, faCommentDots, faSquarePhone, faCircleCheck, faPenToSquare, faClipboardList, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faStar as solidStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TimeDuration from "../../ChildComponents/TimeDuration";
import Icons from "../../icons/Icons";
import BarCharts from "../../chart/BarCharts";
import ContactNewBtn from "../../button/ContactNewBtn";
// import UserF from '..//../img/user-3.jpg';
// import userS from '..//..//img/user-4.jpg'
import UserContactInfo from "../../common/UserContactInfo";
import ChildNavbar from "../../components/ChildNavbar";
import Action from "..//../childNavbar/action/Audience";
import SendGroupSMS from "../../childNavbar/action/SendGroupSMS";
import GroupDelete from "../../childNavbar/action/GroupDelete";
import SendGroupEmail from "../../childNavbar/action/SendGroupEmail";
import ExportContact from "../../childNavbar/action/ExportContact";
import AddvanceSearchBtn from "../../button/AddvanceSearchBtn";
import AddvanceSearchForm from "../formSub/AddvanceSearchForm";
import SearchBtn from "../../button/SearchBtn";
import OrderShortBtn from "../../button/OrderShortBtn";
import axios from "axios";
// import UserDataNavbar from "../../childNavbar/UserDataNavbar";
import TextLogo from "../../ChildComponents/TextLogo";
import CircleLogo from "../../ChildComponents/CircleLogo";
import TextField from "../../field/TextField";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import LeadUserDataNav from "../../childNavbar/LeadUserDataNav";
import FolderItemSub from "../../childNavbar/FolderItemSub";
import UserProfile from "../../common/UserProfile";
import LeadFollowUp from "../../childNavbar/LeadNavbar/LeadFollowUp";
import LeadTransfer from "../../childNavbar/LeadNavbar/LeadTransfer";
// import NavActionComponent from "../../common/NavActionComponent";
import UserContact from "../../common/UserContact";
import ChangeStatus from "../../childNavbar/LeadNavbar/LeadActionChild/ChangeStatus";
import QuickNote from "../../childNavbar/LeadNavbar/LeadActionChild/QuickNote";
import DeleteLead from "../../childNavbar/LeadNavbar/LeadActionChild/DeleteLead";
import PageHeading from "../../common/PageHeading";

function AllLeadsSub() {
    // const UserF ='./img/user-4.jpg'
    // const UserF ='./img/user-4.jpg'
    // const UserF ='./img/user-4.jpg'

    const [dashboardData, setDashboardData] = useState({ Leads: { timeDurationsAllLeads: [], contactsDataAllLeads: [], barChartFirstAllLeads: [] } });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/Leads");
                setDashboardData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);

            }
        };


        fetchData();
    }, []);
    const { timeDurationsAllLeads = [], contactsDataAllLeads = [], barChartFirstAllLeads = [] } = dashboardData;

    const iconNames = ["telegram", "facebook", "instagram", "twitter"];

    const [isContentVisible, setIsContentVisible] = useState(true);

    const handleToggleContentVisibility = () => {

        setIsContentVisible(!isContentVisible);
    };

    // check box
    // const [isCreateFolderVisible, setCreateFolderVisible] = useState(false);
    const [isAddCheckbox, setAddCheckbox] = useState(false);

    const handleToggleCreateFolderVisibility = () => {
        // setCreateFolderVisible(!isCreateFolderVisible);
        setAddCheckbox(!isAddCheckbox);
        setIsContentVisible(!isContentVisible)
    };



    // Action 

    const [isOpenactionitem, setOpenactionitem] = useState(false);

    const handleToggleactionVisibility = () => {
        setOpenactionitem(!isOpenactionitem)
        setIsContentVisible(!isContentVisible)
    }

    const [isOpenAudienceItem, setOpenAudienceItem] = useState(false);

    const handleToggleAudienceVisibility = () => {
        setOpenAudienceItem(!isOpenAudienceItem);
        setIsContentVisible(!isContentVisible);
    };

    const [isGroupDeleteItem, setGroupDeleteItem] = useState(false);

    const handleToggleGroupDeleteVisibility = () => {
        setGroupDeleteItem(!isGroupDeleteItem);
        setIsContentVisible(!isContentVisible);
    };


    const [isGroupEmailItem, setGroupEmailItem] = useState(false);

    const handleToggleGroupEmailVisibility = () => {
        setGroupEmailItem(!isGroupEmailItem);
        setIsContentVisible(!isContentVisible);
    };

    const [isExportContact, setExportContact] = useState(false);
    const handleToggleExportContactVisibility = () => {
        setExportContact(!isExportContact);
        setIsContentVisible(!isContentVisible);
    };


    // addvance search
    const [isAddvanceSearchForm, setAddvanceSearchForm] = useState(true)

    const handleToggleAdvancedSearchVisibility = () => {
        // setIsAdvancedSearchVisible(!isAdvancedSearchVisible);
        // setIsContentVisible(!isContentVisible);
        setAddvanceSearchForm(!isAddvanceSearchForm);
    };

    // user all data
    const [contactId, setContactId] = useState(null);
    const [isUserSaveInfoVisible, setIsUserSaveInfoVisible] = useState(false);


    const handleToggleUserSaveInfoVisibility = () => {
        setIsUserSaveInfoVisible(true);
    };

    // user Profile information
    const [isuserProfileVisible, setisuserProfileVisible] = useState(true);

    //   lead child navbar follow ups 
    const [isLeadFollowVisible, setIsLeadFollowVisible] = useState(false);
    const [isLeadTransferVisible, setisLeadTransferVisible] = useState(false);
    const [isLeadActionVisible, setisLeadActionVisible] = useState(false)

    // navbar item



    const [isLeadFavoritVisible, setIsLeadFavoritVisible] = useState(false);
    const handleFavorite = () => {
        setIsLeadFavoritVisible(!isLeadFavoritVisible);
    }

    const handleFollowUp = () => {
        setIsLeadFollowVisible(!isLeadFollowVisible);
        setisuserProfileVisible(!isuserProfileVisible);
    };
    const handleTransferLead = () => {
        setisLeadTransferVisible(!isLeadTransferVisible);
        setisuserProfileVisible(!isuserProfileVisible);
    }
    const handleAction = () => {
        setisLeadActionVisible(!isLeadActionVisible)
        // setIsContentVisible(!isContentVisible)
    }

    // child sub nav actin content

    const handleToggleAudience = () => {
        setOpenAudienceItem(!isOpenAudienceItem);
        setIsContentVisible(!isContentVisible);
    };


    const [ischangeStatus, setIsChangeStatus] = useState(false);

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

    const subNavActionItem = [
        { id: 1, icon: faCircleCheck, userName: "Change Status", userEmail: "Change lead status", handleActionClick: handleActionChangeStatus },
        { id: 2, icon: faCommentDots, userName: "Send SMS", userEmail: "Send SMS to leads", handleActionClick: handleActionSendSMS },
        { id: 3, icon: faEnvelope, userName: "Send Email", userEmail: "Send email to leads", handleActionClick: handleActionSendEmail },
        { id: 4, icon: faCommentDots, userName: "Quick Note", userEmail: "Write some remarkables", handleActionClick: handleActionQuickNote },
        { id: 5, icon: faHistory, userName: "History", userEmail: "Contact history" },
        { id: 6, icon: faPenToSquare, userName: "Edit Contact", userEmail: "Edit contact" },
        { id: 7, icon: faClipboardList, userName: "Site Visit", userEmail: "View all site visits" },
        { id: 8, icon: faTrashCan, userName: "Delete", userEmail: "Delete your lead", handleActionClick: handleActionDeleteLead }

    ]



    // {/*TODO user information status */ }
    const textLogos = [
        { logoText: "Cold" },
        { textLogo: faFlag, logoText: "In Progress" },
        { textLogo: faUser, logoText: "Buyer" },
        { textLogo: faSitemap, logoText: "Private" },
        { textLogo: faTag, logoText: "Magicbricks.com" },

    ]


    // {/*TODO user information social media icons */ }

    const circleLogos = [
        { circleLogo: faPhone, id: 1, tooltipText: "Call" },
        { circleLogo: faWhatsapp, id: 2, tooltipText: "WhatsApp" },
        { circleLogo: faSearch, id: 3, tooltipText: "search" },
        { circleLogo: faGlobe, id: 4, tooltipText: "Site Visit" },
        { circleLogo: faEnvelope, id: 5, tooltipText: "Mail" },
        { circleLogo: faHistory, id: 6, tooltipText: "History" },
    ]


    const blocks = [
        [
            {
                textFieldWidth: "90%",
                userTxtColorFirst: "red",
                redtxtFirst: "Phone was ringing, 0% ",
                userTextLogo: faInfo,
                userTextFirst: "Positive response ",
                userTxtColorSecond: "red",
                // redtxtSecond: "0  minutes",
            },

        ],
        [
            {
                textFieldWidth: "90%",
                userTextLogo: faCircleQuestion,
                userTextFirst: "This user is loking for 2 BHK multistorey Apartment for sale in sectot 68, Gurgaon and has viewed your contact details. @Recieved 23-Feb-2024 5:47PM",

            },

        ],
        [
            {
                textFieldWidth: "90%",
                userTextLogo: faCommentDots,
                userTextFirst: "Not picking will call again",

            },

        ],
        [
            { textFieldWidth: "45%", userTextLogo: faCalendarDays, userTextFirst: "Followup Date", userTextSecond: "1 Feb 2024 5:54pm" },
            { textFieldWidth: "45%", userTextLogo: faSearch, userTextFirst: "Intrested in", userTextSecond: "Preena Micasa" },
        ],
        [
            { textFieldWidth: "45%", userTextLogo: faCircleQuestion, userTextFirst: "Purpose", userTextSecond: " Follo-Up" },
            { textFieldWidth: "45%", userTextLogo: faFolder, userTextFirst: "Folder" },
        ],
        [
            { textFieldWidth: "45%", userTextLogo: faHistory, userTextFirst: "Last Update Date", userTextSecond: "24 Feb 2024 5:54pm" },
            { textFieldWidth: "45%", userTextLogo: faUser, userTextFirst: "Last Update By", userTextSecond: "Aman Sing Rawat" },
        ],
        [
            { textFieldWidth: "45%", userTextLogo: faCalendarDays, userTextFirst: "Created Date", userTextSecond: "23 Feb 2024" },
            { textFieldWidth: "45%", userTextLogo: faSearch, userTextFirst: "Created By ", userTextSecond: "Paras Ranjan" },
        ],
        // [
        //     {
        //         textFieldWidth: "90%",
        //         userTextLogo: faEnvelope,
        //         userTextFirst: "Surjit1999@gmail.com ",
        //         userVerifyLogo: faCircleCheck,
        //     },
        // ],
        [
            { textFieldWidth: "30%", userTextLogo: faVectorSquare, userTextFirst: "Branch", userTextSecond: "Global Team" },
            { textFieldWidth: "30%", userTextLogo: faRightLeft, userTextFirst: "Assign to", userTextSecond: "Paras Ranjan" },
            { textFieldWidth: "30%", userTextLogo: faCalendarCheck, userTextFirst: "Assign Date", userTextSecond: "1 Feb 2024 5:54pm" },
        ],

        // [
        //     { textFieldWidth: "90%", userTextLogo: faMapLocationDot, userTextFirst: "Remark", userTextSecond: "Interested Signature Global City 81 Phase 2, Sector 81, 3 BHK, New-projects" },
        // ],
        // [
        //     { textFieldWidth: "90%", userTextLogo: faAddressCard, userTextFirst: "Unique Number", userTextSecond: "MCUST010224-175446-2000" },
        // ],
        // [
        //     { textFieldWidth: "90%", userTextLogo: faSearch, userTextFirst: "Keywords", userTextSecond: "Signature Global City 81 Phase 2, Sector 81, residential" },
        // ],
        // [
        //     <h2 key="businessDetails" className="pl-8 pb-4">
        //         Business Details
        //     </h2>,
        // ],
        // [
        //     { textFieldWidth: "45%", userTextLogo: faIndustry, userTextFirst: "Company Name" },
        //     { textFieldWidth: "45%", userTextLogo: faCalendarCheck, userTextFirst: "Business Domain" },
        // ],
        // [
        //     { textFieldWidth: "45%", userTextLogo: faFlag, userTextFirst: "Business Type" },
        //     { textFieldWidth: "45%", userTextLogo: faBriefcaseMedical, userTextFirst: "Designation" },
        // ],
        // [
        //     { textFieldWidth: "45%", userTextLogo: faEarth, userTextFirst: "Website" },
        //     { textFieldWidth: "45%", userTextLogo: faFax, userTextFirst: "FAX" },
        // ],
        // [
        //     { textFieldWidth: "90%", userTextLogo: faMap, userTextFirst: "Business Address" },
        // ],
        // [
        //     { textFieldWidth: "45%", userTextLogo: faLocationDot, userTextFirst: "City" },
        //     { textFieldWidth: "45%", userTextLogo: faSignsPost, userTextFirst: "Locality" },
        // ],
        // [
        //     { textFieldWidth: "45%", userTextLogo: faMapPin, userTextFirst: "Pincode" },
        //     { textFieldWidth: "45%", userTextLogo: faUser, userTextFirst: "Bank Account Name" },
        // ],
        // [
        //     { textFieldWidth: "45%", userTextLogo: faBank, userTextFirst: "Bank Name" },
        //     { textFieldWidth: "45%", userTextLogo: faCode, userTextFirst: "IFSC Code" },
        // ],
    ];



    //TODO Contact Details Fields

    const businessDetailsFields = [
        [
            { textFieldWidth: "90%", userTextLogo: faSquarePhone, userTextFirst: "+91-9610968587" },
        ],
        [
            { textFieldWidth: "90%", userTextLogo: faEnvelope, userTextFirst: "er.tanuj@gmail.com" },
        ],

        [
            { textFieldWidth: "30%", userTextLogo: faVectorSquare, userTextFirst: "Branch", userTextSecond: "Global Team" },
            { textFieldWidth: "30%", userTextLogo: faRightLeft, userTextFirst: "Assign to", userTextSecond: "Paras Ranjan" },
            { textFieldWidth: "30%", userTextLogo: faCalendarCheck, userTextFirst: "Assign Date", userTextSecond: "1 Feb 2024 5:54pm" },
        ],
        [
            { userTextLogo: faMap, userTextFirst: "Remark" },

        ],
        [{ userTextLogo: faMap, userTextFirst: "Business Address" }],
        [
            { userTextLogo: faLocationDot, userTextFirst: "City" },
            { userTextLogo: faSignsPost, userTextFirst: "Locality" },
        ],
        [
            { userTextLogo: faMapPin, userTextFirst: "Pincode" },
            { userTextLogo: faUser, userTextFirst: "Bank Account Name" },
        ],
        [
            { userTextLogo: faBank, userTextFirst: "Bank Name" },
            { userTextLogo: faCode, userTextFirst: "IFSC Code" },
        ],
    ];


    //TODO Address

    const addressFields = [
        [{ userTextLogo: faMap, userTextFirst: "Address" }],
        [
            { userTextLogo: faLocationDot, userTextFirst: "City" },
            { userTextLogo: faSignsPost, userTextFirst: "Locality" },
        ],
        [
            { userTextLogo: faMapPin, userTextFirst: "Pincode" },
            { userTextLogo: faVenus, userTextFirst: "Gender" },
        ],
        [
            { userTextLogo: faCalendarDays, userTextFirst: "Date Of Birth" },
            { userTextLogo: faCalendarPlus, userTextFirst: "Anniversary Date" },
        ],
        [
            { userTextLogo: faPhoneVolume, userTextFirst: "Phone Number" },
            { userTextLogo: faFolder, userTextFirst: "Folder" },
        ],
        [
            { userTextLogo: faClock, userTextFirst: "Update By", userTextSecond: "Paras Ranjan" },
            { userTextLogo: faCalendarDays, userTextFirst: "Updated Date", userTextSecond: "1 Feb 2024 5:54 PM" },
        ],
        [
            { userTextLogo: faCalendarCheck, userTextFirst: "Created Date", userTextSecond: "1 Feb 2024 5:54 PM" },
            { userTextLogo: faCheckToSlot, userTextFirst: "Created By", userTextSecond: "Paras Ranjan" },
        ],
    ];

    
    // navbar item

    const menuItems = [
        { icon: faCircleArrowLeft, text: "BACK", toPath: "/", textLogo: "Logo 1" },
        { iconBold: regularStar, iconFavorite: solidStarSolid, text: "FAVORIT", toPath: "/path2", textLogo: "Logo 2", allHandleToggle: handleFavorite },
        { icon: faClock, text: "FOLLOWUP", textLogo: "Logo 2", allHandleToggle: handleFollowUp },
        { icon: faShare, text: "TRANSFER", toPath: "/path2", textLogo: "Logo 2", allHandleToggle: handleTransferLead },
        { icon: faBars, text: "ACTION", toPath: "/path2", textLogo: "Logo 2", allHandleToggle: handleAction },
        // ... more menu items
    ];

    return (

        <>

            <div className="todolist-all-area ">
                <div className="todolist-first-area">
                    <OrderShortBtn
                        todoHeading="All Leads"
                    />
                    {contactsDataAllLeads.map((contact, index) => (
                        <UserContactInfo
                            key={contact.id}
                            isCreateFolderVisible={isAddCheckbox}
                            UserImgs={contact.UserImgs}
                            userName={contact.userName}
                            dateTime={contact.dateTime}
                            mobileNumber={contact.mobileNumber}
                            byUser={contact.byUser}
                            userDateAndTime={contact.userDateAndTime}
                            userDate={contact.userDate}
                            webDomain={contact.webDomain}
                            tooltipSmall={contact.tooltipSmall}
                            tooltipBigg={contact.tooltipBigg}
                            toggleActionClick={() => {
                                handleToggleUserSaveInfoVisibility();
                                setContactId(contact.id);
                            }}
                            ContactNewBtn={<ContactNewBtn
                                newBtnBorder={contact.ContactNewBtn.newBtnBorder}
                                positionLeft={contact.ContactNewBtn.positionLeft}
                                newBtnColor={contact.ContactNewBtn.newBtnColor}
                                contactStatus={contact.ContactNewBtn.contactStatus}

                            />}
                            isLeadFavoritVisible={index === 0 ? isLeadFavoritVisible : false}
                        />
                    ))}
                </div>

                <div className="todolist-second-area">
                    <div className="todolist-links">

                        <div
                            className={`user-save-info ${isUserSaveInfoVisible ? "block" : "hidden"}`}
                        >
                            {/* <UserDataNavbar /> */}
                            <nav className="w-full pb-4">
                                <ul className="todo-unorder w-full flex justify-around flex-wrap gap-0">
                                    {menuItems.map((item, index) => (
                                        <LeadUserDataNav
                                            key={index}
                                            icon={item.icon}
                                            iconFavorite={item.iconFavorite}
                                            iconBold={item.iconBold}
                                            isLeadFavoritVisible={isLeadFavoritVisible}
                                            text={item.text}
                                            to={item.toPath}
                                            dropdownContent={<FolderItemSub />}
                                            textLogo={item.textLogo}
                                            onClickHandle={item.allHandleToggle}
                                        />
                                    ))}
                                </ul>
                            </nav>

                            <div className={`LeadFollowUp ${isLeadFollowVisible ? "block" : "hidden"}`}>
                                <LeadFollowUp />
                            </div>
                            <div className={`LeadTransfer ${isLeadTransferVisible ? "block" : "hidden"}`}>
                                <LeadTransfer />
                            </div>

                            <div>
                                <div className={`LeadAction ${isLeadActionVisible ? "block" : "hidden"}`}>
                                    <div className="small-nav-dropdown">
                                        {subNavActionItem.map((audience) => (
                                            <section key={audience.id} onClick={(e) => { handleToggleAudience(); }}>
                                                <UserContact
                                                    contactIcon={<FontAwesomeIcon className="pl-2" icon={audience.icon} />}
                                                    userName={audience.userName}
                                                    userEmail={audience.userEmail}
                                                    toggleActionClick={audience.handleActionClick}
                                                />
                                            </section>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Items child Navbar sub */}


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

                                {isActionDeleteLead && (
                                    <DeleteLead
                                        headingForm="Add Quick Note"
                                        headingItalic=""
                                        headingTotal=""
                                        headingValue="" />
                                )}

                            </div>


                            {/* <NavActionComponent /> */}
                            <div className={`tex ${isuserProfileVisible ? "block" : "hidden"}`}>
                                <div className="text-center">
                                    <div className="text-center">
                                        {contactId !== null && (
                                            <UserProfile
                                                key={contactsDataAllLeads[contactId].id}
                                                UserImgs={contactsDataAllLeads[contactId].UserImgs}
                                                userName={contactsDataAllLeads[contactId].userName}
                                                mobileNumber={contactsDataAllLeads[contactId].mobileNumber}
                                                assignDaysText="Last assign was"
                                                redTextDays="0 Days"
                                                assignTimeText="Ago, Total call duration"
                                                redTime="0 minutes"
                                                nextFollowText="Next follow-up:"
                                                dateTime={contactsDataAllLeads[contactId].dateTime}
                                                byUser={contactsDataAllLeads[contactId].byUser}
                                            />
                                        )}
                                    </div>

                                    {/*TODO user information Status */}

                                    <div className="flex gap-4 pb-4 justify-center">
                                        {textLogos.map((logo, index) => (
                                            <TextLogo key={index} textLogo={logo.textLogo} logoText={logo.logoText} ></TextLogo>
                                        ))}
                                    </div>

                                    {/*TODO user information social media icons */}

                                    <div className="flex gap-4 justify-center pb-4">

                                        {circleLogos.map((logo, index) => (
                                            <CircleLogo key={logo.id} circleLogo={logo.circleLogo} id={logo.id} tooltipText={logo.tooltipText} />
                                        ))}

                                    </div>
                                </div>

                                {/* TODO  user information  */}

                                {blocks.map((block, index) => (
                                    <div key={index} className={block.length > 1 ? `pl-8 pb-4 flex` : `pl-8 pb-3`}>
                                        {block.map((field, idx) => (
                                            <TextField key={idx} {...field} />
                                        ))}
                                    </div>
                                ))}

                                <div className="pl-8 pb-4">
                                    <h2>Contact Details</h2>
                                </div>



                                {businessDetailsFields.map((block, index) => (
                                    <div key={index} className={block.length > 1 ? `pl-8 pb-4 flex` : `pl-8 pb-3`}>
                                        {block.map((field, idx) => (
                                            <TextField key={idx} {...field} />
                                        ))}
                                    </div>
                                ))}

                                <div className="pl-8 pb-4">
                                    <h2>Address and other personal details</h2>
                                </div>


                                {addressFields.map((row, rowIndex) => (
                                    <div key={rowIndex} className={rowIndex === addressFields.length - 1 ? "pl-8 flex" : "pl-8 flex"}>
                                        {row.map((field, fieldIndex) => (
                                            <TextField
                                                key={fieldIndex}
                                                textFieldWidth={row.length === 1 ? "90%" : "45%"}
                                                userTextLogo={field.userTextLogo}
                                                userTextFirst={field.userTextFirst}
                                                userTextSecond={field.userTextSecond}
                                            />
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>


                        <div className={`nav-all ${isuserProfileVisible ? "block" : "hidden"}`}>
                            <ChildNavbar
                                handleDropdownToggleTransfer={handleToggleContentVisibility}
                                handleToggleCreateFolder={handleToggleCreateFolderVisibility}
                                handleToggleCreateFolderVisibility={handleToggleCreateFolderVisibility}
                                // for Action
                                handleToggleaction={handleToggleactionVisibility}
                                handleToggleAudience={handleToggleAudienceVisibility}
                                handleToggleGroupDelete={handleToggleGroupDeleteVisibility}
                                handleToggleGroupEmail={handleToggleGroupEmailVisibility}
                                handleToggleExportContact={handleToggleExportContactVisibility}
                            />

                            <div className={isOpenactionitem ? "create-ploat-area" : "create-ploat-area hidden"}>
                                <div className="action-content">
                                    <Action
                                        HeadingForm="All Contacts"
                                        HeadingItalic="All Contacts"
                                        HeadingTotal="Total Records"
                                        HeadingValue="7676"
                                    />
                                </div>
                            </div>

                            <div className={isOpenAudienceItem ? "create-ploat-area" : "create-ploat-area hidden"}>
                                <div className="action-content">
                                    <SendGroupSMS />
                                </div>
                            </div>

                            <div className={isGroupDeleteItem ? "create-ploat-area" : "create-ploat-area hidden"}>
                                <div className="action-content">
                                    <GroupDelete
                                        HeadingForm="Are you sure to delete contacts?"
                                        HeadingTotal="Total Records will be deteled"
                                    />

                                </div>
                            </div>

                            <div className={isGroupEmailItem ? "create-ploat-area" : "create-ploat-area hidden"}>
                                <div className="action-content p-4">
                                    <SendGroupEmail headingForm="Create Audience for" />
                                </div>
                            </div>

                            <div className={isExportContact ? "create-ploat-area" : "create-ploat-area hidden"}>
                                <div className="action-content p-4">
                                    <ExportContact />
                                </div>
                            </div>


                            <div className="all-contact-content" style={{ display: isContentVisible ? 'block' : 'none' }}>
                                <div className="search-bar-area">
                                    <div className="seacrch-text">
                                        <span className="relative top-4">
                                            <FontAwesomeIcon style={{ fontSize: 'xx-large ' }} icon={faVectorSquare} />
                                        </span>
                                        {/* <h2>All Leads</h2> */}
                                        <PageHeading pageHeading="All Leads" pageHeadingPeragraph="Lead management is the process of capturing leads, tracking their activities, complete requirement, and qualifying and convert into opportunity for sales execoutives." />
                                    </div>

                                    <div className="flex w-full">
                                        <div className="w-full pb-4">
                                            <form>
                                                <SearchBar />
                                            </form>
                                        </div>
                                    </div>
                                    <div className="flex flax justify-around">
                                        <SearchBtn />
                                        <div className="w-1/2">
                                            <AddvanceSearchBtn onAdvancedSearchClick={handleToggleAdvancedSearchVisibility} />
                                        </div>
                                    </div>
                                </div>
                                <div className={`addvance-search-area ${isAddvanceSearchForm ? "hidden" : "block"}`}>
                                    <form >
                                        <AddvanceSearchForm />
                                    </form>
                                </div>
                                <section className="text-gray-600 ">
                                    <div className="p-4  mx-auto bg-[#f3f4f6] app-header px-7 py-2 ">
                                        <div className="flex flex-wrap -m-4 text-center">
                                            {timeDurationsAllLeads.map((timeDuration, index) => (
                                                <TimeDuration
                                                    key={`${timeDuration.durationHeading}-${timeDuration.durationValue}`}
                                                    DurationHeading={timeDuration.durationHeading}
                                                    DurationValue={timeDuration.durationValue}
                                                    Icons={<Icons name={iconNames[index]} />}
                                                    durationWidth={timeDuration.durationWidth}
                                                    lgWidth="lg:w-1/2"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </section>

                                {barChartFirstAllLeads.length > 0 && (
                                    <div>
                                        < BarCharts
                                            id={barChartFirstAllLeads[0].id}
                                            barChartFirstValue={barChartFirstAllLeads[0].barChartFirstValue}
                                            barChartSecondValue={barChartFirstAllLeads[0].barChartSecondValue}
                                            barChartThirdValue={barChartFirstAllLeads[0].barChartThirdValue}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AllLeadsSub;