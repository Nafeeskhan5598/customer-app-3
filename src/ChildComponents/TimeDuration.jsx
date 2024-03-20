import React from "react";
function TimeDuration(props) {
    return (

        <>
            <div className={`${props.lgWidth} md:w-1/4 p-3 sm:w-1/2 w-full`}>
                <div style={{ background: "#3e3c3cbd", width: props.durationWidth }}
                    className="total-revenue py-8  max-w-sm mx-auto bg-indigo-800 bg-opacity-70 rounded shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 duration-logo">
                    {props.Icons}
                    <div style={{ marginLeft: "0" }} className=" space-y-2 duration-card">
                        <div className="space-y-0.5">
                            <h5 className="text-white text-sm dark:text-white mb-1 ">
                                {props.DurationHeading}
                            </h5>
                            <p className="mb-2 text-white text-lg font-bold  truncate">
                                {props.DurationValue}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TimeDuration;