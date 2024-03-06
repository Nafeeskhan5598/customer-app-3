import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faHome, faShare, faBars, faCircleArrowLeft, faStar, faEdit, faBan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserContactSub from "../SubComponents/contactSub/UserContactSub";
import FolderItemSub from "../childNavbar/FolderItemSub";
import GroupTransferSub from "../childNavbar/GroupTransferSub";

function UserDataNavbar({ handleDropdownToggleTransfer }) {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isDropdownOpenFolder, setDropdownOpenFolder] = useState(false);
    const [isDropdownOpenTransfer, setDropdownOpenTransfer] = useState(false);

    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);

    };

    const handleDropdownToggleFolder = () => {
        setDropdownOpenFolder(!isDropdownOpenFolder);
    };
    const handleSmallNavTransferClick = (event) => {
        event.stopPropagation();
        setDropdownOpenTransfer(!isDropdownOpenTransfer);
    };


    return (

        <>
            <nav className="w-full pb-4">
                <ul className="todo-unorder w-full flex justify-around flex-wrap gap-0">
                    <li>
                        <Link to="/AllTask" rel="noopener noreferrer" className="flex">
                            <span>
                                <FontAwesomeIcon className="pl-2" icon={faCircleArrowLeft} />
                            </span>
                            <span className="text-sm pl-2">BACK</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/CreateContactPersonal" className="flex">
                            <span>
                                <FontAwesomeIcon className="pl-2" icon={faHome} />
                            </span>
                            <span className="text-sm pl-2">PROFILE</span>
                        </Link>
                    </li>
                    <li className="small-nav-transfer flex" onClick={(e) => { handleDropdownToggleTransfer(); handleSmallNavTransferClick(e); }}>
                        <span>
                            <FontAwesomeIcon className="pl-2" icon={faStar} />
                        </span>
                        <span className="text-sm pl-2">SELECT</span>
                        {isDropdownOpenTransfer && (
                            <div className="small-nav-transfer-drop">
                                <GroupTransferSub
                                    labelTransfer="Custer Transfer"
                                />
                            </div>
                        )
                        }
                    </li>
                    <li className="small-nav-folder flex" onClick={handleDropdownToggleFolder}>
                        <span>
                            <FontAwesomeIcon className="pl-2" icon={faShare} />
                        </span>
                        <span className="text-sm pl-2">CONVERT TO LEAD </span>
                        {isDropdownOpenFolder && (
                            <div className="small-nav-folder-drop">
                                <FolderItemSub
                                />

                                {/* <span className="border-t-2 p-[8px 0px]">Create Folder</span> */}

                            </div>
                        )
                        }
                    </li>
                    <li className="small-nav-folder flex" onClick={handleDropdownToggleFolder}>
                        <span>
                            <FontAwesomeIcon className="pl-2" icon={faEdit} />
                        </span>
                        <span className="text-sm pl-2">EDIT </span>
                        {isDropdownOpenFolder && (
                            <div className="small-nav-folder-drop">
                                <FolderItemSub
                                />

                                {/* <span className="border-t-2 p-[8px 0px]">Create Folder</span> */}

                            </div>
                        )
                        }
                    </li>

                    <li className="small-nav-folder flex" onClick={handleDropdownToggleFolder}>
                        <span>
                            <FontAwesomeIcon className="pl-2" icon={faBan} />
                        </span>
                        <span className="text-sm pl-2">BAN </span>
                        {isDropdownOpenFolder && (
                            <div className="small-nav-folder-drop">
                                <FolderItemSub
                                />

                                {/* <span className="border-t-2 p-[8px 0px]">Create Folder</span> */}

                            </div>
                        )
                        }


                    </li>



                    <li className="small-nav-action flex" onClick={handleDropdownToggle}>
                        <span className="nav-action">
                            <FontAwesomeIcon className="pl-2" icon={faBars} />
                        </span>
                        <span className="text-sm pl-2">ACTIONS</span>

                        {isDropdownOpen && (
                            <div className="small-nav-dropdown">
                                <UserContactSub />
                            </div>
                        )}
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default UserDataNavbar;