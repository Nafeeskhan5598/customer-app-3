import React from "react";

function CheckRectangle(props) {

    return (

        <>
            <div className='checkbox'>
                <input type="checkbox" />
                <label style={{fontSize:props.checkFontSize}} className='p-2 text-[#8b8a8a] font-bold' htmlFor="">{props.checkTxt} </label>

            </div>
        </>
    )
}
export default CheckRectangle;