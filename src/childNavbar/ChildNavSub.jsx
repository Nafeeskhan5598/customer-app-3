import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faHome, faAdd, faShare, faFolder, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FolderItemSub from "./FolderItemSub";
import GroupTransferSub from "./GroupTransferSub";
import AllLeadActionbtn from "../SubComponents/leadSub/AllLeadActionbtn";

function ChildNavSub({ handleDropdownToggleTransfer }, props) {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isDropdownOpenFolder, setDropdownOpenFolder] = useState(false);
    const [isDropdownOpenTransfer, setDropdownOpenTransfer] = useState(false);
    const [isCreateFolderVisible, setCreateFolderVisible] = useState(false);

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

    const handleCreateFolderClick = () => {
        setCreateFolderVisible(!isCreateFolderVisible);
    };


    return (

        <>
            <ul className="todo-unorder">
                <li>
                    <Link to="/AllTask" rel="noopener noreferrer">
                        <span>
                            <FontAwesomeIcon className="pl-2" icon={faHome} />
                        </span>
                        <span className="text-sm pl-2">HOME</span>
                    </Link>
                </li>
                <li>
                    <Link to="/CreateContactPersonal">
                        <span>
                            <FontAwesomeIcon className="pl-2" icon={faAdd} />
                        </span>
                        <span className="text-sm pl-2">ADD CONTACT</span>
                    </Link>
                </li>
                <li className="small-nav-transfer" onClick={(e) => { handleDropdownToggleTransfer(); handleSmallNavTransferClick(e); }}>
                    <span>
                        <FontAwesomeIcon className="pl-2" icon={faShare} />
                    </span>
                    <span className="text-sm pl-2">GROUP TRANSFER</span>
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
                        <FontAwesomeIcon className="pl-2" icon={faFolder} />
                    </span>
                    <span className="text-sm pl-2">FOLDERS</span>
                    {isDropdownOpenFolder && (
                        <div className="small-nav-folder-drop">
                            <div>
                                <FolderItemSub

                                    folderItem="Plots"
                                    PlotItem="Create Folder"
                                    onClickCreateFolder={handleCreateFolderClick}
                                />
                            </div>
                        </div>
                    )
                    }
                </li>
                <li className="small-nav-action" onClick={handleDropdownToggle}>
                    <span className="nav-action">
                        <FontAwesomeIcon className="pl-2" icon={faBars} />
                    </span>
                    <span className="text-sm pl-2">ACTIONS</span>

                    {isDropdownOpen && (
                        <div className="small-nav-dropdown">
                            <AllLeadActionbtn />
                        </div>
                    )}
                </li>
            </ul>
        </>
    )
}
export default ChildNavSub;