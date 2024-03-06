import React from 'react';
import { faUser, faBullhorn, faSms, faEnvelope, faTrash, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserContact from "../common/UserContact";

function NavActionComponent(props) {


    const { handleToggleaction, handleToggleAudience, handleToggleGroupDelete, handleToggleGroupEmail, handleToggleExportContact } = props;
    return (
        <>
            {/* {isDropdownOpen && ( */}
            <div className="small-nav-dropdown">
                <section onClick={(e) => { handleToggleAudience(); }}>
                    <UserContact
                        contactIcon={<FontAwesomeIcon className="pl-2" icon={faBullhorn} />}
                        userName="Create Audience"
                        userEmail="Marketing & Promotions."
                    // onClickAction={handleActionClick}
                    />
                </section>

                <section onClick={(e) => { handleToggleaction(); }}>
                    <UserContact
                        contactIcon={<FontAwesomeIcon className="pl-2" icon={faSms} />}
                        userName="Send Group SMS"
                        userEmail="Send sms to contact."
                    />
                </section>

                <section onClick={(e) => { handleToggleGroupEmail(); }}>
                    <UserContact
                        contactIcon={<FontAwesomeIcon className="pl-2" icon={faEnvelope} />}
                        userName="Send Group Email"
                        userEmail="Send sms to contact."
                    />
                </section>
                <section onClick={(e) => { handleToggleGroupDelete(); }}>
                    <UserContact
                        contactIcon={<FontAwesomeIcon className="pl-2" icon={faTrash} />}
                        userName="Group Delete"
                        userEmail="Delete your serach contact."
                    />
                </section>

                <UserContact
                    contactIcon={<FontAwesomeIcon className="pl-2" icon={faUser} />}
                    userName="Download"
                    userEmail="Download your contact in execel."
                />

                <section onClick={(e) => { handleToggleExportContact(); }}>
                    <UserContact
                        contactIcon={<FontAwesomeIcon className="pl-2" icon={faDownload} />}
                        userName="Export Contacts"
                        userEmail="Import contacts sheets..."
                    />
                </section>
            </div>
            {/* )} */}
        </>
    );
}

export default NavActionComponent;