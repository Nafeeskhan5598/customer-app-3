import React from "react";
import Dropdown from "../../field/Dropdown";
import InputLogo from "../../field/InputLogo";
import SubmitCancelBtn from "../../button/SubmitCancelBtn";
// import SpanTxt from "../../common/SpanTxt";
// import { faCompass, faMobile, faPhone, faSearch, faVoicemail } from "@fortawesome/free-solid-svg-icons";
// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function AddvanceSearchForm() {

    const dropdownProps = {
        dropBg: "#ffffff",
        dropPadding: '10px 0px',
        dropColor: '#686868',
        dropHeading: "Select",
        dropOp1: 'Select',
        dropWidth: '100%',
        dropFont: 'small !important',
        drodownWidth: '100%'
    }

    return (

        <>
            <div className="p-4">
                <h2 className="text-center m-auto pb-4 text-2xl">Addvance Search</h2>

                <div className="input-dropdown">
                    <label className="label-name !text-[x-small]" >Name</label>
                    <div className='w-[100%] flex justify-end h-[2.7rem]'>
                        <InputLogo
                            inputWidth="98%"
                            inputTypes="text"
                            inputPlaceholder="Enter search word"
                        />
                    </div>
                </div>

                <div className="input-dropdown">
                    <label className="label-name !text-[x-small]">Customer Type</label>
                    <label className=" !w-[85%] !rounded-none text-center">
                        <Dropdown  {...dropdownProps}
                            dropOp2='Red'
                            dropOp3='Orange'
                            dropOp4='Yellow'
                            dropOp5='Green'

                        />
                    </label>
                </div>

                <div className="input-dropdown">
                    <label className="label-name !text-[x-small]">Contact Type</label>
                    <label className=" !w-[85%] !rounded-none text-center">
                        <Dropdown  {...dropdownProps}
                            dropOp2='Red'
                            dropOp3='Orange'
                            dropOp4='Yellow'
                            dropOp5='Green'

                        />
                    </label>
                </div>

                <div className="input-dropdown">
                    <label className="label-name !text-[x-small]" >Mobile</label>
                    <div className='w-[100%] flex justify-end h-[2.7rem]'>
                        <InputLogo
                            inputWidth="98%"
                            inputTypes="tel"
                            inputPlaceholder="10 Digit Mobile"
                        />
                    </div>
                </div>

                <div className="input-dropdown">
                    <label className="label-name !text-[x-small]" >Other Number</label>
                    <div className='w-[100%] flex justify-end h-[2.7rem]'>
                        <InputLogo
                            inputWidth="98%"
                            // inputLogo={faPhone}
                            inputTypes="tel"
                            inputPlaceholder="Other contact number"
                        />
                    </div>
                </div>

                <div className="input-dropdown">
                    <label className="label-name !text-[x-small]" >Email</label>
                    <div className='w-[100%] flex justify-end h-[2.7rem]'>
                        <InputLogo
                            inputWidth="98%"
                            inputTypes="email"
                            inputPlaceholder="Enter email"
                        />
                    </div>
                </div>



                <div className="input-dropdown">
                    <label className="label-name !text-[x-small]">CIty</label>
                    <label className=" !w-[85%] !rounded-none text-center">
                        <Dropdown  {...dropdownProps}
                            dropOp2='Red'
                            dropOp3='Orange'
                            dropOp4='Yellow'
                            dropOp5='Green'

                        />
                    </label>
                </div>
                <div className="input-dropdown">
                    <label className="label-name !text-[x-small]">Source</label>
                    <label className=" !w-[85%] !rounded-none text-center">
                        <Dropdown  {...dropdownProps}
                            dropOp2='Red'
                            dropOp3='Orange'
                            dropOp4='Yellow'
                            dropOp5='Green'

                        />
                    </label>
                </div>

                    <SubmitCancelBtn submitName="SUBMIT" cancelName="CANCEL" />
            </div>
        </>
    )
}
export default AddvanceSearchForm;