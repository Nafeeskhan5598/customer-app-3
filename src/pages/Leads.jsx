import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import MenuPages from "../components/MenuPages";
import { GlobalInfo } from '../pages/Dashboard';
import NavArea from "../components/NavArea";
import '../css/input.css';
import CreateLead from "../SmallPages/leads/CreateLead";
import CreateLeadSubForm from "../SubComponents/leadSub/CreateleadSubForm";
import { toggleMenuWidth } from '..//js/Util';
import { faUser, faPerson } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Leads() {

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

  const [currentStep, setCurrentStep] = useState(1)

  const handleContinueClick = () => {
    setCurrentStep(currentStep + 1);
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
              </div>
              {currentStep === 1 && <CreateLead onContinueClick={handleContinueClick} />}
              {currentStep === 2 && <CreateLeadSubForm />}
            </div>

            < Footer />
          </section>
        </GlobalInfo.Provider>
      </div>
    </>
  )
}
export default Leads;