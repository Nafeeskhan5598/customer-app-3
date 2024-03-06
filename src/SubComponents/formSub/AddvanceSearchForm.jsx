import React from "react";
import Dropdown from "../../field/Dropdown";
import InputLogo from "../../field/InputLogo";
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
                    <label className=" !w-[88%] !rounded-none text-center">
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
                    <label className=" !w-[88%] !rounded-none text-center">
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
                            // inputLogo={faPhone}
                            inputTypes="number"
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
                            inputTypes="number"
                            inputPlaceholder="Other contact number"
                        />
                    </div>
                </div>

                <div className="input-dropdown">
                    <label className="label-name !text-[x-small]" >Email</label>
                    <div className='w-[100%] flex justify-end h-[2.7rem]'>
                        <InputLogo
                            inputWidth="98%"
                            // inputLogo={faEnvelope}
                            inputTypes="email"
                            inputPlaceholder="Enter email"
                        />
                    </div>
                </div>



                <div className="input-dropdown">
                    <label className="label-name !text-[x-small]">CIty</label>
                    <label className=" !w-[88%] !rounded-none text-center">
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
                    <label className=" !w-[88%] !rounded-none text-center">
                        <Dropdown  {...dropdownProps}
                            dropOp2='Red'
                            dropOp3='Orange'
                            dropOp4='Yellow'
                            dropOp5='Green'

                        />
                    </label>
                </div>

                <div className="form-control form-btn">
                    <label></label>
                    <button type="submit" >SUBMIT</button>
                    <button type="button" className="cancle-btn">CANCEL</button>
                </div>
                {/* <div className="input-dropdown">
                    <label className="label-name !text-[x-small]">Pollution Color Zone</label>
                    <label className=" !w-[88%] !rounded-none text-center">
                        <Dropdown
                            dropBg="#ffffff"
                            dropWidth='100%'
                            dropFont='11px'
                            dropPadding='10px 0px'
                            dropColor='#686868'
                            drodownWidth='100%'
                            dropHeading="Select"
                            dropOp1='Select'
                            dropOp2='Red'
                            dropOp3='Orange'
                            dropOp4='Yellow'
                            dropOp5='Green'

                        />
                    </label>
                </div> */}
                {/* <div className="input-dropdown">
                    <label className="label-name !text-[x-small]">Pollution Color Zone</label>
                    <label className=" !w-[88%] !rounded-none text-center">
                        <Dropdown
                            dropBg="#ffffff"
                            dropWidth='100%'
                            dropFont='11px'
                            dropPadding='10px 0px'
                            dropColor='#686868'
                            drodownWidth='100%'
                            dropHeading="Select"
                            dropOp1='Select'
                            dropOp2='Red'
                            dropOp3='Orange'
                            dropOp4='Yellow'
                            dropOp5='Green'

                        />
                    </label>
                </div> */}


                {/* <div className="input-dropdown">
                    <label className="label-name !text-[x-small]" >Canopy Details(Length-Width)</label>
                    <div className='w-[100%] flex justify-end h-[2.7rem]'>
                        <InputLogo
                            inputWidth="48%"
                            inputLogo={faCompass}
                            inputTypes="number"
                        />
                        <SpanTxt
                            spanTxtWidth="6%"
                            spanText="_"
                        />
                        <InputLogo
                            inputWidth="48%"
                            inputLogo={faCompass}
                            inputTypes="number"
                        />
                    </div>
                </div> */}
            </div>
        </>
    )
}
export default AddvanceSearchForm;