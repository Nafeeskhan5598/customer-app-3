import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faHome, faAdd, faShare, faFolder, faBars, faUser, faBullhorn, faSms, faEnvelope, faTrash, faDownload, faBan, faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import UserContactSub from "../SubComponents/contactSub/UserContactSub";
// import FolderItemSub from "../childNavbar/FolderItemSub";
import GroupTransferSub from "../childNavbar/GroupTransferSub";
import UserContact from "../common/UserContact";

function ChildNavbar(props) {

    const { handleDropdownToggleTransfer, handleToggleCreateFolder, handleToggleaction, handleToggleAudience, handleToggleGroupDelete, handleToggleGroupEmail, handleToggleExportContact,  } = props;

    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isDropdownOpenFolder, setDropdownOpenFolder] = useState(false);
    const [isDropdownOpenTransfer, setDropdownOpenTransfer] = useState(false);
    const [isCreateFolder, setCreateFolder] = useState(false)


    // const handleSmallNavCreateFolder = (event) => {
    //     event.stopPropagation();        
    //     setCreateFolder(!isCreateFolder);
    // };

    const handleDropdownToggle = () => { 
        setDropdownOpen(!isDropdownOpen);

    };

    const handleDropdownToggleFolder = (event) => {
        setDropdownOpenFolder(!isDropdownOpenFolder);
        event.stopPropagation();        
        setCreateFolder(!isCreateFolder);
    };
    const handleSmallNavTransferClick = (event) => {
        event.stopPropagation();
        setDropdownOpenTransfer(!isDropdownOpenTransfer);
    };

    // const [isActionOpen, setActionOpen] = useState(false);

    // const handleActionClick = () => {
    //     // Your logic for handling the click event
    //     setActionOpen(!isActionOpen); // Toggle the state to open/close Action component
    // }

    return (

        <>
            <ul className="todo-unorder">
                <li>
                    <Link to="/AllTask" rel="noopener noreferrer">
                        <span>
                            <FontAwesomeIcon className="pl-2 text-responsive" icon={faHome} />
                        </span>
                        <span className="text-responsive text-sm pl-2">HOME</span>
                    </Link>
                </li>
                <li>
                    <Link to="/CreateContactPersonal">
                        <span>
                            <FontAwesomeIcon className="pl-2 text-responsive" icon={faAdd} />
                        </span>
                        <span className="text-sm pl-2 text-responsive">ADD CONTACT</span>
                    </Link>
                </li>
                <li className="small-nav-transfer" onClick={(e) => { handleDropdownToggleTransfer(); handleSmallNavTransferClick(e); }}>
                    <span>
                        <FontAwesomeIcon className="pl-2 text-responsive" icon={faShare} />
                    </span>
                    <span className="text-sm pl-2 text-responsive">GROUP TRANSFER</span>
                    {isDropdownOpenTransfer && (
                        <div className="small-nav-transfer-drop">
                            <GroupTransferSub
                                labelTransfer="Custer Transfer"
                            />
                        </div>
                    )
                    }
                </li>
                <li className="small-nav-folder" onClick={handleDropdownToggleFolder}>
                    <span>
                        <FontAwesomeIcon className="pl-2 text-responsive" icon={faFolder} />
                    </span>
                    <span className="text-sm pl-2 text-responsive">FOLDERS</span>
                    {isDropdownOpenFolder && (
                        <div className="small-nav-folder-drop text-responsive">
                            <div onClick={(e) => { handleToggleCreateFolder(); }}>
                                Create Folder
                            </div>
                        </div>
                    )}
                </li>
                <li className="small-nav-action" onClick={handleDropdownToggle}>
                    <span className="nav-action">
                        <FontAwesomeIcon className="pl-2 text-responsive" icon={faBars} />
                    </span>
                    <span className="text-sm pl-2 text-responsive">ACTIONS</span>

                    {isDropdownOpen && (
                        <div className="small-nav-dropdown">
                            {/* <UserContactSub /> */}





                            <section onClick={(e) => { handleToggleAudience();  }}>
                                <UserContact
                                    contactIcon={<FontAwesomeIcon className="pl-2" icon={faBullhorn} />}
                                    userName="Create Audience"
                                    userEmail="Marketing & Promotions."
                                // onClickAction={handleActionClick}
                                />
                            </section>

                            <section onClick={(e) => { handleToggleaction(); }}>
                                <UserContact
                                    contactIcon={<FontAwesomeIcon className="pl-2" icon={faSms} />}
                                    userName="Send Group SMS"
                                    userEmail="Send sms to contact."
                                />
                            </section>

                            <section onClick={(e) => { handleToggleGroupEmail(); }}>
                                <UserContact
                                    contactIcon={<FontAwesomeIcon className="pl-2" icon={faEnvelope} />}
                                    userName="Send Group Email"
                                    userEmail="Send sms to contact."
                                />
                            </section>
                            <section onClick={(e) => { handleToggleGroupDelete(); }}>
                                <UserContact
                                    contactIcon={<FontAwesomeIcon className="pl-2" icon={faTrash} />}
                                    userName="Group Delete"
                                    userEmail="Delete your serach contact."
                                />
                            </section>

                            <UserContact
                                contactIcon={<FontAwesomeIcon className="pl-2" icon={faUser} />}
                                userName="Download"
                                userEmail="Download your contact in execel."
                            />
                             <section onClick={(e) => { handleToggleExportContact(); }}>
                            <UserContact
                                contactIcon={<FontAwesomeIcon className="pl-2" icon={faDownload} />}
                                userName="Export Contacts"
                                userEmail="Import contacts sheets..."
                            />
                            </section>

                            {/* <UserContact
                contactIcon={<FontAwesomeIcon className="pl-2" icon={faFileImport} />}
                userName="Mark DND Number"
                userEmail="Update DND number."
            /> */}

                            <UserContact
                                contactIcon={<FontAwesomeIcon className="pl-2" icon={faBan} />}
                                userName="Download"
                                userEmail="Download your contact in execel..."
                            />

                            {/* <UserContact
                contactIcon={<FontAwesomeIcon className="pl-2" icon={faCircleArrowDown} />}
                userName="Email Varification"
                
                userEmail="Smarter email varification for marketer..."
            /> */}

                            <UserContact
                                contactIcon={<FontAwesomeIcon className="pl-2" icon={faCircleArrowDown} />}
                                userName="Marge Contacts"
                                userEmail="Marge contacts"
                            />
                        </div>
                    )}
                </li>
            </ul>
        </>
    )
}
export default ChildNavbar;