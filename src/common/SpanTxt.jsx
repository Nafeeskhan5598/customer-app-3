import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SpanTxt(props) {


    return (

        <>

            <span style={{width:props.spanTxtWidth}} className='form-search !h-[2.3rem]  bg-[#efefef] !rounded-none text-center'>{props.spanText}</span>

        </>
    )
}
export default SpanTxt;