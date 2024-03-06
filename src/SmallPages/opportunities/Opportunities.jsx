import React, { useState } from "react";
import Footer from "../../components/Footer";
import MenuPages from "../../components/MenuPages";
import { GlobalInfo } from '../../pages/Dashboard';
import NavArea from "../../components/NavArea";
import OpportunitiContactInfo from "./OpportunitiContactInfo";
import OpportunityBasicInfo from "../../SubComponents/opportunitiSub/OpportunityBasicInfo";
import OpportunitySchedul from "../../SubComponents/opportunitiSub/OpportunitySchedul";
import OpportunitySaveInfo from "../../SubComponents/opportunitiSub/OpportunitySaveInfo";

function Opportunities() {

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

    const onContinueClickFor = (e) => {
        window.alert('Your form is successfully submitted');

        setShowForForm(true);
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
                        {showSubForm && <OpportunitiContactInfo onContinueClick={handleContinueClick} />}
                        {showSecForm && <OpportunityBasicInfo onContinueClick={onContinueClickSec} />}
                        {showThirdForm && <OpportunitySchedul onContinueClick={onContinueClickThird} />}
                        {showForForm && <OpportunitySaveInfo onContinueClick={onContinueClickFor} handleSubmit={onContinueClickFor} />}
                        < Footer />
                    </section>
                </GlobalInfo.Provider>
            </div>
        </>
    )
}
export default Opportunities;