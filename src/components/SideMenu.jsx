import React, { useState,  useContext } from "react";
import MenuList from "../ChildComponents/MenuList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { GlobalInfo } from '../pages/Dashboard'; 
import { Link } from "react-router-dom";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function SideMenu(Props) {
  const { pagesDisplay } = useContext(GlobalInfo);
  const { icons, PagesName, menuList } = Props;
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuVisible(!isSubMenuVisible);
  };

  return (
    <>
      <ul className="menu">
        <li className="menu-item display">
          <Link to="/" className="menu-link right-arrow" onClick={toggleSubMenu}>
            <span className="menu-icon flex gap-2 items-center">
              <FontAwesomeIcon icon={icons} />
              {/* <GlobalInfo.Provider value={{ toggleMenuWidth }}> */}
              <span className="menu-text side-menu-user" style={{ display: pagesDisplay}}>{PagesName}</span>
              {/* </GlobalInfo.Provider> */}
            </span>
            <span className="menu-arrow" style={{ display: pagesDisplay}}>
              {/* <i className="fa-solid fa-chevron-right right-icon side-menu-user"></i> */}
              <FontAwesomeIcon icon={faChevronRight} className=" right-icon side-menu-user" />
              {/* <FontAwesomeIcon icon="fa-solid fa-chevron-right" /> */}
            </span>
          </Link>

          <ul className={`sub-menu ${isSubMenuVisible ? '' : 'hidden'}`}>
            <MenuList menuList={menuList} />
          </ul>
        </li>
      </ul>
    </>
  );
}

export default SideMenu;

