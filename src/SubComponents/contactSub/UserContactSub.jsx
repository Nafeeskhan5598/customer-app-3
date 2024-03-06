// import React, { useState } from "react";
// import UserContact from "../../common/UserContact";
// import { faUser, faBullhorn, faSms, faEnvelope, faTrash, faDownload, faFileImport, faBan, faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Action from "..//../childNavbar/action/Audience";

// function UserContactSub() {

//     const [isActionOpen, setActionOpen] = useState(false);

//     const handleActionClick = () => {

//         setActionOpen(!isActionOpen); 
//     }


//     return (
//         <>
//             <UserContact
//                 contactIcon={<FontAwesomeIcon className="pl-2" icon={faBullhorn} />}
//                 userName="Create Audience"
//                 userEmail="Marketing & Promotions."
//                 onClickAction={handleActionClick}
//                 />
           
//             <UserContact
//                 contactIcon={<FontAwesomeIcon className="pl-2" icon={faSms} />}
//                 userName="Send Group SMS"
//                 userEmail="Send sms to contact."
//             />
//             <UserContact
//                 contactIcon={<FontAwesomeIcon className="pl-2" icon={faEnvelope} />}
//                 userName="Send Group Email"
//                 userEmail="Send sms to contact."
//             />
//             <UserContact
//                 contactIcon={<FontAwesomeIcon className="pl-2" icon={faTrash} />}
//                 userName="Group Delete"
//                 userEmail="Delete your serach contact."
//             />
//             <UserContact
//                 contactIcon={<FontAwesomeIcon className="pl-2" icon={faUser} />}
//                 userName="Download"
//                 userEmail="Download your contact in execel."
//             />
//             <UserContact
//                 contactIcon={<FontAwesomeIcon className="pl-2" icon={faDownload} />}
//                 userName="Import Contacts"
//                 userEmail="Import contacts sheets..."
//             />

//             {/* <UserContact
//                 contactIcon={<FontAwesomeIcon className="pl-2" icon={faFileImport} />}
//                 userName="Mark DND Number"
//                 userEmail="Update DND number."
//             /> */}

//             <UserContact
//                 contactIcon={<FontAwesomeIcon className="pl-2" icon={faBan} />}
//                 userName="Download"
//                 userEmail="Download your contact in execel..."
//             />

//             {/* <UserContact
//                 contactIcon={<FontAwesomeIcon className="pl-2" icon={faCircleArrowDown} />}
//                 userName="Email Varification"
                
//                 userEmail="Smarter email varification for marketer..."
//             /> */}

//             <UserContact
//                 contactIcon={<FontAwesomeIcon className="pl-2" icon={faCircleArrowDown} />}
//                 userName="Marge Contacts"
//                 userEmail="Marge contacts"
//             />
//         </>
//     )
// }
// export default UserContactSub;