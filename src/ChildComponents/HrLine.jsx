import React from "react";
function HrLine(props) {
    return (
        <>
            <div className="form-hr-line flex items-center pl-48 gap-5">
                <div className="w-1/3"><hr /></div>
                <div>
                    <span>{props.hrText}</span>
                </div>
                <div className="w-1/3"><hr /></div>
            </div>
        </>
    )
}
export default HrLine;