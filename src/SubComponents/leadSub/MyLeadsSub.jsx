import React, { useEffect, useState } from "react";
import SearchBar from "..//..//field/SearchBar";
import { faVectorSquare, faUser, faPhone, faTag, faEnvelope, faSearch, faHistory, faInfo, faRightLeft, faCalendarCheck, faFlag, faMap, faLocationDot, faSignsPost, faMapPin, faVenus, faCalendarDays, faCalendarPlus, faPhoneVolume, faFolder, faClock, faCheckToSlot, faSitemap, faGlobe, faCircleQuestion, faCommentDots, faSquarePhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TimeDuration from "../../ChildComponents/TimeDuration";
import Icons from "../../icons/Icons";
import BarCharts from "../../chart/BarCharts";
import ContactNewBtn from "../../button/ContactNewBtn";
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
import UserProfile from "../../common/UserProfile";
import TextLogo from "../../ChildComponents/TextLogo";
import CircleLogo from "../../ChildComponents/CircleLogo";
import TextField from "../../field/TextField";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { For } from "million/react";
import PageHeading from "../../common/PageHeading";


function MyLeadsSub() {

    const [dashboardData, setDashboardData] = useState({ Leads: { timeDurationsLeads: [], contactsDataMyLeads: [], barChartFirst: [] } });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_VARIABLE_APIURL}/Leads`);
                setDashboardData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);

            }
        };

        fetchData();
    }, []);
    const { timeDurationsLeads = [], contactsDataMyLeads = [], barChartFirst = [] } = dashboardData;

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


    const handleToggleUserSaveInfoVisibility = () => {
        setIsUserSaveInfoVisible(true);
    };
    // user all data
    const [contactId, setContactId] = useState(null);
    const [isUserSaveInfoVisible, setIsUserSaveInfoVisible] = useState(false);
    // const [isuserProfileVisible, setisuserProfileVisible] = useState(true);

    // user Profile information
    //    const [isuserProfileVisible, setisuserProfileVisible] = useState(true);

    // child Navbar 
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
        setIsUserSaveInfoVisible(!isUserSaveInfoVisible);
        
    };

    const [isGroupDeleteItem, setGroupDeleteItem] = useState(false);

    const handleToggleGroupDeleteVisibility = () => {
        setGroupDeleteItem(!isGroupDeleteItem);
        setIsContentVisible(!isContentVisible);
        setIsUserSaveInfoVisible(!isUserSaveInfoVisible);
    };


    const [isGroupEmailItem, setGroupEmailItem] = useState(false);

    const handleToggleGroupEmailVisibility = () => {
        setGroupEmailItem(!isGroupEmailItem);
        setIsContentVisible(!isContentVisible);
          setIsUserSaveInfoVisible(!isUserSaveInfoVisible);
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
        // [{ userTextLogo: faMap, userTextFirst: "Business Address" }],
        // [
        //     { userTextLogo: faLocationDot, userTextFirst: "City" },
        //     { userTextLogo: faSignsPost, userTextFirst: "Locality" },
        // ],
        // [
        //     { userTextLogo: faMapPin, userTextFirst: "Pincode" },
        //     { userTextLogo: faUser, userTextFirst: "Bank Account Name" },
        // ],
        // [
        //     { userTextLogo: faBank, userTextFirst: "Bank Name" },
        //     { userTextLogo: faCode, userTextFirst: "IFSC Code" },
        // ],
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


    return (

        <>

            {/* history.push('/'); */}
            <div className="todolist-all-area ">
                <div className="todolist-first-area">
                    <OrderShortBtn
                        todoHeading="My Leads"
                    />

                    <For each={contactsDataMyLeads}>
                        {(contact, index) =>
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
                            />
                        }
                    </For>
                </div>

                <div className="todolist-second-area">
                    <div className="todolist-links">
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
                                <SendGroupEmail />
                            </div>
                        </div>

                        <div className={isExportContact ? "create-ploat-area" : "create-ploat-area hidden"}>
                            <div className="action-content p-4">
                                <ExportContact />
                            </div>
                        </div>

                        {/* user profile all information  */}
                        <div
                            className={`user-save-info ${isUserSaveInfoVisible ? "block" : "hidden"}`}
                        >
                            <div className="text-center">
                                <div className="text-center">
                                    {contactId !== null && (
                                        <UserProfile
                                            key={contactsDataMyLeads[contactId].id}
                                            UserImgs={contactsDataMyLeads[contactId].UserImgs}
                                            userName={contactsDataMyLeads[contactId].userName}
                                            mobileNumber={contactsDataMyLeads[contactId].mobileNumber}
                                            assignDaysText="Last assign was"
                                            redTextDays="0 Days"
                                            assignTimeText="Ago, Total call duration"
                                            redTime="0 minutes"
                                            nextFollowText="Next follow-up:"
                                            dateTime={contactsDataMyLeads[contactId].dateTime}
                                            byUser={contactsDataMyLeads[contactId].byUser}
                                        />
                                    )}
                                </div>

                                {/*TODO user information Status */}

                                <div className="flex flex-wrap gap-4 pb-4 justify-center">
                                    <For each={textLogos}>
                                        {(logo, index) =>
                                            <TextLogo key={index} textLogo={logo.textLogo} logoText={logo.logoText} ></TextLogo>
                                        }
                                    </For>

                                </div>

                                {/*TODO user information social media icons */}

                                <div className="flex flex-wrap  gap-4 justify-center pb-4">
                                    <For each={circleLogos}>
                                        {(logo, index) =>
                                        <CircleLogo key={logo.id} circleLogo={logo.circleLogo} id={logo.id} tooltipText={logo.tooltipText} />
                                    }
                                    </For>

                                </div>
                            </div>

                            {/* TODO  user information  */}

                                <For each={blocks}> 
                                {(block, index) => 
                                <div key={index} className={block.length > 1 ? `pl-8 pb-4 flex` : `pl-8 pb-3`}>
                                    {block.map((field, idx) => (
                                        <TextField key={idx} {...field} />
                                    ))}
                                </div>
                                }
                                </For>

                            <div className="pl-8 pb-4">
                                <h2>Contact Details</h2>
                            </div>

                                <For each={businessDetailsFields}>
                                    {(block, index) => 
                                <div key={index} className={block.length > 1 ? `pl-8 pb-4 flex` : `pl-8 pb-3`}>
                                    {block.map((field, idx) => (
                                        <TextField key={idx} {...field} />
                                    ))}
                                </div>
                                }
                                </For>

                            <div className="pl-8 pb-4">
                                <h2>Address and other personal details</h2>
                            </div>

                                <For each={addressFields}>
                                    {(row, rowIndex) =>
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
                                }
                                </For>
                        </div>



                        <div className="all-contact-content" style={{ display: isContentVisible ? 'block' : 'none' }}>
                            <div className="search-bar-area">
                                <div className="seacrch-text">
                                    <span className="relative top-4">
                                        <FontAwesomeIcon style={{ fontSize: 'xx-large ' }} icon={faVectorSquare} />
                                    </span>
                                    <PageHeading pageHeading="All Leads" pageHeadingPeragraph="Lead management is the process of capturing leads, tracking their activities, complete requirement, and qualifying and convert into opportunity for sales execoutives."> </PageHeading>
                                </div>
                                {/* <form> */}
                                <div className="flex w-full">
                                    <div className="w-full pb-4">
                                        <SearchBar />

                                    </div>
                                </div>
                                <div className="flex flax justify-around">
                                    <SearchBtn />
                                    <div className="w-1/2">

                                        <AddvanceSearchBtn onAdvancedSearchClick={handleToggleAdvancedSearchVisibility} />

                                    </div>
                                </div>
                                {/* </form> */}
                            </div>
                            <div className={`addvance-search-area ${isAddvanceSearchForm ? "hidden" : "block"}`}>
                                <AddvanceSearchForm />
                            </div>
                            <section className="text-gray-600 ">
                                <div className="p-4  mx-auto bg-[#f3f4f6] app-header px-7 py-2 ">
                                    <div className="flex flex-wrap -m-4 text-center">
                                            <For each={timeDurationsLeads}>
                                                {(timeDuration, index) =>
                                            <TimeDuration
                                                key={`${timeDuration.durationHeading}-${timeDuration.durationValue}`}
                                                DurationHeading={timeDuration.durationHeading}
                                                DurationValue={timeDuration.durationValue}
                                                Icons={<Icons name={iconNames[index]} />}
                                                durationWidth={timeDuration.durationWidth}
                                                lgWidth="lg:w-1/2"
                                            />
                                        }
                                        </For>
                                    </div>
                                </div>
                            </section>

                            {/* {BarChart.length > 0 && ( */}

                            {barChartFirst.length > 0 && (
                                <div>
                                    < BarCharts
                                        id={barChartFirst[0].id}
                                        barChartFirstValue={barChartFirst[0].barChartFirstValue}
                                        barChartSecondValue={barChartFirst[0].barChartSecondValue}
                                        barChartThirdValue={barChartFirst[0].barChartThirdValue}

                                    />
                                </div>
                            )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MyLeadsSub;