import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import MenuPages from "../../components/MenuPages";
import { GlobalInfo } from '../../pages/Dashboard';
import NavArea from "../../components/NavArea";
import OpportunitiContactInfo from "./OpportunitiContactInfo";
import OpportunityBasicInfo from "../../SubComponents/opportunitiSub/OpportunityBasicInfo";
import OpportunitySchedul from "../../SubComponents/opportunitiSub/OpportunitySchedul";
import OpportunitySaveInfo from "../../SubComponents/opportunitiSub/OpportunitySaveInfo";
import { toggleMenuWidth } from '..//..//js/Util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPerson, faClock, faEarth } from '@fortawesome/free-solid-svg-icons';

function Opportunities() {

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
    window.alert('Your form is successfully submitted');
  };
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
                    <FontAwesomeIcon icon={faClock} />
                  </div>
                  <div className="step-name">Schedule</div>
                </div>
                <div className={`stepper-item ${currentStep >= 4 ? 'completed' : ''}`}>
                  <div className="step-counter">
                    <FontAwesomeIcon icon={faEarth} />
                  </div>
                  <div className="step-name">Save and publish</div>
                </div>
              </div>
              {currentStep === 1 && <OpportunitiContactInfo onContinueClick={handleContinueClick} />}
              {currentStep === 2 && <OpportunityBasicInfo onContinueClick={onContinueClickSec} />}
              {currentStep === 3 && <OpportunitySchedul onContinueClick={onContinueClickThird} />}
              {currentStep === 4 && <OpportunitySaveInfo onContinueClick={onContinueClickFor} handleSubmit={onContinueClickFor} />}
            </div>
            < Footer />
          </section>
        </GlobalInfo.Provider>
      </div>
    </>
  )
}
export default Opportunities;