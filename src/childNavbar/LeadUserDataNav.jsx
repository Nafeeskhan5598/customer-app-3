import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function LeadUserDataNav(props) {
    const [isDropdownOpen] = useState(false);

    return (
        <>
            <li className="small-nav-item flex" onClick={() => props.onClickHandle(props.contact.id)}>
                <span>
                    { !! props.icon && <FontAwesomeIcon className="pl-2" icon={props.icon} /> }
                    {/* {props.iconFavorite && <span><FontAwesomeIcon className={`pl-2 ${props.isLeadFavoritVisible ? 'visible' : 'hidden'}`} icon={props.iconFavorite} /></span>} */}
                    {props.iconFavorite && <span><FontAwesomeIcon className={`pl-2 ${props.isLeadFavoritVisible ? 'visible' : 'hidden'}`} icon={props.iconFavorite} /></span>}
                    {props.iconBold && <FontAwesomeIcon className={`pl-2 ${props.isLeadFavoritVisible ? 'hidden' : 'visible'}`} icon={props.iconBold} />}
                </span>
              
                <span className="text-sm pl-2">{props.text}</span>
                {props.dropdownContent && isDropdownOpen && (
                    <div className="small-nav-dropdown">
                        {props.dropdownContent}
                    </div>
                )}
            </li>
        </>
    )
}

export default LeadUserDataNav;
