import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import MenuPages from "../../components/MenuPages";
import { GlobalInfo } from '../../pages/Dashboard';
import NavArea from "../../components/NavArea";
import OpenTaskSub from "../../SubComponents/todoSub/OpenTaskSub";
import { toggleMenuWidth } from '..//..//js/Util';

function OpenTask() {
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

    // const [menuWidth, setMenuWidth] = useState("24%");
    // const [menuDisplay, setMenuDisplay] = useState('block');
    // const [pagesDisplay, setPagesDisplay] = useState('block');
    // const [logoDisplay, setLogoDisplay] = useState('none');

    // const toggleMenuWidth = () => {
    //     const newWidth = menuWidth === "24%" ? "5%" : "24%";
    //     setMenuWidth(newWidth);
    //     const newDisplay = menuDisplay === 'none' ? 'block' : 'none';
    //     setMenuDisplay(newDisplay);
    //     const newPagesDisplay = pagesDisplay === 'none' ? 'block' : 'none';
    //     setPagesDisplay(newPagesDisplay);
    //     const newLogoDisplay = logoDisplay === 'block' ? 'none' : 'block';
    //     setLogoDisplay(newLogoDisplay);
    // };


    return (

        <>

            <div className="flex wrapper">
                <GlobalInfo.Provider value={{ menuDisplay, pagesDisplay, logoDisplay, toggleMenuWidth: handleToggleMenuWidth }}>
                    <div className="app-menu scrollable fixed h-screen   overflow-scroll" tyle={{ width: menuWidth }} id="content">
                        < MenuPages />
                    </div>
                    <section className="page-content-all-area w-full" style={{ width: pageContentWidth}}>
                        <div className="page-content">
                            <NavArea />
                        </div>
                        < OpenTaskSub
                            todoHeading="Open Task"
                        />
                        < Footer />
                    </section>
                </GlobalInfo.Provider>
            </div>
        </>
    )
}
export default OpenTask;