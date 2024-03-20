import React from "react";
import UserContact from "../../common/UserContact";
import { faUser, faBullhorn, faSms, faEnvelope, faTrash, faFileImport} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AllLeadActionbtn(){

    return(
        <>
         <UserContact
                contactIcon={<FontAwesomeIcon className="pl-2" icon={faBullhorn} />}
                userName="Create Audience"
                userEmail="Marketing & Promotions."
            />
            <UserContact
                contactIcon={<FontAwesomeIcon className="pl-2" icon={faSms} />}
                userName="Send Group SMS"
                userEmail="Send sms to contact."
            />
            <UserContact
                contactIcon={<FontAwesomeIcon className="pl-2" icon={faEnvelope} />}
                userName="Send Group Email"
                userEmail="Send sms to contact."
            />
               <UserContact
                contactIcon={<FontAwesomeIcon className="pl-2" icon={faTrash} />}
                userName="Group Delete"
                userEmail="Delete your serach contact."
            />
              <UserContact
                contactIcon={<FontAwesomeIcon className="pl-2" icon={faUser} />}
                userName="Download"
                userEmail="Download your contact in execel."
            />
              <UserContact
                contactIcon={<FontAwesomeIcon className="pl-2" icon={faFileImport} />}
                userName="Import Leads"
                userEmail="Imports Leads..."
            />
           
        </>
    )
}
export default AllLeadActionbtn;