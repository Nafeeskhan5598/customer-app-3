import React, { useContext } from "react";
// import logoLightLg from '../img/logo-light.png';
// import logoLightSm from '../img/logo-sm (1).png';
// import logoDarkLg from '../img/logo-dark.png';
// import logoDarkSm from '../img/logo-sm (2).png';
// import userF from '../img/user-1.jpg';
import { GlobalInfo } from '../pages/Dashboard';
import SideMenu from "./SideMenu";
import { faList, faUsers, faArrowAltCircleRight, faBullseye, faClock, faPlus, faListUl, faVectorSquare, faClockRotateLeft, faCalendarDay, faTableList, faPenClip, faTableCells, faArrowTrendUp, faCode, faBullhorn, faGavel } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function MenuPages() {
    // page header name display none
    const { menuDisplay, logoDisplay } = useContext(GlobalInfo);

    const todoMenuItems = [
        { id: 1, text: 'Open Tasks', link: '/opentask', icons: faClock },
        { id: 2, text: 'All Tasks', link: '/alltask', icons: faClock },

    ]

    const contactMenuItems = [
        { id: 1, text: 'Create Contact', link: '/createcontactPersonal', icons: faPlus },
        { id: 2, text: 'All Contacts', link: '/allcontacts', icons: faListUl },

    ]

    const leadsMenuItems = [
        { id: 1, text: 'Create Lead', link: '/leads', icons: faPlus },
        { id: 2, text: 'My Leads', link: '/MyLeads', icons: faVectorSquare },
        { id: 3, text: "Today's follow-ups", link: '/FollowUp', icons: faClock },
        { id: 4, text: 'Open Leads', link: '/OpenLead', icons: faBullseye },
        { id: 5, text: 'All Leads', link: '/AllLeads', icons: faListUl },
        { id: 6, text: 'Backlog(Pending)', link: '/BackLog', icons: faClockRotateLeft },
        { id: 7, text: 'Calendar', link: '/CalendarFull', icons: faCalendarDay },
    ]
    const opportunitiMenuItems = [
        { id: 1, text: 'Create Opportunity', link: '/Opportunities', icons: faPlus },
        { id: 2, text: 'My Opportunities', link: '/MyOpportunity', icons: faVectorSquare },
        { id: 3, text: "Today's follow-ups", link: '/OpportunityFollowUp', icons: faClock },
        { id: 4, text: "Open Opportunities", link: '/OpenOpportunity', icons: faBullseye },
        { id: 5, text: "All Opportunities", link: '/AllOpportunity', icons: faListUl },
        { id: 6, text: "Backlog(Pending)", link: '/OpportunityBacklog', icons: faClockRotateLeft },
        { id: 7, text: "Calendar", link: '/OpportunityCalendar', icons: faCalendarDay },
    ]
    const propertiesMenuItems = [
        { id: 1, text: 'Create Property', link: '/Properties', icons: faClock },
        { id: 2, text: 'My Properties', link: 'email-templates.html', icons: faVectorSquare },
        { id: 3, text: "Today's follow-ups", link: 'email-inbox.html', icons: faListUl },
        { id: 4, text: 'Available Properties', link: 'email-inbox.html', icons: faListUl },
        { id: 5, text: 'Follow-ups Properties', link: 'email-inbox.html', icons: faClock },
        { id: 6, text: 'Backlog(Pending)', link: 'email-inbox.html', icons: faClockRotateLeft },
    ]
    const projectsMenuItems = [
        { id: 1, text: 'Create Project', link: 'email-index.html', icons: faPenClip },
        { id: 2, text: 'Available Projects', link: 'email-templates.html', icons: faListUl },
        { id: 3, text: 'All Projects', link: 'email-inbox.html', icons: faListUl },
        { id: 3, text: 'RERA/HIRA Projects', link: 'email-inbox.html', icons: faGavel },
    ]

    const sitevisitsMenuItems = [
        { id: 1, text: 'Create Project', link: 'email-index.html' },
        { id: 2, text: 'Available Projects', link: 'email-templates.html' },
        { id: 3, text: 'All Projects', link: 'email-inbox.html' },
        { id: 3, text: 'RERA/HIRA Projects', link: 'email-inbox.html' },
    ]

    const templatesMenuItems = [
        { id: 1, text: 'Create Project', link: 'email-index.html' },
        { id: 2, text: 'Available Projects', link: 'email-templates.html' },
        { id: 3, text: 'All Projects', link: 'email-inbox.html' },
        { id: 3, text: 'RERA/HIRA Projects', link: 'email-inbox.html' },
    ]

    const campaignsMenuItems = [
        { id: 1, text: 'Create Project', link: 'email-index.html' },
        { id: 2, text: 'Available Projects', link: 'email-templates.html' },
        { id: 3, text: 'All Projects', link: 'email-inbox.html' },
        { id: 3, text: 'RERA/HIRA Projects', link: '/SideMenuBar' },
    ]

    return (

        <>
            <Link to="/" className="logo-box">
                {/* <!-- Light Brand Logo --> */}
                <div className="logo-light">
                    <img    src={process.env.PUBLIC_URL + '/img/logo-light.png'} className="logo-lg lg-logo-light" alt="Light logo" />
                    <img  src={process.env.PUBLIC_URL + '/img/logo-light.png'} className="logo-sm  " alt="Small logo" />
                </div>
                {/* <!-- Dark Brand Logo --> */}
                <div className="logo-dark">
                    <img src={process.env.PUBLIC_URL + '/img/logo-dark.png'} className="logo-lg dark:block side-menu-user" alt="Dark logo" style={{ display: menuDisplay }} />
                    <img src={process.env.PUBLIC_URL + '/img/logo-sm (2).png'} className="logo-sm company-logo" alt="Small logo" style={{ display: logoDisplay, maxWidth: '60%' }} />
                </div>
            </Link>
            {/* <!--- Menu --> */}
            <div className="all-menu-pages-area total-revenue">
                {/* <!-- User Box --> */}
                <div className="user-box relative text-center mt-5 side-menu-user" style={{ display: menuDisplay }}>
                    <img
                           src={process.env.PUBLIC_URL + '/img/user-4.jpg'}   
                        alt="User profile"
                        className="rounded-full h-14 w-14 p-1 border border-gray-300/30 mx-auto mb-3"
                    />
                    <div>
                        <button data-fc-type="dropdown" data-fc-placement="bottom" type="button"
                            className="dark:text-white user-name text-[15px] font-medium mb-1.5">Nowak Helme</button>
                        <div
                            className=" fc-dropdown-open:opacity-100 hidden opacity-0 w-40 z-50 transition-all duration-300 bg-white shadow-lg border rounded-lg p-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800">

                            {/* <!-- item--> */}
                            <Link className="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-primary dark:text-gray-400 hover:text-white dark:hover:text-white"
                                to="/">
                                <i data-lucide="user" className="w-4 h-4 me-2"></i>
                                <h1>My Account</h1>
                            </Link>

                            {/* <!-- item--> */}
                            <Link className="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-primary dark:text-gray-400 hover:text-white dark:hover:text-white"
                                to="/">
                                <i data-lucide="settings" className="w-4 h-4 me-2"></i>
                                <span>Settings</span>
                            </Link>

                            {/* <!-- item--> */}
                            <Link className="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-primary dark:text-gray-400 hover:text-white dark:hover:text-white"
                                to="/">
                                <i data-lucide="lock" className="w-4 h-4 me-2"></i>
                                <span>Lock Screen</span>
                            </Link>

                            {/* <!-- item--> */}
                            <Link className="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-primary dark:text-gray-400 hover:text-white dark:hover:text-white"
                                to="/">
                                <i data-lucide="log-out" className="w-4 h-4 me-2"></i>
                                <span>Logout</span>
                            </Link>
                        </div>
                    </div>

                    <p className="user-name text-sm mb-3">Admin Head</p>

                    <div className="flex justify-center gap-2 mb-4">
                        <Link to="/" className="user-name">
                            {/* <!-- <i className="mdi mdi-cog text-base"></i> --> */}
                            <i className="fa-solid fa-gear"></i>
                        </Link>

                        <Link to="/" className="user-name">
                            {/* <!-- <i className="mdi mdi-power text-base"></i> --> */}
                            <i className="fa-solid fa-power-off"></i>
                        </Link>
                    </div>
                </div>

                <ul className="menu all-menus " data-fc-type="accordion">
                    <li className="menu-title side-menu-user" style={{ display: menuDisplay }}>Navigation</li>

                    <li className="menu-item">
                        <Link to="/" className="menu-link">
                            <span className="">
                                {/* <!-- <i className="mdi mdi-view-dashboard-outline"></i> --> */}
                                {/* <i className="fa-solid fa-table-columns"></i> */}
                            </span>
                            <span className="menu-text side-menu-user" style={{ display: menuDisplay }}> Dashboard </span>
                        </Link>

                    </li>

                    {/* ALL PAGES START */}

                    <SideMenu
                        PagesName="To Do List"
                        menuList={todoMenuItems}
                        icons={faList}


                    />

                    <li className="menu-title side-menu-user" style={{ display: menuDisplay }}>Data Management</li>

                    <SideMenu
                        PagesName="Contacts"
                        menuList={contactMenuItems}
                        icons={faUsers}
                    />

                    <SideMenu
                        PagesName="Leads"
                        menuList={leadsMenuItems}
                        icons={faArrowAltCircleRight}
                    />
                    <SideMenu
                        PagesName="Opportunities"
                        menuList={opportunitiMenuItems}
                        icons={faBullseye}

                    />
                    <SideMenu
                        PagesName="Properties"
                        menuList={propertiesMenuItems}
                        icons={faTableList}
                    />
                    <SideMenu
                        PagesName="Projects"
                        menuList={projectsMenuItems}
                        icons={faTableCells}
                    />

                    <SideMenu
                        PagesName="Site Visits"
                        menuList={sitevisitsMenuItems}
                        icons={faArrowTrendUp}
                    />


                    <li className="menu-title side-menu-user" style={{ display: menuDisplay }}>Marketing Campaign</li>

                    <SideMenu
                        PagesName="Templates"
                        menuList={templatesMenuItems}
                        icons={faCode}
                    />
                    <SideMenu
                        PagesName="Campaigns"
                        menuList={campaignsMenuItems}
                        icons={faBullhorn}
                    />
                </ul>
            </div>
        </>
    );
}

export default MenuPages