import React from 'react';

function LabelName(props) {
    return (
        <>
            {/* <div className="input-dropdown"> */}
                <label className="label-name" >{props.labelName}</label>
            {/* </div> */}
        </>
    );
}

export default LabelName;