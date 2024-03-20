import React, { createContext, useState } from "react";
import Footer from "../components/Footer";
import MenuPages from "../components/MenuPages";
import '../css/input.css';
import OpenTask from "../SmallPages/OpenTask";

export const GlobalInfo = createContext();

function TodoPage() {

    const [menuWidth, setMenuWidth] = useState("24%");
    const [menuDisplay, setMenuDisplay] = useState('block');
    const [pagesDisplay, setPagesDisplay] = useState('block');
    const [logoDisplay, setLogoDisplay] = useState('none');
    var content = document.getElementById("content");

    const toggleMenuWidth = () => {
        const newWidth = menuWidth === "24%" ? "5%" : "24%";
        setMenuWidth(newWidth);
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

    return (
        <>
            <div className="flex wrapper">
                <GlobalInfo.Provider value={{ menuDisplay, pagesDisplay, logoDisplay, toggleMenuWidth }}>
                    <div className="app-menu scrollable fixed h-screen   overflow-scroll" style={{ width:   menuWidth }} id="content">
                        < MenuPages />
                    </div>
                    <section className="page-content-all-area w-full">
                        <OpenTask />
                        < Footer />
                    </section>
                </GlobalInfo.Provider>
            </div>
        </>
    );
}
export default TodoPage;