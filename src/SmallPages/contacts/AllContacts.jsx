import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import MenuPages from "../../components/MenuPages";
import { GlobalInfo } from '../../pages/Dashboard';
import AllContactSub from "../../SubComponents/contactSub/AllContactSub";
import NavArea from "../../components/NavArea";
import { toggleMenuWidth } from '..//..//js/Util';

// export const GlobalInfo = createContext();
function AllContacts() {

    const [menuWidth, setMenuWidth] = useState("24%");
    const [pageContentWidth, setPageContentWidth] = useState("76");
    const [menuDisplay, setMenuDisplay] = useState('block');
    const [pagesDisplay, setPagesDisplay] = useState('block');
    const [logoDisplay, setLogoDisplay] = useState('none');
    const content = document.getElementById("content");
  
    const handleToggleMenuWidth = () => {
      toggleMenuWidth({
        setMenuWidth,
        setPageContentWidth,
        setMenuDisplay,
        setPagesDisplay,
        setLogoDisplay,
        content,
      });
    };
  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 1024) {
          setMenuWidth("5%");
        } else {
          setMenuWidth("24%");
        }
      };
  
      handleResize();
  
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

 const [actionDisplay, setActionDisplay] = useState('none');
 const toggleActionClick = () => {
    setActionDisplay(prevDisplay => (prevDisplay === 'none' ? 'block' : 'none'));
};

    return (
        <>
            <div className="flex wrapper">
                <GlobalInfo.Provider value={{ menuDisplay, pagesDisplay, logoDisplay, toggleMenuWidth: handleToggleMenuWidth , actionDisplay, toggleActionClick }}>
                    <div className="app-menu scrollable fixed h-screen overflow-scroll" style={{ width: menuWidth }} id="content">
                        < MenuPages />
                    </div>
                    <section className="page-content-all-area w-full" style={{ width: pageContentWidth}}>
                    <div className="page-content">
                            <NavArea />
                        </div>
                        <AllContactSub
                            todoHeading="All Contacts"
                            totalRecord="Total Records 1546"
                        />
                        < Footer />
                    </section>
                </GlobalInfo.Provider>
            </div>
        </>
    );
}

export default AllContacts;