import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import UserF from "..//img/user-5.jpg"

function UserProfile(props) {

    return (
        <>
            <div className="flex justify-center">
               { !! props.userIcon &&  <FontAwesomeIcon className="font-8 text-5xl p-5 bg-gray-300 rounded-full" icon={props.userIcon} /> }
                <img className="rounded-full"
                src={`${process.env.PUBLIC_URL}/${props.UserImgs}`}
                //  src={props.UserImgs} 
                 alt="" />
            </div>
            <div className="text-center">
                <h2>{props.userName}</h2>
                <h4>{props.mobileNumber}</h4>
                <h6><span> {props.assignDaysText} <span className="text-red-500">  {props.redTextDays} </span>  {props.assignTimeText} <span className="text-red-500">   {props.redTime} </span>  </span></h6>
                <h6><FontAwesomeIcon icon={faClock} />{props.nextFollowText}{props.dateTime} {props.byUser} </h6>
                
            </div>
        </>
    )
}
export default UserProfile;