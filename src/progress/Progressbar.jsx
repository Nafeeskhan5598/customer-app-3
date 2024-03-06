import React from "react";

function Progressbar(props) {
    // const dynamicPercent = 100;

    
    return (

        <>

            <svg width="210" height="150">
                <circle cx="105" cy="75" r="20"></circle>  
                <circle cx="105" cy="75" r="20" style={{
                    strokeDasharray: props.strokeDasharray,  
                    strokeDashoffset: props.colorValue,
                    stroke: props.bgColor,
                    fill: 'none',  // Change the stroke color as needed
                }}></circle>
            </svg>

            <div className="number ">
            <h3 className="">
                {props.ValuePercent}
      <span>%</span>
    </h3>
            </div>
        </>
    )
}
export default Progressbar;