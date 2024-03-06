import React, { useState } from "react";
import Footer from "../../components/Footer";
import MenuPages from "../../components/MenuPages";
import { GlobalInfo } from '../../pages/Dashboard';
import CreateFolderFormSub from "./CreateFolderFormSub";

function CreateFolderForm() {

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
    };

    return (
        <>
            <div className="flex wrapper">
                <GlobalInfo.Provider value={{ menuDisplay, pagesDisplay, logoDisplay, toggleMenuWidth }}>
                    <div className="app-menu scrollable fixed h-screen   overflow-scroll" style={{ width: menuWidth }}>
                        < MenuPages />
                    </div>
                    <section className="page-content-all-area w-full">
                        <CreateFolderFormSub
                            todoHeading="My Leads"
                        />
                        < Footer />
                    </section>
                </GlobalInfo.Provider>
            </div>
        </>
    );
}

export default CreateFolderForm;