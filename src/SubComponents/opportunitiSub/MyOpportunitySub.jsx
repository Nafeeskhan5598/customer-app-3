import React, { useEffect, useState } from "react";
import SearchBar from "../../field/SearchBar";
import { faBookmark, faBullseye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TimeDuration from "../../ChildComponents/TimeDuration";
import Icons from "../../icons/Icons";
import ChildNavSub from "../../childNavbar/ChildNavSub";
import AddvanceSearchBtn from "../../button/AddvanceSearchBtn";
import MyOpportunityAddvanceForm from "../formSub/MyOpportunityAddvanceForm";
import axios from "axios";
import OrderShortBtn from "../../button/OrderShortBtn";
import VisitAddressContact from "../../common/VisitAddressContact";
import ContactNewBtn from "../../button/ContactNewBtn";
import BarCharts from "../../chart/BarCharts";
import TooltipDark from "..//..//tooltip/TooltipDark"
import { For } from "million/react";
import PageHeading from "../../common/PageHeading";

function MyOpportunitySub() {

    const [dashboardData, setDashboardData] = useState({ Opportunity: { timeDurationsMyOpportunity: [], contactsDataMyOpportunity: [], barChartFirstMyOpportunity: [] } });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/Opportunity");
                setDashboardData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);

            }
        };
        fetchData();
    }, []);
    const { timeDurationsMyOpportunity = [], contactsDataMyOpportunity = [], barChartFirstMyOpportunity = [] } = dashboardData;

    const iconNames = ["telegram", "facebook", "instagram", "twitter"];

    const handleToggleContentVisibility = () => {

        setIsContentVisible(!isContentVisible);
    };


    const [isAdvancedSearchVisible, setIsAdvancedSearchVisible] = useState(false);
    const [isContentVisible, setIsContentVisible] = useState(true);

    const handleToggleAdvancedSearchVisibility = () => {
        setIsAdvancedSearchVisible(!isAdvancedSearchVisible);
        setIsContentVisible(!isContentVisible);
    };

    return (

        <>

            {/* history.push('/'); */}
            <div className="todolist-all-area ">
                <div className="todolist-first-area">
                    <OrderShortBtn
                        todoHeading="My Opportunity"
                    />
                    <div className="pb-4">
                            <For each={contactsDataMyOpportunity}>
                                {(contact) =>
                            <VisitAddressContact
                                key={contact.id}
                                contactIcon={faBookmark}

                                flateHeading={contact.flateHeading}
                                userName={contact.userName}
                                flateAddress={contact.flateAddress}
                                Price={contact.Price}
                                Size={contact.Size}
                                dateTime={contact.dateTime}
                                VisitePannel={contact.VisitePannel}
                                mobileNumber={contact.mobileNumber}
                                byUser={contact.byUser}
                                userDateAndTime={contact.userDateAndTime}
                                userDate={contact.userDate}
                                webDomain={contact.webDomain}
                                tooltipSmall={contact.tooltipSmall}
                                tooltipBigg={contact.tooltipBigg}
                                ContactNewBtn={<ContactNewBtn
                                    contactStatus={contact.ContactNewBtn.contactStatus}
                                    newBtnBorder={contact.ContactNewBtn.newBtnBorder}
                                    newBtnColor={contact.ContactNewBtn.newBtnColor}

                                />}
                                tooltipOrange={<TooltipDark />}
                            />
                        }
                        </For>
                    </div>
                </div>

                <div className="todolist-second-area">
                    <div className="todolist-links">
                        <ChildNavSub handleDropdownToggleTransfer={handleToggleContentVisibility} />
                        <div className="all-contact-content" style={{ display: isContentVisible ? 'block' : 'none' }}>
                            <div className="search-bar-area">
                                <div className="seacrch-text">
                                    <span className="relative top-4">
                                        <FontAwesomeIcon style={{ fontSize: 'xx-large ' }} icon={faBullseye} />
                                    </span>
                                    
                                    <PageHeading pageHeading="All Opportunities" pageHeadingPeragraph="Opportunity Management (or sales pipline management) is the process of tracking potential salese as they move through your pipline."> </PageHeading>

                                </div>
                                <form>
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
                                </form>
                            </div>

                            <section className="text-gray-600 ">
                                <div className="p-4  mx-auto bg-[#f3f4f6] app-header px-7 py-2 ">
                                    <div className="flex flex-wrap -m-4 text-center">
                                        {timeDurationsMyOpportunity.map((timeDuration, index) => (
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

                            {barChartFirstMyOpportunity.length > 0 && (
                                <div>
                                    {/* <PieChart /> */}
                                    <BarCharts
                                        id={barChartFirstMyOpportunity[0].id}
                                        barChartFirstValue={barChartFirstMyOpportunity[0].barChartFirstValue}
                                        barChartSecondValue={barChartFirstMyOpportunity[0].barChartSecondValue}
                                        barChartThirdValue={barChartFirstMyOpportunity[0].barChartThirdValue}
                                    />
                                </div>
                            )}
                        </div>
                        {isAdvancedSearchVisible && <MyOpportunityAddvanceForm />}
                    </div>
                </div>
            </div>
        </>
    )
}
export default MyOpportunitySub;