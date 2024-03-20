import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import MenuPages from "../components/MenuPages";
import { GlobalInfo } from '../pages/Dashboard';
import NavArea from "../components/NavArea";
import { toggleMenuWidth } from '..//js/Util';
import CreatePropertiesBasicInfo from "..//SmallPages/properties/CreatePropertiesBasicInfo"
import CreatePropertiesContactInfo from "../SmallPages/properties/CreatePropertiesContactInfo";
import CreatePropertiesLocation from "../SmallPages/properties/CreatePropertiesLocation";
import CreatePropertyArea from "../SmallPages/properties/CreatePropertyArea";
import CreatePropertyOtherDetails from "../SmallPages/properties/CreatePropertyOtherDetails";
import CreatePropertiesSaveInfo from "../SmallPages/properties/CreatePropertiesSaveInfo";
import { faUser, faPerson, faEarth, faLocationDot, faChartArea, faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Properties() {


    const [menuWidth, setMenuWidth] = useState("24%");
    const [menuDisplay, setMenuDisplay] = useState('block');
    const [pagesDisplay, setPagesDisplay] = useState('block');
    const [logoDisplay, setLogoDisplay] = useState('none');
    const [pageContentWidth, setPageContentWidth] = useState("76");
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

    // const [showSubForm, setShowSubForm] = useState(true);
    // const [showSecForm, setShowSecForm] = useState(false);
    // const [showThirdForm, setShowThirdForm] = useState(false);
    // const [showForForm, setShowForForm] = useState(false);
    // const [showFivForm, setShowFiveForm] = useState(false);
    // const [showSixForm, setShowSixForm] = useState(false)


    // const handleContinueClick = () => {
    //     setShowSubForm(false);
    //     setShowSecForm(true);
    // };

    // const onContinueClickSec = () => {
    //     setShowSecForm(false);
    //     setShowThirdForm(true);
    // };
    // const onContinueClickThird = () => {
    //     setShowThirdForm(false);
    //     setShowForForm(true);
    // }
    // const onContinueClickFor = () => {
    //     setShowForForm(false);
    //     setShowFiveForm(true);
    // }
    // const onContinueClickFive = () => {
    //     setShowFiveForm(false);
    //     setShowSixForm(true);

    // }

    // const onContinueClickSix = (e) => {
    //     window.alert('Your form is successfully submitted');

    //     setShowSixForm(false);
    //     setShowSubForm(true);
    // };

    const [currentStep, setCurrentStep] = useState(1);

    const handleContinueClick = () => {
      setCurrentStep(currentStep + 1);
    };
  
    const onContinueClickSec = () => {
      setCurrentStep(currentStep + 1);
    };
  
    const onContinueClickThird = () => {
      setCurrentStep(currentStep + 1);
    };

    const onContinueClickFor = () => {
    //   window.alert('Your form is successfully submitted');
    setCurrentStep(currentStep + 1);
    };
    const onContinueClickFive = () => {
        setCurrentStep(currentStep + 1);
      };
      const onContinueClickSix= () => {
        window.alert('Your form is successfully submitted');
      }
    return (

        <>

            <div className="flex wrapper">
                <GlobalInfo.Provider value={{ menuDisplay, pagesDisplay, logoDisplay, toggleMenuWidth: handleToggleMenuWidth, actionDisplay, toggleActionClick }}>
                    <div className="app-menu app-menu-mobile scrollable fixed h-screen   overflow-scroll" style={{ width: menuWidth }} id="content">
                        < MenuPages />
                    </div>
                    <section className="page-content-all-area w-full" style={{ width: pageContentWidth }}>
                        <div className="page-content">
                            <NavArea />
                        </div>


                        <div className="create-lead-area p-8">
                            <div className="stepper-wrapper">
                                <div className={`stepper-item completed ${currentStep >= 1 ? 'completed' : ''}`}>
                                    <div className="step-counter">
                                        <FontAwesomeIcon icon={faUser} />
                                    </div>
                                    <div className="step-name font-bold">Contact Information</div>
                                </div>
                                <div className={`stepper-item ${currentStep >= 2 ? 'completed' : ''}`}>
                                    <div className="step-counter">
                                        <FontAwesomeIcon icon={faPerson} />
                                    </div>
                                    <div className="step-name">Basic Information</div>
                                </div>
                                <div className={`stepper-item ${currentStep >= 3 ? 'completed' : ''}`}>
                                    <div className="step-counter">
                                        <FontAwesomeIcon icon={faLocationDot} />
                                    </div>
                                    <div className="step-name">Location</div>
                                </div>
                                <div className={`stepper-item ${currentStep >= 4 ? 'completed' : ''}`}>
                                    <div className="step-counter">
                                        <FontAwesomeIcon icon={faChartArea} />
                                    </div>
                                    <div className="step-name">Area and pricing</div>
                                </div>
                                <div className={`stepper-item ${currentStep >= 5 ? 'completed' : ''}`}>
                                    <div className="step-counter">
                                        <FontAwesomeIcon icon={faGear} />
                                    </div>
                                    <div className="step-name">Other details</div>
                                </div>
                                <div className={`stepper-item ${currentStep >= 6 ? 'completed' : ''}`}>
                                    <div className="step-counter">
                                        <FontAwesomeIcon icon={faEarth} />
                                    </div>
                                    <div className="step-name">Save and publish</div>
                                </div>
                            </div>
                            {currentStep === 1 && <CreatePropertiesContactInfo onContinueClick={handleContinueClick} />}
                            {currentStep === 2 && <CreatePropertiesBasicInfo onContinueClick={onContinueClickSec} />}
                            {currentStep === 3 && <CreatePropertiesLocation onContinueClick={onContinueClickThird} />}
                            {currentStep === 4 && <CreatePropertyArea onContinueClick={onContinueClickFor} />}
                            {currentStep === 5 && <CreatePropertyOtherDetails onContinueClick={onContinueClickFive} />}
                            {currentStep === 6 && <CreatePropertiesSaveInfo onContinueClick={onContinueClickSix} handleSubmit={onContinueClickSix} />}
                        </div>

                        < Footer />
                    </section>
                </GlobalInfo.Provider>
            </div>

        </>
    )
}
export default Properties;