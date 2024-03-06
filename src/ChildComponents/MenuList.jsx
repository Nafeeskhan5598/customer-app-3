import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

function MenuList({ menuList }) {
    return (
        <>
           {menuList.map((menuItem, index) => (
                <li key={`${menuItem.id}-${index}`} className="menu-item pl-4 py-1 ">
                    <Link
                        to={menuItem.link}
                        className="menu-link flex gap-2 items-center"
                        role="menuitem"
                        rel="noopener noreferrer"
                    >
                        { !! menuItem.icons &&  <FontAwesomeIcon icon={menuItem.icons} /> }
                        <span className="menu-text">{menuItem.text}</span>
                    </Link>
                </li>
            ))}
        </>
    );
}

export default MenuList;
