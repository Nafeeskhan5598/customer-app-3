import React from "react";

function ProgressbarSec() {
    const dynamicPercentLess = 88;
    return (
        <>
            <svg>
                <circle cx="105" cy="105" r="30"></circle>
                <circle cx="105" cy="105" r="30" style={{
                    strokeDasharray: `${dynamicPercentLess}, 100`,
                    strokeDashoffset: '25',
                    stroke: 'bg-yello-rgba',
                    fill: 'none',  // Change the stroke color as needed
                }}></circle>
            </svg>
            <div className="number ">
                <h3 className="">88<span>%</span></h3>
            </div>
        </>
    )
}
export default ProgressbarSec;