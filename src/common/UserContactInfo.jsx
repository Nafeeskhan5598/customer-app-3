import React from "react";
// import { Link } from "react-router-dom";
import TooltipBigg from "../tooltip/TooltipBigg";
import TooltipSmall from "../tooltip/TooltipSmall";


function UserContactInfo(props) {

    return (

        <>
            <section
                className={`cursor-pointer ${props.isLeadFavoritVisible ? "bg-black" : ""
                    }`}
                onClick={props.toggleActionClick}
            >
                <span className={`flex justify-end relative left-[-1rem] ${props.isCreateFolderVisible ? 'flex' : 'hidden'}`}>
                    <input type="checkbox" />
                </span>
                <div className="card-body">
                    <div className="flex items-center px-4">
                        <div className="flex-shrink-0">
                            <div
                                className="flex relative  justify-center items-center h-9 w-9 rounded-full bg text-white bg-primary">
                                <img
                                src={`${process.env.PUBLIC_URL}/${props.UserImgs}`}
                                    // src={props.UserImgs}
                                    alt={props.UserImage}
                                    className="rounded-full relative -top-2"
                                />
                                <span className="text-[#9d9d9d] " >{props.contactIcon} </span>
                            </div>
                        </div>
                        <div className="ms-2 flex">
                            <div className="leading-[0]">
                                <div>
                                    <div className="flex relative gap-4">
                                        <h5 className="text-sm font-semibold  mb-1 leading-[12px] text-[#939393]">{props.userName}
                                        </h5>
                                        <TooltipSmall
                                            tooltipSmall={props.tooltipSmall}
                                        />
                                    </div>
                                    <small className="text-[small] font-semibold leading-[7px] text-[#939393]">{props.mobileNumber} </small>
                                    <h6 className="text-sm font-semibold  mb-1 leading-[18px] text-[#939393]">{props.byUser} </h6>
                                    <h6 className="text-[small] font-semibold  mb-1 leading-[12px] text-[#939393]">{props.dateTime} <span>logo</span> Follow-Up </h6>

                                </div>

                            </div>
                            <div className="w-[43%]">
                                <div className="w-full relative -top-[0.10rem]">
                                    <h6 className="text-[small] font-semibold  w-full mb-1 text-[#939393]">{props.userDate} </h6>
                                </div>
                                <div>{props.ContactNewBtn}</div>
                                <div className="relative -top-4">
                                    <TooltipBigg
                                        tooltipBigg={props.tooltipBigg}
                                    />
                                </div>

                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default UserContactInfo;