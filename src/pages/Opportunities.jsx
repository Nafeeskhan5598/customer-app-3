// import React, { useState, useEffect } from "react";
// import Footer from "../components/Footer";
// import MenuPages from "../components/MenuPages";
// import { GlobalInfo } from '../pages/Dashboard';
// // import { Navbar } from "reactstrap";
// // import Topbar from "../components/Topbar";
// import NavArea from "../components/NavArea";
// import '../css/input.css';
// import { toggleMenuWidth } from '..//js/Util';
// // import OpenTaskSub from "../SubComponents/OpenTaskSub";
// // import CreateContactPersonal from "../SmallPages/CreateContactPersonal";
// // import CreateLead from "../SmallPages/CreateLead";
// // import CreateLeadSubForm from "../SubComponents/CreateleadSubForm";
// import OpportunitiContactInfo from "../SmallPages/opportunities/OpportunitiContactInfo";
// import OpportunityBasicInfo from "../SubComponents/opportunitiSub/OpportunityBasicInfo";
// import OpportunitySchedul from "../SubComponents/opportunitiSub/OpportunitySchedul";
// import OpportunitySaveInfo from "../SubComponents/opportunitiSub/OpportunitySaveInfo";
// import CreatePropertiesLocation from "../SmallPages/properties/CreatePropertiesLocation";

// // export const GlobalInfo = createContext();

// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// function Opportunities() {


//   const [menuWidth, setMenuWidth] = useState("24%");
//   const [pageContentWidth, setPageContentWidth] = useState("76");
//   const [menuDisplay, setMenuDisplay] = useState('block');
//   const [pagesDisplay, setPagesDisplay] = useState('block');
//   const [logoDisplay, setLogoDisplay] = useState('none');
//   const content = document.getElementById("content");

//   const handleToggleMenuWidth = () => {
//     toggleMenuWidth({
//       setMenuWidth,
//       setPageContentWidth,
//       setMenuDisplay,
//       setPagesDisplay,
//       setLogoDisplay,
//       content,
//     });
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 1024) {
//         setMenuWidth("5%");
//       } else {
//         setMenuWidth("24%");
//       }
//     };

//     handleResize();

//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const [actionDisplay, setActionDisplay] = useState('none');
//   const toggleActionClick = () => {
//     setActionDisplay(prevDisplay => (prevDisplay === 'none' ? 'block' : 'none'));
//   };
//   const [showSubForm, setShowSubForm] = useState(false);

//   const handleContinueClick = () => {
//     setShowSubForm(true);
//   };


//   //     const [showSubForm, setShowSubForm] = useState(false);
//   //     const handleContinueClick = () => {
//   //         setShowSubForm(true);
//   //     };
//   //     const [showSecForm, setShowSecFrom] = useState(false);
//   //    const onContinueClickSec = () =>{
//   //     setShowSecFrom(true)
//   //    } 

//   // const [showSubForm, setShowSubForm] = useState(true);
//   const [showSecForm, setShowSecForm] = useState(false);
//   const [showThirdForm, setShowThirdForm] = useState(false);
//   const [showForForm, setShowForForm] = useState(false);

//   // const handleContinueClick = () => {
//   //     setShowSubForm(false);
//   //     setShowSecForm(true);
//   // };

//   const onContinueClickSec = () => {
//     setShowSecForm(false);
//     setShowThirdForm(true);
//   };
//   const onContinueClickThird = () => {
//     setShowThirdForm(false);
//     setShowForForm(true);
//   }


//   //    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//   const onContinueClickFor = (e) => {
//     window.alert('Your form is successfully submitted');

//     setShowForForm(true);
//   };



//   // const [step, setStep] = useState(1);

//   // const handleContinueClick = () => {
//   //     setStep(step + 1);
//   // };

//   return (

//     <>

//       <div className="flex wrapper">
//         <GlobalInfo.Provider value={{ menuDisplay, pagesDisplay, logoDisplay, toggleMenuWidth: handleToggleMenuWidth, actionDisplay, toggleActionClick }}>
//           <div className="app-menu app-menu-mobile scrollable fixed h-screen   overflow-scroll" style={{ width: menuWidth }} id="content">
//             < MenuPages />
//           </div>
//           <section className="page-content-all-area w-full" style={{ width: pageContentWidth }}>
//             <div className="page-content">
//               <NavArea />
//             </div>
//             {showSubForm && <OpportunitiContactInfo onContinueClick={handleContinueClick} />}
//             {showSecForm && <OpportunityBasicInfo onContinueClick={onContinueClickSec} />}
//             {showThirdForm && <OpportunitySchedul />}
//             {showThirdForm && <CreatePropertiesLocation onContinueClick={onContinueClickThird} />}
//             {showForForm && <OpportunitySaveInfo onContinueClick={onContinueClickFor} handleSubmit={onContinueClickFor} />}
//             < Footer />
//           </section>
//         </GlobalInfo.Provider>
//       </div>

//     </>
//   )
// }
// export default Opportunities;