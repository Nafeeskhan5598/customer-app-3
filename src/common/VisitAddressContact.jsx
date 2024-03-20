import React from "react";
// import { Link } from "react-router-dom";
// import TooltipSmall from "../ChildComponents/TooltipBigg";
// import TooltipBigg from "../ChildComponents/TooltipBigg";
// import TooltipSmall from "../ChildComponents/TooltipSmall";
// import ContactNewBtn from "../ChildComponents/ContactNewBtn";
// import User from '../img/user-2.jpg'
import { faUser, faLocationDot, faChartArea, faClock, faBookmark, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import TooltipOrange from "../ChildComponents/TooltipOrange";
import PropTypes from 'prop-types';

function VisitAddressContact(props) {


    return (

        <>
            <h3 className="text-center pl-4 font-bold leading-4">{props.flateHeading}</h3>
            <div className="card-body font-medium" >
                <div className="flex items-center px-4">
                    <div className="flex-shrink-0 rounded-full bg-[#1b6ef3]">
                        <div
                            className="flex relative  justify-center items-center h-9 w-9 rounded-full bg text-white bg-primary">
                            <img
                                src={props.UserImgs}
                                alt={props.UserImage}
                                className="rounded-full relative -top-6"
                            />
                            {props.contactIcon && (
                                <div className="contact-icon">
                                    <FontAwesomeIcon icon={props.contactIcon} />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="ms-2 flex">
                        <div className="leading-4 font-bold text-[#7a7a7a]">
                            <div className="">
                                <div className=" relative">
                                    <div className="flex justify-between">
                                        <div>
                                            <h5 className="text-sm font-semibold">
                                                <FontAwesomeIcon icon={faUser} />
                                                {props.userName}  </h5>
                                        </div>
                                        <div>
                                            <div className="w-20 relative !top-0">{props.ContactNewBtn}</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div>
                                            <small className="text-[small] font-semibold ">{props.flateAddress} </small>
                                        </div>
                                        <div>
                                            <h6 className="text-[small] font-light w-20">
                                                {props.userDate} </h6>
                                        </div>
                                    </div>
                                </div>
                                <small className="text-[small] font-semibold ">
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    {props.flateAddress} </small>
                                <div className="flex flex-wrap justify-between w-60 ">
                                    <div>{props.tooltipOrange} </div>
                                    <h6 className="text-[small] font-semibold ">
                                        ₹ {props.Price} <span>
                                            <FontAwesomeIcon icon={faChartArea} />
                                        </span> <span>{props.Size}</span> </h6>
                                </div>
                                <h6 className="text-[small] font-semibold">
                                    <FontAwesomeIcon icon={faClock} />
                                    {props.dateTime} <span> <FontAwesomeIcon icon={faBookmark} /></span> Paras Ranjan </h6>
                                <h6 className="text-[small] font-semibold">
                                    <FontAwesomeIcon icon={faArrowTrendUp} className="text-[#cb5611]" />
                                    {props.VisitePannel} </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}


VisitAddressContact.propTypes = {
    contactIcon: PropTypes.object, // Assuming that contactIcon is a FontAwesome icon

};
export default VisitAddressContact;