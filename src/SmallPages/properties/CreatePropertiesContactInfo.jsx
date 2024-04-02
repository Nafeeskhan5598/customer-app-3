import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faPerson, faEarth, faLocationDot, faChartArea, faGear } from '@fortawesome/free-solid-svg-icons';
import Dropdown from "../../field/Dropdown";
import PageHeading from '../../common/PageHeading';
import ContinueCancelNewBtn from '../../button/ContinueCancelNewBtn';
import createPropertyDrop from '../../js/DropdownVarible';
// import ProgressStepsForm from '../../progress/ProgressStepsForm';
// import { For } from "million/react";

function CreatePropertiesContactInfo({ onContinueClick }) {

    return (

        <>
       
                    <PageHeading pageHeading="Give us customer information about Owner Or Landlord" />

                    <div className="your-form-container">
                        <div className="input-dropdown">
                            <Dropdown {...createPropertyDrop[0]}
                            labelName="Owner / Landload"
                                dropHeading="Select"
                                dropOp1='Select'
                                dropSearch="search"
                                dropOp2="text-2"
                                dropOp3="text-3"
                                dropOp4="text-4"
                            />
                        </div>
                        <ContinueCancelNewBtn onContinueClick={onContinueClick} />

                    </div>
                {/* </div> */}
            {/* </form> */}
        </>
    )
}
export default CreatePropertiesContactInfo;