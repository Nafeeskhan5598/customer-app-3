import React, { useEffect, useState } from "react";
import ChildNavbar from '../../components/ChildNavbar'
import SearchBar from "../../field/SearchBar";
import PieChart from "../../chart/PieChart";
import { faUsers, faShare, faFolder, faTag, faPhone, faSquarePhoneFlip, faEnvelope, faSearch, faHistory, faUser, faInfo, faCircleCheck, faVectorSquare, faRightLeft, faCalendarCheck, faLocationDot, faMapLocationDot, faAddressCard, faMap, faIndustry, faFlag, faBriefcaseMedical, faEarth, faFax, faSignsPost, faMapPin, faBank, faCode, faVenus, faCalendarDays, faCalendarPlus, faPhoneVolume, faClock, faCheckToSlot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TimeDuration from "../../ChildComponents/TimeDuration";
import Icons from "../../icons/Icons";
import TextLogo from "../../ChildComponents/TextLogo";
import CircleLogo from "../../ChildComponents/CircleLogo";
import TextField from "../../field/TextField";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import UserDataNavbar from "../../childNavbar/UserDataNavbar";
import UserContact from "../../common/UserContact";
import Dropdown from "../../field/Dropdown";
// import UserF from '..//..//img/user-3.jpg';
import FormHeading from "../formSub/FormHeading";
import FormValidation from "../../ChildComponents/FormValidation";
import AddvanceSearchBtn from "../../button/AddvanceSearchBtn";
import AddvanceSearchForm from '../../SubComponents/formSub/AddvanceSearchForm';
import Action from "..//../childNavbar/action/Audience";
import SendGroupSMS from "../../childNavbar/action/SendGroupSMS";
import GroupDelete from "../../childNavbar/action/GroupDelete";
import SendGroupEmail from "../../childNavbar/action/SendGroupEmail";
import ExportContact from "../../childNavbar/action/ExportContact";
import axios from "axios";
import OrderShortBtn from "../../button/OrderShortBtn";
import UserProfile from "../../common/UserProfile";

function AllContactSub(Props, timeDuration, index) {


    const [dashboardData, setDashboardData] = useState({ allContacts: { timeDurationsContact: [], userContacts: [] } });

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
    const { timeDurationsContact = [], userContacts = [] } = dashboardData;

    const blocks = [
        [
            {
                textFieldWidth: "90%",
                userTxtColorFirst: "red",
                redtxtFirst: "No Conversation, 0% ",
                userTextLogo: faInfo,
                userTextFirst: "Response. Total call duration ",
                userTxtColorSecond: "red",
                redtxtSecond: "0  minutes",
            },
        ],
        [
            { textFieldWidth: "45%", userTextLogo: faSquarePhoneFlip, userTextFirst: "+91-9610968587" },
            { textFieldWidth: "45%", userTextLogo: faPhone },
        ],
        [
            {
                textFieldWidth: "90%",
                userTextLogo: faEnvelope,
                userTextFirst: "Surjit1999@gmail.com ",
                userVerifyLogo: faCircleCheck,
            },
        ],
        [
            { textFieldWidth: "30%", userTextLogo: faVectorSquare, userTextFirst: "Branch", userTextSecond: "Global Team" },
            { textFieldWidth: "30%", userTextLogo: faRightLeft, userTextFirst: "Assign to", userTextSecond: "Paras Ranjan" },
            { textFieldWidth: "30%", userTextLogo: faCalendarCheck, userTextFirst: "Assign Date", userTextSecond: "1 Feb 2024 5:54pm" },
        ],
        [
            { textFieldWidth: "90%", userTextLogo: faMapLocationDot, userTextFirst: "Remark", userTextSecond: "Interested Signature Global City 81 Phase 2, Sector 81, 3 BHK, New-projects" },
        ],
        [
            { textFieldWidth: "90%", userTextLogo: faAddressCard, userTextFirst: "Unique Number", userTextSecond: "MCUST010224-175446-2000" },
        ],
        [
            { textFieldWidth: "90%", userTextLogo: faSearch, userTextFirst: "Keywords", userTextSecond: "Signature Global City 81 Phase 2, Sector 81, residential" },
        ],
        [
            <h2 key="businessDetails" className="pl-8 pb-4">
                Business Details
            </h2>,
        ],
        [
            { textFieldWidth: "45%", userTextLogo: faIndustry, userTextFirst: "Company Name" },
            { textFieldWidth: "45%", userTextLogo: faCalendarCheck, userTextFirst: "Business Domain" },
        ],
        [
            { textFieldWidth: "45%", userTextLogo: faFlag, userTextFirst: "Business Type" },
            { textFieldWidth: "45%", userTextLogo: faBriefcaseMedical, userTextFirst: "Designation" },
        ],
        [
            { textFieldWidth: "45%", userTextLogo: faEarth, userTextFirst: "Website" },
            { textFieldWidth: "45%", userTextLogo: faFax, userTextFirst: "FAX" },
        ],
        [
            { textFieldWidth: "90%", userTextLogo: faMap, userTextFirst: "Business Address" },
        ],
        [
            { textFieldWidth: "45%", userTextLogo: faLocationDot, userTextFirst: "City" },
            { textFieldWidth: "45%", userTextLogo: faSignsPost, userTextFirst: "Locality" },
        ],
        [
            { textFieldWidth: "45%", userTextLogo: faMapPin, userTextFirst: "Pincode" },
            { textFieldWidth: "45%", userTextLogo: faUser, userTextFirst: "Bank Account Name" },
        ],
        [
            { textFieldWidth: "45%", userTextLogo: faBank, userTextFirst: "Bank Name" },
            { textFieldWidth: "45%", userTextLogo: faCode, userTextFirst: "IFSC Code" },
        ],
    ];



    //TODO buisness

    const businessDetailsFields = [
        [
            { userTextLogo: faIndustry, userTextFirst: "Company Name" },
            { userTextLogo: faCalendarCheck, userTextFirst: "Business Domain" },
        ],
        [
            { userTextLogo: faFlag, userTextFirst: "Business Type" },
            { userTextLogo: faBriefcaseMedical, userTextFirst: "Designation" },
        ],
        [
            { userTextLogo: faEarth, userTextFirst: "Website" },
            { userTextLogo: faFax, userTextFirst: "FAX" },
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


    // {/*TODO user information status */ }

    const textLogos = [
        { logoText: "Customer" },
        { logoText: "Buyer" },
        { textLogo: faPhone, logoText: "Buyer" },
        { textLogo: faTag, logoText: "Housing.com" },
    ]

    // {/*TODO user information social media icons */ }

    const circleLogos = [
        { circleLogo: faPhone },
        { circleLogo: faSquarePhoneFlip },
        { circleLogo: faEnvelope },
        { circleLogo: faWhatsapp },
        { circleLogo: faSearch },
        { circleLogo: faHistory },
        { circleLogo: faShare },
    ]

    const iconNames = ["telegram", "facebook", "instagram", "twitter"];


    const [isUserSaveInfoVisible, setIsUserSaveInfoVisible] = useState(false);

    const handleToggleUserSaveInfoVisibility = () => {
        setIsUserSaveInfoVisible(true);
    };
    const [isContentVisible, setIsContentVisible] = useState(true);

    const handleToggleContentVisibility = () => {

        setIsContentVisible(!isContentVisible);
    };

    const [isCreateFolderVisible, setCreateFolderVisible] = useState(false);
    const [isAddCheckbox, setAddCheckbox] = useState(false);

    const handleToggleCreateFolderVisibility = () => {
        setCreateFolderVisible(!isCreateFolderVisible);
        setAddCheckbox(!isAddCheckbox);
        setIsContentVisible(!isContentVisible)
    };


    const [isAddvanceSearchForm, setAddvanceSearchForm] = useState(true)

    const handleToggleAdvancedSearchVisibility = () => {
        // setIsAdvancedSearchVisible(!isAdvancedSearchVisible);
        // setIsContentVisible(!isContentVisible);
        setAddvanceSearchForm(!isAddvanceSearchForm);
    };

    // const [isContentVisible, setIsContentVisible] = useState(true);
    const [isGroupTransferSubVisible, setGroupTransferSubVisible] = useState(false);
    const [isCreatePloatAreaVisible, setCreatePloatAreaVisible] = useState();

    // const handleToggleContentVisibility = () => {
    //     setIsContentVisible(!isContentVisible);
    // };

    const handleSubmit = () => {
        // Handle submit logic here
        setCreatePloatAreaVisible(!isCreatePloatAreaVisible);
        setGroupTransferSubVisible(!isGroupTransferSubVisible);
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

    // const UserF = './img/user-5.jpg'


      // user all data
      const [contactId, setContactId] = useState(null);

    return (

        <>
            <div className="todolist-all-area ">
                <div className="todolist-first-area">
                    <OrderShortBtn
                        todoHeading="All Contact"
                    />

                    {/*TODO USER ALL CONTACT RECORDES                     */}
                    {userContacts.map((userContact, index) => (
                        <UserContact
                            key={index}
                            isCreateFolderVisible={isAddCheckbox}
                            UserImgs={userContact.UserImgs}
                            userName={userContact.UserName}
                            dateTime={userContact.DateTime}
                            mobileNumber={userContact.MobileNumber}
                            userEmail={userContact.UserEmail}
                            byUser={userContact.ByUser}
                            userDateAndTime={userContact.UserDateAndTime}
                            // onClick={handleToggleUserSaveInfoVisibility}
                            toggleActionClick={() => {
                                handleToggleUserSaveInfoVisibility();
                                setContactId(userContact.id);
                            }}
                        />
                    ))
                    }

                </div>

                {/*TODO user Contact all information                 */}
                <div className="todolist-second-area">
                    <div className="todolist-links">
                        <div
                            className={`user-save-info ${isUserSaveInfoVisible ? "block" : "hidden"}`}
                        >
                            <UserDataNavbar />
                            <div className="text-center">
                            <div className="text-center">
                                        {contactId !== null && (
                                            <UserProfile
                                                key={userContacts[contactId].id}
                                                UserImgs={userContacts[contactId].UserImgs}
                                                userName={userContacts[contactId].UserName}
                                                mobileNumber={userContacts[contactId].MobileNumber}
                                                assignDaysText="Last assign was"
                                                redTextDays="0 Days"
                                                assignTimeText="Ago, Total call duration"
                                                redTime="0 minutes"
                                                nextFollowText="Next follow-up:"
                                                dateTime={userContacts[contactId].dateTime}
                                                byUser={userContacts[contactId].byUser}
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
                                        <CircleLogo key={index} circleLogo={logo.circleLogo}></CircleLogo>
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
                                <h2>Business Details</h2>
                            </div>

                            {businessDetailsFields.map((row, rowIndex) => (
                                <div key={rowIndex} className={rowIndex === businessDetailsFields.length - 1 ? "pl-8 pb-4 flex" : "pl-8 flex"}>
                                    {row.map((field, fieldIndex) => (
                                        <TextField
                                            key={fieldIndex}
                                            textFieldWidth={row.length === 1 ? "90%" : "45%"}
                                            userTextLogo={field.userTextLogo}
                                            userTextFirst={field.userTextFirst}
                                        />
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
                        <div
                            className={`Contact-child-navbar ${isUserSaveInfoVisible ? "hidden" : "block"}`}
                        >
                            <ChildNavbar
                                // handleToggleCreateFolder={handleToggleCreateFolder}
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
                                    <SendGroupEmail />
                                </div>
                            </div>

                            <div className={isExportContact ? "create-ploat-area" : "create-ploat-area hidden"}>
                                <div className="action-content p-4">
                                    <ExportContact />
                                </div>
                            </div>

                            {/* create folder Form For All Contact */}

                            <div className={isCreateFolderVisible ? "create-ploat-area" : "create-ploat-area hidden"}>
                                <FormHeading
                                    headingForm="Create Folder For"
                                    headingItalic="Plots"
                                    headingTotal="Total Records:"
                                    headingValue="18"
                                />

                                <FormValidation FormOnSubmit={handleSubmit} labelName="Folder Name" inputName="folder name" />
                                <div className="input-dropdown">
                                    <label className="label-name" >Permission</label> <Dropdown
                                        dropBg="#ffffff"
                                        dropWidth='100%'
                                        dropFont='11px'
                                        dropPadding='17px 0px'
                                        dropColor='#686868'
                                        drodownWidth='100%'
                                        dropHeading="Select"
                                        dropOp1='Select'
                                        dropOp2='Aman Singh Nawat'
                                        dropOp3='Amar'
                                        dropOp4='Ankit'
                                        dropOp5='Khushi'
                                    />
                                </div>
                                <div className="form-control form-btn">
                                    <label></label>
                                    <button type="submit" onClick={handleSubmit}>SUBMIT</button>
                                    <button type="button" className="cancle-btn">CANCEL</button>
                                </div>
                            </div>

                            {/* all Contact home area */}

                            <div className="all-contact-content" style={{ display: isContentVisible ? 'block' : 'none' }}>
                                <div className="search-bar-area">
                                    <div className="seacrch-text">
                                        <span>
                                            <FontAwesomeIcon style={{ fontSize: 'xx-large ' }} icon={faUsers} />
                                        </span>
                                        <h2>All Contacts</h2>
                                    </div>
                                    {/* <form> */}
                                    <div className="flex w-full">
                                        <div className="w-full pb-4">
                                            <SearchBar />

                                        </div>
                                    </div>
                                    <div className="flex justify-around">
                                        <div className="search-btn p-0">
                                            <button type="submit">Search</button>

                                        </div>
                                        <div className="w-1/2">

                                            <AddvanceSearchBtn onAdvancedSearchClick={handleToggleAdvancedSearchVisibility} />

                                        </div>
                                    </div>
                                    {/* </form> */}
                                </div>

                                <div className={`addvance-search-area ${isAddvanceSearchForm ? "hidden" : "block"}`}>
                                    <AddvanceSearchForm />
                                </div>

                                <section className={`text-gray-600 ${isAddvanceSearchForm ? "block" : "hidden"}`}>
                                    <div className="p-4  mx-auto bg-[#f3f4f6] app-header px-7 py-2 ">
                                        <div className="flex flex-wrap -m-4 text-center">
                                            {timeDurationsContact.map((timeDuration, index) => (
                                                <TimeDuration
                                                    key={`${timeDuration.durationHeading}-${timeDuration.durationValue}-${index}`}
                                                    DurationHeading={timeDuration.durationHeading}
                                                    DurationValue={timeDuration.durationValue}
                                                    Icons={<Icons name={iconNames[index]} />}
                                                    durationWidth={timeDuration.durationWidth}
                                                    lgWidth="lg:w-1/3"

                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <PieChart />
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AllContactSub;