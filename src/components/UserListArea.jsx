import React from "react";
import UserContact from "../common/UserContact";
// import UserF from '../img/user-3.jpg'
// import UserS from '../img/user-4.jpg'
// import UserT from '../img/user-5.jpg'
import Dropdown from "../common/Dropdown";

function UserListArea(Props) {

    const userContacts = [
        { UserName: 'nafees', DateTime: '5 jan 2024', MobileNumber: '9610968586', UserEmail:'nafees@gmail.com', ByUser: 'Paras', UserDateAndTime:'2 jan 2024 5:30 ' },
        { UserName: 'nafees', DateTime: '5 jan 2024', MobileNumber: '9610968586', UserEmail:'nafees@gmail.com', ByUser: 'Paras', UserDateAndTime:'2 jan 2024 5:30 ' },
    ]

    return (

        <>
            <div className="todolist-first-area">
                <div className="todo-area">
                    <div className="todo-text">
                        <h3 className="todo-heading-txt">{Props.todoHeading}</h3>
                        <span className="todo-record">Total Records 1544</span>
                    </div>
                    <div className="dropdown-boxs">
                        < Dropdown
                            dropHeading="SORT BY"
                            dropBg="#0a81ff"
                            dropWidth='100%'
                            dropFont='11px'
                            dropPadding='8px 0px'
                            dropColor='white'
                            dropOp1='SORT By'
                            dropOp2='Mrs'
                            dropOp3='Ms'
                            dropOp4='Miss'
                            dropOp5='Mr'


                        />
                        < Dropdown
                            dropHeading="ORDER BY"
                            dropBg="#0a81ff"
                            dropWidth='100%'
                            dropFont='11px'
                            dropPadding='8px 0px'
                            dropColor='white'
                            dropOp1='ORDER BY'
                            dropOp2='Create Date'
                            dropOp3='Update Date'
                            dropOp4='Name'
                            dropOp5='Mr'
                        />
                    </div>



                </div>

                {userContacts.map((userContact, index) => (
                        <UserContact
                        key={index}
                            UserImgs={UserF}
                            userName={userContact.UserName}
                            dateTime={userContact.DateTime}
                            mobileNumber={userContact.MobileNumber}
                            userEmail={userContact.UserEmail}
                            byUser={userContact.ByUser}
                            userDateAndTime={userContact.UserDateAndTime}
                        />
                    ))
                }

            </div>

        </>
    )
}
export default UserListArea;