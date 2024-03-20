import React  from 'react';
import Dropdown from "../../field/Dropdown";
import ContinueCancelNewBtn from '../../button/ContinueCancelNewBtn';
import PageHeading from '../../common/PageHeading';

function OpportunitiContactInfo({ onContinueClick }) {

    return (

        <>
            {/* <form action=""> */}
                    <PageHeading pageHeading="Give us customer information about opportunity" />
                    <div className="your-form-container">
                        <div className="input-dropdown">
                            <label className="label-name" > Folder </label> <Dropdown
                                dropBg="#ffffff"
                                dropWidth='100%;'
                                dropFont='11px'
                                dropPadding='10px 0px'
                                dropColor='#686868'
                                drodownWidth='100%'
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