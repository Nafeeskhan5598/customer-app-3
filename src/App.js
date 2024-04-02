import React from "react";
// import HomePage from './pages/Dashboard'
// import { Helmet } from "react-helmet";
// import Favicon from './img/logout.png';
// import ToDoList from "./pages/ToDoList";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OpenTask from "./SmallPages/todoList/OpenTask";
import AllTask from "./SmallPages/todoList/AllTask";
// import CreateContact from "./SmallPages/CreateContactPersonal";
import CreateContactPersonal from "./SmallPages/contacts/CreateContactPersonal.jsx";
// import CreateContactProfessional from "./SubComponents/ContactProfessionalSub";
// import ContactProfessionalSub from "./SubComponents/ContactProfessionalSub";
// import CreateContactProfessional from "./SmallPages/CreateContactProfessional";
// import CreateOtherInfo from "./SmallPages/CreateOtherInfo";
// import CreateSaveInfo from "./SmallPages/CreateSaveInfo";
import Dashboard from "./pages/Dashboard";
import AllContacts from "./SmallPages/contacts/AllContacts.jsx";
// import Leads from "./pages/Leads.jsx";
// import CreateLead from "./SmallPages/CreateLead.jsx";
import Leads from "./pages/Leads.jsx";
import MyLeads from "./SmallPages/leads/MyLeads.jsx";
import CreateFolderForm from "./SubComponents/formSub/CreateFolderForm.jsx";
import FollowUp from "./SmallPages/leads/FollowUp.jsx";
import OpenLead from "./SmallPages/leads/OpenLead.jsx";
import AllLeads from "./SmallPages/leads/AllLeads.jsx";
import BackLog from "./SmallPages/leads/BackLog.jsx";
import CalendarFull from "./SmallPages/leads/CalendarFull.jsx";
import Opportunities from "./SmallPages/opportunities/Opportunities.jsx";
import MyOpportunity from "./SmallPages/opportunities/MyOpportunity.jsx";
import OpportunityFollowUp from "./SmallPages/opportunities/OpportunityFollowUp.jsx";
import OpenOpportunity from "./SmallPages/opportunities/OpenOpportunity.jsx";
import AllOpportunity from "./SmallPages/opportunities/AllOpportunity.jsx";
import OpportunityBacklog from "./SmallPages/opportunities/OpportunityBacklog.jsx";
import OpportunityCalendar from "./SmallPages/opportunities/OpportunityCalendar.jsx";
import Properties from "./pages/Properties.jsx";
// import MyProerties from "./SmallPages/properties/MyProerties.jsx";
import MyProperties from "./SmallPages/properties/MyProperties.jsx";


// import FollowUp from "./SmallPages/FollowUp.jsx";




function App() {
  return (
    <div>
      {/* <Helmet> */}
      <meta charSet="UTF-8" />
      <title>Dashboard</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <meta
        name="description"
        content="Web site created using create-react-app"
      />
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      {/* <link
        href="https://fonts.googleapis.com/css2?family=Archivo:wght@600&family=DM+Sans:opsz,wght@9..40,600&family=Karla:wght@700&family=Nunito:wght@600&display=swap"
        rel="stylesheet"
      /> */}

      {/* <link rel="stylesheet" href="/src/css/icons.min.css" type="text/css" /> */}


      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.css"
      />

      {/* <link rel="stylesheet" href="../src/css/input.css" /> */} 
      {/* <link rel="shortcut icon" href={Favicon} /> */}
      {/* </Helmet> */}

      <BrowserRouter basename="/dashboard">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/OpenTask" element={<OpenTask />} />
          <Route path="/AllTask" element={<AllTask />} />
          <Route path="/CreateContactPersonal" element={<CreateContactPersonal />} />
          <Route path="/AllContacts" element={<AllContacts />} />
          <Route path="/Leads" element={<Leads />} />
          <Route path="/MyLeads" element={<MyLeads />} />
          <Route path="/CreateFolderForm" element={<CreateFolderForm />} />     {/* small component */}
          <Route path="/FollowUp" element={<FollowUp />} />
          <Route path="/OpenLead" element={<OpenLead />} />
          <Route path="/AllLeads" element={<AllLeads />} />
          <Route path="/BackLog" element={<BackLog />} />
          <Route path="/CalendarFull" element={<CalendarFull />} />
          <Route path="Opportunities" element={<Opportunities />} />
          <Route path="/MyOpportunity" element={< MyOpportunity />} />
          <Route path="/OpportunityFollowUp" element={< OpportunityFollowUp />} />
          <Route path="/OpenOpportunity" element={< OpenOpportunity />} />
          <Route path="/AllOpportunity" element={< AllOpportunity />} />
          <Route path="/OpportunityBacklog" element={<OpportunityBacklog />} />
          <Route path="/OpportunityCalendar" element={<OpportunityCalendar />} />
          <Route path="/Properties" element={<Properties />} />

          
          <Route path="/MyProperties" element={<MyProperties />} />






          {/* <Route path="/CreateContactProfessional" element={<CreateContactProfessional/>} />
            <Route path="/CreateOtherInfo" element={<CreateOtherInfo/>} />
            <Route path="/CreateSaveInfo" element={<CreateSaveInfo/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
