import React from "react";

function ContactNewBtn(props) {

    return (
        <>
            <div className="new-status-contact relative" style={{
                border: props.newBtnBorder, top: props.positionLeft, color: props.newBtnColor
            }}>
                <span className="text-[small] font-bold grid">{props.contactStatus}</span>
            </div>

        </>
    )
}
export default ContactNewBtn;