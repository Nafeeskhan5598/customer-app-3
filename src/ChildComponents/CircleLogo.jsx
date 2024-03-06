import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from 'react-tooltip';

function CircleLogo(props) {
    return (
        <>
           <div className="">
            <span
                className="px-3 py-2 border-2 border-solid border-gray-500 rounded-full text-blue-400"
                data-tip
                data-for={`circleTooltip-${props.id}`}
                id={`my-tooltip-anchor-${props.id}`}
            >
                <FontAwesomeIcon icon={props.circleLogo} />
            </span>
            <Tooltip
                id={`circleTooltip-${props.id}`}
                anchorSelect={`#my-tooltip-anchor-${props.id}`}
                content={props.tooltipText}
                place="bottom-start"
            />
        </div>
        </>
    );
}

export default CircleLogo;
