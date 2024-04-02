import React  from 'react';
import Dropdown from "../../field/Dropdown";
import ContinueCancelNewBtn from '../../button/ContinueCancelNewBtn';
import PageHeading from '../../common/PageHeading';
import createPropertyDrop from '../../js/DropdownVarible';

function OpportunitiContactInfo({ onContinueClick }) {

    return (

        <>
            {/* <form action=""> */}
                    <PageHeading pageHeading="Give us customer information about opportunity" />
                    <div className="your-form-container">
                        <div className="input-dropdown">
                            <Dropdown {...createPropertyDrop[0]}
                           labelName=" Folder"
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
export default OpportunitiContactInfo;