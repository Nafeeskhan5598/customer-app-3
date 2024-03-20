import React from "react";

function TooltipSmall(props) {

    return (
        <>
            <div className="tooltip">
                <span className="tooltiptext text-xs !w-[42px] !-top-0">{props.tooltipSmall}</span>
            </div>

        </>
    )
}
export default TooltipSmall;