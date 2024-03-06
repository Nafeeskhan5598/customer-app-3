import React from "react";
import { Link } from "react-router-dom";



function TotalRevenueCard(props) {


    return (
        <>
            <div className="lg:w-4/12 md:w-1/2 p-3 w-full">
                <Link to="/" className="block relative rounded overflow-hidden" >
                    <div className="p-6 bg-white h-40 total-revenue rounded">
                        <div className="flex items-center justify-between ">
                            <h4 className="card-title">{props.Heading}</h4>
                            <h2
                                className="total-revenue revenue-nub text-3xl font-normal text-gray-800 dark:text-white mb-1">
                                {props.Value}
                            </h2>
                            </div>
                            <div className="flex items-center justify-between relative top-[-48px]">
                                <div dir="ltr" className="card">
                                    <div className="percent">

                                        {/* < Progressbar   /> */}
                                        {props.Progressbar}
                                    </div>

                                    <div className="text-end progress-text">


                                    </div>
                            
                            </div>

                        </div>

                    </div>
                </Link>
            </div>
        </>
    )
}
export default TotalRevenueCard;