import React, { createContext, useState, useEffect } from "react";
import Footer from "../components/Footer";
import MenuPages from "../components/MenuPages";
import Topbar from "../components/Topbar";
import NavArea from "../components/NavArea";
import '../css/input.css';
import '../css/responsive.css';

export const GlobalInfo = createContext();

function Dashboard() {

    const [menuWidth, setMenuWidth] = useState("24%");
    const [pageContentWidth, setPageContentWidth ] = useState("76");
    const [menuDisplay, setMenuDisplay] = useState('block');
    const [pagesDisplay, setPagesDisplay] = useState('block');
    const [logoDisplay, setLogoDisplay] = useState('none');
    var content = document.getElementById("content");

    const toggleMenuWidth = () => {
        const newWidth = menuWidth === "24%" ? "5%" : "24%";
        setMenuWidth(newWidth);
        const contentWidth = pageContentWidth ==="76%" ? "95%" : "76";
        setPageContentWidth(contentWidth);
        const newDisplay = menuDisplay === 'none' ? 'block' : 'none';
        setMenuDisplay(newDisplay);
        const newPagesDisplay = pagesDisplay === 'none' ? 'block' : 'none';
        setPagesDisplay(newPagesDisplay);
        const newLogoDisplay = logoDisplay === 'block' ? 'none' : 'block';
        setLogoDisplay(newLogoDisplay);


        if (window.innerWidth <= 500) {
            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        }

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


    return (
        <>
            <div className="flex wrapper">
                <GlobalInfo.Provider value={{ menuDisplay, pagesDisplay, logoDisplay, toggleMenuWidth }}>
                    <div className="app-menu scrollable fixed h-screen overflow-scroll " style={{ width: menuWidth }} id="content">
                        < MenuPages />
                    </div>
                    <section className="page-content-all-area w-full" style={{ width: pageContentWidth}}>
                        <div className="page-content">
                            <NavArea />
                        </div>
                        <Topbar />
                        < Footer />
                    </section>
                </GlobalInfo.Provider>
            </div>
        </>
    );
}

export default Dashboard;

// !max-lg:w-3/4 max-lg:fixed max-lg:bg-white !important