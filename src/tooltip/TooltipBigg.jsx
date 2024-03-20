import React from "react";

function TooltipBigg(props) {

    return (
        <>
            <div className="tooltip">
                <span className="tooltiptext text-xs">{props.tooltipBigg}</span>
            </div>

        </>
    )
}
export default TooltipBigg;