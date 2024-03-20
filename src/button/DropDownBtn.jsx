import React from "react";

function DropDownBtn(props) {
    const { onClick, children } = props;

    return (

        <>
            <div className="dropdown-item" onClick={onClick}>
                {children}
            </div>
        </>
    )
}
export default DropDownBtn;