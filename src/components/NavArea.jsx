import React, { useEffect, useState, useContext, useCallback } from 'react';
import { GlobalInfo } from '../pages/Dashboard';
// import userS from '${process.env.PUBLIC_URL}/img/user-11.jpg';
// import userT from '/img/user-2.jpg';
// import userF from '/img/user-3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faLock, faRightFromBracket, faBars, faMagnifyingGlass, faMoon, faSun, faBell, faAngleDown, faGear } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function NavArea() {
    const { toggleMenuWidth } = useContext(GlobalInfo);

    const handleDarkModeToggle = useCallback(() => {
        const body = document.body;
        const moonIcon = document.querySelector('.fa-moon');
        const sunIcon = document.querySelector('.fa-sun');

        if (body) {
            body.classList.toggle('dark');
            moonIcon.style.display = body.classList.contains('dark') ? 'none' : 'block';
            sunIcon.style.display = body.classList.contains('dark') ? 'block' : 'none';

            if (body.classList.contains('dark')) {
                localStorage.setItem('dark-mode', 'enabled');
            } else {
                localStorage.setItem('dark-mode', 'disabled');
            }

            // Toggle background color for other elements
            const appHeader = document.querySelector('.app-header');
            const pageContent = document.querySelector('.page-content');
            const totalRevenue = document.querySelector(".total-revenue");
            const projectFirstRow = document.querySelector(".project-first");

            if (appHeader && pageContent && totalRevenue && projectFirstRow) {
                appHeader.classList.toggle('dark');
                pageContent.classList.toggle('dark-background');
                totalRevenue.classList.toggle('dark');
                projectFirstRow.classList.toggle("dark:hover:bg-rgb(55 65 81 / .4)");
            }
        }
    }, []);

    useEffect(() => {
        const toggleButton = document.getElementById('dark-mode-toggle');

        const setupDarkModeToggle = () => {
            if (toggleButton) {
                toggleButton.addEventListener('click', handleDarkModeToggle);
            }
        };

        // Check if the DOM is ready before setting up the event listener
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            setupDarkModeToggle();
        } else {
            document.addEventListener('DOMContentLoaded', setupDarkModeToggle);
        }

        // Cleanup function to remove the event listener when the component is unmounted
        return () => {
            if (toggleButton) {
                toggleButton.removeEventListener('click', handleDarkModeToggle);
            }
        };
    }, [handleDarkModeToggle]);

    // Rest of your component code


    // bell button
    const [showNotification, setShowNotification] = useState(false);

    const handleToggleNotification = () => {
        setShowNotification(!showNotification);

    };

    // Profile
    const [showProfile, setShowProfile] = useState(false);

    const handleToggleProfile = () => {
        setShowProfile(!showProfile);
    };

    return (

        <>
            <div className="app-header">
                <div className="flex gap-3 items-center py-8 px-6 header-nav  ">
                    {/* <!--  Brand Logo  --> */}
                    <Link to="/" className="logo-box">
                        {/* <!--  Light Brand Logo  --> */}
                        {/* <!-- <div  className="logo-light">
                            <img src="assets/images/logo-light.png"  className="logo-lg" alt="Light logo">
                            <img src="assets/images/logo-sm.png"  className="logo-sm" alt="Small logo">
                        </div> --> */}

                        {/* <!--  Dark Brand Logo  --> */}
                        {/* <!-- <div  className="logo-dark">
                            <img src="assets/images/logo-dark.png"  className="logo-lg" alt="Dark logo">
                            <img src="assets/images/logo-sm.png"  className="logo-sm" alt="Small logo">
                        </div> --> */}
                    </Link>

                    {/* <!-- Sidenav Menu Toggle Button  --> */}
                    <button id="button-toggle-menu" className="nav-link p-2" onClick={toggleMenuWidth}>
                        <span className="sr-only">Menu Toggle Button</span>
                        <span className="flex items-center justify-center h-6 w-6 toggle-icon">
                            <FontAwesomeIcon icon={faBars} />
                        </span>
                    </button>

                    {/* <!-- Page Title  --> */}
                    <div className="me-auto">
                        <div className="md:flex hidden">
                            <h4 className="page-title text-lg font-bold">Dashboard</h4>
                        </div>
                    </div>

                    <div className="md:flex hidden items-center relative">
                        <div
                            className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none toggle-icon" >
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                        <input type="search"
                            className="form-input pe-8 ps-4 py-1.5 rounded-full bg-gray-500/10 border focus:border-transparent placeholder:opacity-60"
                            placeholder="Search..." />
                    </div>

                    {/* <!--  Light/Dark Toggle Button --> */}
                    <div className="flex">
                        <button id="dark-mode-toggle" type="button" className="nav-link p-2">
                            <span className="sr-only">Light/Dark Mode</span>
                            <span className="flex items-center justify-center h-6 w-6 toggle-icon">
                                <FontAwesomeIcon className="dark:hidden hover:text-[#71b6f9]" icon={faMoon} />
                                <FontAwesomeIcon className=" hidden dark:block" icon={faSun} />
                            </span>
                        </button>
                    </div>

                    {/* <!-- Notification Bell Button  --> */}

                    <div className="relative flex notification">
                        <button data-fc-type="dropdown" data-fc-placement="bottom-end" type="button"
                            className="nav-link p-2 md:flex hidden" onClick={handleToggleNotification}>
                            <span className="sr-only">View notifications</span>
                            <span className="flex items-center justify-center h-6 w-6 toggle-icon" id="bell-icon">
                                <FontAwesomeIcon className="fa-regular fa-bell hover:text-[#71b6f9]" icon={faBell} />

                            </span>


                            <span
                                className="relative -top-2 -left-4
                                 end-1.5 w-4 h-4 flex items-center justify-center rounded-full bg-red-500  text-white  font-medium text-[10px]">9</span>

                        </button>
                        <div
                            className={`total-revenue notification-massage absolute left-[-18rem] bg-white top-[3rem] fc-dropdown fc-dropdown-open:opacity-100 ${showNotification ? 'block' : 'hidden'
                                } w-80 z-50 transition-[margin,opacity] duration-300 dark:bg-black shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg`}
                        >
                            <div className="p-4">

                                <div className="flex items-center justify-between">
                                    <h6 className="text-sm"> Notification</h6>
                                    <Link to="/" className="text-gray-500">
                                        <small id="clear-all-link" className="card-title">Clear All</small>
                                    </Link>
                                </div>
                            </div>

                            <div className="p-4 h-80" data-simplebar>
                                <h5 className="text-xs text-gray-500 dark:text-gray-300 mb-2">Today</h5>

                                <Link to="/" className="block mb-4">
                                    <div className="card-body">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <div
                                                    className="flex justify-center items-center h-9 w-9 rounded-full bg text-white bg-primary">
                                                    <img
                                                        src={process.env.PUBLIC_URL + '/img/user-2.jpg'}
                                                        alt="img"
                                                        className="rounded-full"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-grow truncate ms-2">
                                                <h5 className="text-sm font-semibold  mb-1">Datacorp <small
                                                    className="font-normal text-gray-500 ms-1">1 min ago</small>
                                                </h5>
                                                <small className="noti-item-subtitle text-muted">Caleb Flakelar
                                                    commented on
                                                    Admin</small>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                <Link to="/" className="block mb-4">
                                    <div className="card-body">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <div
                                                    className="flex justify-center items-center h-9 w-9 rounded-full bg-info text-white">
                                                    <img className="rounded-full" src={process.env.PUBLIC_URL + '/img/user-3.jpg'} alt="" />
                                                </div>
                                            </div>
                                            <div className="flex-grow truncate ms-2">
                                                <h5 className="text-sm font-semibold mb-1">Admin <small
                                                    className="font-normal text-gray-500 ms-1">1 hr ago</small></h5>
                                                <small className="noti-item-subtitle text-muted">New user
                                                    registered</small>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                <Link to="/" className="block mb-4">
                                    <div className="card-body">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <img src={process.env.PUBLIC_URL + '/img/user-5.jpg'} className="rounded-full h-9 w-9" alt="" />
                                            </div>
                                            <div className="flex-grow truncate ms-2">
                                                <h5 className="text-sm font-semibold mb-1">Cristina Pride <small
                                                    className="font-normal text-gray-500 ms-1">1 day ago</small>
                                                </h5>
                                                <small className="noti-item-subtitle text-muted">Hi, How are you? What about our next meeting</small>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                <h5 className="text-xs text-gray-500 mb-2">Yesterday</h5>

                                <Link to="/" className="block mb-4">
                                    <div className="card-body">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <div
                                                    className="flex justifyer items-center h-9 w-9 rounded-full bg-primary text-white">
                                                    {/* <i className="mdi mdi-account-plus text-lg"></i> */}
                                                    <img className="rounded-full" src={process.env.PUBLIC_URL + '/img/user-4.jpg'} alt="" />
                                                </div>
                                            </div>
                                            <div className="flex-grow truncate ms-2">
                                                <h5 className="text-sm font-semibold mb-1">Datacorp</h5>
                                                <small className="noti-item-subtitle text-muted">Caleb Flakelar
                                                    commented on
                                                    Admin</small>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                <Link to="/"
                                    className="p-2 border-t border-dashed border-gray-200 dark:border-gray-700 block text-center text-primary underline font-semibold">
                                    View All
                                </Link>

                            </div>
                        </div>

                        {/* <!-- Profile Dropdown Button  --> */}
                        <div className="relative md:flex hidden">
                            <button data-fc-type="dropdown" data-fc-placement="bottom-end" type="button"
                                id="user-profile" className="nav-link flex items-center" onClick={handleToggleProfile}>
                                <img
                                    src={process.env.PUBLIC_URL + '/img/user-4.jpg'}
                                    alt='User'
                                    className="rounded-full h-8 w-8 "
                                />
                                <span className="text-sm mx-2 toggle-icon hover:text-[#71b6f9]">Nowak</span>
                                <FontAwesomeIcon icon={faAngleDown} className="text-xs  toggle-icon hover:text-[#71b6f9]" />

                            </button>
                            <div
                                className={`total-revenue user-profile-id bg-white absolute fc-dropdown fc-dropdown-open:opacity-100 -left-4 ${showProfile ? 'block' : 'hidden'
                                    } w-44 z-50 top-12 transition-[margin,opacity] duration-300 shadow-lg border rounded py-2 border-gray-200 dark:border-gray-700 dark:bg-black`}
                            >
                                <h6 className="py-2 px-5">Welcome !</h6>
                                <Link className="hover:text-black gap-1 flex items-center py-2 px-5 text-sm hover:bg-gray-100"
                                    to="/">
                                    <FontAwesomeIcon icon={faUser} />
                                    <span>My Account</span>
                                </Link>


                                <Link className="flex items-center gap-1 py-2 px-5 text-sm  hover:text-black hover:bg-gray-100  dark:hover:text-black"
                                    to="/">
                                    <FontAwesomeIcon icon={faCog} />
                                    <span>Settings</span>
                                </Link>
                                <Link className="flex items-center gap-1 py-2 px-5 text-sm  hover:text-black hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                    to="/">
                                    <FontAwesomeIcon icon={faLock} />
                                    <span>Lock Screen</span>
                                </Link>
                                <hr className="my-2 -mx-2 border-gray-200 dark:border-gray-700" />
                                <Link className="flex items-center py-2 gap-1 px-5 text-sm hover:text-black  hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                    to="/">
                                    <FontAwesomeIcon icon={faRightFromBracket} />
                                    <span>Logout</span>
                                </Link>
                            </div>
                        </div>

                        {/* <!-- Customization Button   --> */}
                        <div className="flex">
                            <button type="button" className="nav-link p-2" data-fc-type="offcanvas"
                                data-fc-scroll="true">
                                <span className="sr-only">Customization Button</span>
                                <span className="flex items-center justify-center h-6 w-6 toggle-icon hover:text-[#71b6f9] animate-spin">
                                    {/* <i className="fa-solid fa-gear dark:hidden"></i> */}
                                    <FontAwesomeIcon icon={faGear} />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default NavArea;