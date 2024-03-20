import React from "react";
// import { Link } from "react-router-dom";
// import { GlobalInfo } from '../SmallPages/contacts/AllContacts'; 

function UserContact(props) {
    // const { toggleActionClick } = useContext(GlobalInfo);

    return (

        <>

            <section onClick={props.toggleActionClick}>
                <span className={`flex justify-end relative left-[-1rem] ${props.isCreateFolderVisible ? 'flex' : 'hidden'}`}>
                    <input type="checkbox" />
                </span>
                <section className={`user-contact text-[#939393] ${props.isSelected ? 'selected' : ''}`} onClick={props.toggleActionClick}>
                    <div className="card-body">
                        <div className="flex items-center px-4">
                            <div className="flex-shrink-0">
                                <div
                                    className="flex justify-center items-center h-9 w-9 rounded-full bg text-white bg-primary">
                             {props.UserImgs ? (
                                <img
                                      src={`${process.env.PUBLIC_URL}/${props.UserImgs}`}
                                        alt={props.UserImgs}
                                        className="rounded-full"
                                    />
                                    ) : (
                                    <span className="text-[#9d9d9d] relative -top-4" >{props.contactIcon} </span>
                                    )}
                                </div>
                            </div>
                            <div className="flex-grow truncate ms-2">
                                <div className="flex justify-between">
                                    <div>
                                        <h5 className="text-sm font-semibold  mb-1">{props.userName} </h5>
                                    </div>
                                    <div>

                                        <h6 className="text-sm font-semibold  mb-1">{props.dateTime}</h6>
                                    </div>

                                </div>
                                <div className="flex justify-between">
                                    <div>
                                        <h5 className="text-sm font-semibold  mb-1">{props.mobileNumber} </h5>
                                    </div>
                                    <div>
                                        <h6 className="text-sm font-semibold  mb-1">{props.byUser} </h6>
                                    </div>
                                </div>
                                <small className="noti-item-subtitle text-muted relative -top-2">{props.userEmail}</small>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
export default UserContact;