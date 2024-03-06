import React, { useState } from "react";
import Footer from "../components/Footer";
import MenuPages from "../components/MenuPages";
import { GlobalInfo } from '../pages/Dashboard';
import NavArea from "../components/NavArea";
import CreatePropertiesBasicInfo from "..//SmallPages/properties/CreatePropertiesBasicInfo"
import CreatePropertiesContactInfo from "../SmallPages/properties/CreatePropertiesContactInfo";
import CreatePropertiesLocation from "../SmallPages/properties/CreatePropertiesLocation";
import CreatePropertyArea from "../SmallPages/properties/CreatePropertyArea";
import CreatePropertyOtherDetails from "../SmallPages/properties/CreatePropertyOtherDetails";
import CreatePropertiesSaveInfo from "../SmallPages/properties/CreatePropertiesSaveInfo";

function Properties() {


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

    const [showSubForm, setShowSubForm] = useState(true);
    const [showSecForm, setShowSecForm] = useState(false);
    const [showThirdForm, setShowThirdForm] = useState(false);
    const [showForForm, setShowForForm] = useState(false);
    const [showFivForm, setShowFiveForm] = useState(false);
    const [showSixForm, setShowSixForm] = useState(false)
    

    const handleContinueClick = () => {
        setShowSubForm(false);
        setShowSecForm(true);
    };

    const onContinueClickSec = () => {
        setShowSecForm(false);
        setShowThirdForm(true);
    };
    const onContinueClickThird = () => {
        setShowThirdForm(false);
        setShowForForm(true);
    }
    const onContinueClickFor = () => {
        setShowForForm(false);
        setShowFiveForm(true);
    }
   const onContinueClickFive = () => {
    setShowFiveForm(false);
    setShowSixForm(true);
    
   }

    const onContinueClickSix = (e) => {
        window.alert('Your form is successfully submitted');

        setShowSixForm(false);
        setShowSubForm(true);
    };

    return (

        <>

            <div className="flex wrapper">
                <GlobalInfo.Provider value={{ menuDisplay, pagesDisplay, logoDisplay, toggleMenuWidth }}>
                    <div className="app-menu scrollable fixed h-screen   overflow-scroll" style={{ width: menuWidth }} >
                        < MenuPages />
                    </div>
                    <section className="page-content-all-area w-full">
                        <div className="page-content">
                            <NavArea />
                        </div>
    
                        {showSubForm && <CreatePropertiesContactInfo onContinueClick={handleContinueClick} />}
                        {showSecForm && <CreatePropertiesBasicInfo onContinueClick={onContinueClickSec} />}
                        {showThirdForm && <CreatePropertiesLocation onContinueClick={onContinueClickThird} /> }
                        {showForForm &&  <CreatePropertyArea onContinueClick={onContinueClickFor} /> }
                        {showFivForm && <CreatePropertyOtherDetails onContinueClick={onContinueClickFive} /> }
                        {showSixForm &&  <CreatePropertiesSaveInfo onContinueClick={onContinueClickSix} handleSubmit={onContinueClickSix} /> }

                        < Footer />
                    </section>
                </GlobalInfo.Provider>
            </div>

        </>
    )
}
export default Properties;