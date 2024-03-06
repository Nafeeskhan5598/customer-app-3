import React from "react";

function FormHeading(props) {

    return (
        <>
            <div className="group-transfer-heading text-center pt-4 pb-8">
                <h2 className="text-2xl ">{props.headingForm} <i> {props.headingItalic} </i> </h2>
                <h6 className="font-bold"> {props.headingPera} ({props.headingTotal} <span>{props.headingValue}</span> )</h6>
            </div>
        </>
    )
}
export default FormHeading; 