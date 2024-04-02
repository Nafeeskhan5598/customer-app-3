import React, { useState, useEffect } from "react";
import axios from "axios";
import RockLineChart from "../chart/RocksLineChart";
import FunnelChart from "../chart/FunnelChart";
import TimeDuration from "../ChildComponents/TimeDuration";
import Icons from "../icons/Icons";
import SourceProgress from "./SourceProgress";
import LineProgress from "../progress/LineProgress";
import TotalRevenueCard from "../card/TotalRevenueCard";
import Progressbar from "../progress/Progressbar";
import { For } from "million/react";

function Topbar() {

    const [dashboardData, setDashboardData] = useState({ dashboard: { cards: [], timeDurations: [], funnelCharts: [], rockLineChart: [], progressBar: [] } });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_VARIABLE_APIURL}/dashboard`);
                setDashboardData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);

            }
        };


        fetchData();
    }, []);
    const { cards = [], timeDurations = [], funnelCharts = [], rockLineChart = [], progressBar = [] } = dashboardData;

    const iconNames = ["telegram", "facebook", "instagram", "twitter"];

    return (

        <>
            <React.Fragment >
                <div className="text-gray-600 app-header">
                    {cards.length > 0 && (
                        <div className="container px-7 py-2 mx-auto">
                            <div className="flex flex-wrap -m-4">
                                {/* {cards.map((item) => ( */}
                                <For each={cards}>
                                    {(item) =>
                                        <TotalRevenueCard
                                            key={item.id}
                                            Heading={item.heading}
                                            Progressbar={
                                                <Progressbar
                                                    bgColor={item.progressbarColor}
                                                    ValuePercent={item.progressbarValue}
                                                    colorValue={item.colorValue}
                                                    strokeDasharray={item.strokeDasharray}
                                                />
                                            }
                                            Value={item.value}
                                            TextColor={item.textColor}
                                        />
                                    }
                                </For>
                                {/* // ))} */}
                            </div>

                        </div>
                    )}

                    {/* <section> */}

                    <div className="flex flex-wrap  w-full bg-[#f3f4f6]  app-header px-[0.8rem] py-2">
                        {rockLineChart.length > 0 && (
                            <div className="rock-line-chart-area p-3 md:w-3/4 h-[375px]">
                                <div className="flex rounded-lg h-full bg-white pt-16 p-6 flex-col total-revenue">
                                    <RockLineChart
                                        id={rockLineChart[0].id}
                                        LIneData={rockLineChart[0].LIneData}
                                    />
                                </div>
                            </div>
                        )}

                        {/* multiline chart End */}

                        {/* Funnel chart start */}

                        {/* {funnelCharts.map((funnel) => { */}

                        {/* return ( */}
                        <div className="funnel-chart-area p-3 md:w-1/4 h-[375px]">
                            <div className="flex rounded-lg h-full bg-white p-6 flex-col total-revenue">
                                <For each={funnelCharts}>
                                    {(funnel) =>
                                        <FunnelChart
                                            key={funnel.id}
                                            id={funnel.id}
                                            LeadsValue={funnel.leadsValue}
                                            FollowUpValue={funnel.followUpValue}
                                            OfficeVisiteValue={funnel.officeVisiteValue}
                                            SiteVisiteValue={funnel.siteVisiteValue}
                                            DisqualifiedValue={funnel.disqualifiedValue}
                                            ClosedValue={funnel.closedValue}

                                        />
                                    }
                                </For>
                            </div>
                        </div>
                        {/* ) */}

                        {/* // })} */}
                    </div>
                    {/* </section> */}

                    {/* <!-- identity users card start --> */}

                    <section className="text-gray-600 ">
                        <div className="p-4  mx-auto bg-[#f3f4f6] app-header px-7 py-2 ">
                            <div className="flex flex-wrap -m-4 text-center">
                                {/* <div className="p-3 md:w-1/4 sm:w-1/2 w-full "> */}
                                {/* {timeDurations.map((timeDuration, index) => ( */}
                                <For each={timeDurations}>
                                    {(timeDuration, index) =>
                                        <TimeDuration
                                            key={`${timeDuration.durationHeading}-${timeDuration.durationValue}`}
                                            DurationHeading={timeDuration.durationHeading}
                                            DurationValue={timeDuration.durationValue}
                                            Icons={<Icons name={iconNames[index]} />}
                                            lgWidth="1/4"
                                        />
                                    }
                                </For>
                                {/* ))} */}
                            </div>
                        </div>
                    </section>


                    {/* <!-- identity card end --> */}
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-5 mx-auto">
                            {progressBar.length > 0 && (
                                <div className="flex flex-wrap -m-4">
                                    <SourceProgress key="opportunities" OpportunitiesTxt="Opportunities Stage" />
                                    <SourceProgress key="properties" OpportunitiesTxt="Property Source" />
                                    <SourceProgress key="topLeads" OpportunitiesTxt="Top Lead Sources" Progress={<LineProgress id={progressBar[0].id} progressValue={progressBar[0].progressValue} />} />
                                </div>
                            )}
                        </div>
                    </section>
                </div >
            </React.Fragment>

        </>
    );
}
export default Topbar;