import React, { useState } from "react";
import Footer from "../components/Footer";
import MenuPages from "../components/MenuPages";
import { GlobalInfo } from '../pages/Dashboard';
import NavArea from "../components/NavArea";
import '../css/input.css';
import CreateLead from "../SmallPages/leads/CreateLead";
import CreateLeadSubForm from "../SubComponents/leadSub/CreateleadSubForm";
function Leads() {

    const [menuWidth, setMenuWidth] = useState("24%");
    const [menuDisplay, setMenuDisplay] = useState('block');
    const [pagesDisplay, setPagesDisplay] = useState('block');
    const [logoDisplay, setLogoDisplay] = useState('none');

    const toggleMenuWidth = () => {
        const newWidth = menuWidth === "24%" ? "5%" : "24%";
        setMenuWidth(newWidth);
        const newDisplay = menuDisplay === 'none' ? 'block' : 'none';
        setMenuDisplay(newDisplay);
        const newPagesDisplay = pagesDisplay === 'none' ? 'block' : 'none';
        setPagesDisplay(newPagesDisplay);
        const newLogoDisplay = logoDisplay === 'block' ? 'none' : 'block';
        setLogoDisplay(newLogoDisplay);



  // Apply styles to app-menu when screen width is less than or equal to 400px
  if (window.innerWidth <= 400) {
    const appMenu = document.querySelector(".app-menu");
    if (appMenu) {
        appMenu.style.width = "65%";
        appMenu.style.zIndex = "99";
        appMenu.style.position = "fixed";
        appMenu.style.background = "white";

    }

    // Update menuDisplay to 'block'
//     setMenuDisplay('block');
// } else {
//     // Update menuDisplay based on the current state
//     setMenuDisplay((prevDisplay) => (prevDisplay === 'none' ? 'block' : 'none'));
}
};

    const [showSubForm, setShowSubForm] = useState(false);

    const handleContinueClick = () => {
        setShowSubForm(true);
    };

    return (

        <>
            <div className="flex wrapper">
                <GlobalInfo.Provider value={{ menuDisplay, pagesDisplay, logoDisplay, toggleMenuWidth }}>
                    <div className="app-menu app-menu-mobile scrollable fixed h-screen   overflow-scroll" style={{ width: menuWidth }} >
                        < MenuPages />
                    </div>
                    <section className="page-content-all-area w-full">
                        <div className="page-content">
                            <NavArea />
                        </div>
                        {showSubForm ? null : <CreateLead onContinueClick={handleContinueClick} />}
                        {showSubForm && <CreateLeadSubForm />}

                        < Footer />
                    </section>
                </GlobalInfo.Provider>
            </div>
        </>
    )
}
export default Leads;