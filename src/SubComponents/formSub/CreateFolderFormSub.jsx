import React, { useState } from "react";
// import UserContactInfoSub from '../contactSub/UserContactInfoSub';
import ChildNavSub from "../../childNavbar/ChildNavSub";
import FormHeading from "./FormHeading";
import FormValidation from "../../ChildComponents/FormValidation";
import Dropdown from "../../field/Dropdown";
import CheckBoxBtn from "../../button/CheckBoxBtn";
import GroupTransferSub from "../../childNavbar/GroupTransferSub";

function CreateFolderFormSub(Props, timeDuration, index) {


    const [isContentVisible, setIsContentVisible] = useState(true);
    const [isGroupTransferSubVisible, setGroupTransferSubVisible] = useState(false);
    const [isCreatePloatAreaVisible, setCreatePloatAreaVisible] = useState(true);

    const handleToggleContentVisibility = () => {
        setIsContentVisible(!isContentVisible);
    };

    const handleSubmit = () => {
        // Handle submit logic here
        // ...

        // Toggle the visibility of create-ploat-area and GroupTransferSub
        setCreatePloatAreaVisible(!isCreatePloatAreaVisible);
        setGroupTransferSubVisible(!isGroupTransferSubVisible);
    };


    // const [dashboardData, setDashboardData] = useState({
    //     dashboard: {
    //         cards: [],
    //         timeDurations: [],
    //         funnelCharts: [],
    //         rockLineChart: [],
    //         progressBar: [],
    //         contact: {
    //             UserContact: [],
    //         },
    //     },
    // });

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch("http://localhost:3001/dashboard");
    //             const data = await response.json();
    //             setDashboardData(data);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    // const { UserContact = [] } = dashboardData.dashboard.contact;

    return (

        <>

            {/* history.push('/'); */}
            <div className="todolist-all-area ">
                {/* <UserContactInfoSub
                    todoHeading="My Leads"
                /> */}

                <div className="todolist-second-area">
                    <div className="todolist-links">
                        <ChildNavSub handleDropdownToggleTransfer={handleToggleContentVisibility} />
                        <div className="all-contact-content p-12" style={{ display: isContentVisible ? 'block' : 'none' }}>
                            <div className={isCreatePloatAreaVisible ? "create-ploat-area" : "create-ploat-area hidden"}>

                                <FormHeading
                                    headingForm="Create Folder For"
                                    headingItalic="Plots"
                                    headingTotal="Total Records:"
                                    headingValue="18"
                                />
                                <div className="p-4">
                                    <FormValidation FormOnSubmit={handleSubmit} labelName="Folder Name" inputName="folder name" />
                                    <div className="input-dropdown">
                                        <label className="label-name" > Order Number</label>
                                        <input type="number"
                                            id="email"
                                            name="email"
                                            required
                                            className="form-search !w-full"
                                            placeholder="0" />

                                    </div>
                                    <div className="input-dropdown">
                                        <label className="label-name" > Permission</label> <Dropdown

                                            dropBg="#ffffff"
                                            dropWidth='100%'
                                            dropFont='11px'
                                            dropPadding='17px 0px'
                                            dropColor='#686868'
                                            drodownWidth='100%'
                                            dropHeading="Select"
                                            dropOp1='Select'
                                            dropOp2='Aman Singh Nawat'
                                            dropOp3='Amar'
                                            dropOp4='Ankit'
                                            dropOp5='Khushi'
                                        />
                                    </div>

                                    <div className="input-dropdown">
                                        <label className="label-name" > Permission</label>
                                        <div className="!w-full">
                                            <CheckBoxBtn
                                                label="Only my assign data"
                                                labelClass="!w-full"
                                            />
                                            <CheckBoxBtn

                                                label="Create smart folder"
                                                labelClass="!w-full"
                                            />
                                        </div>
                                    </div>



                                    <div className="form-control form-btn">
                                        <label></label>
                                        <button type="submit" onClick={handleSubmit}>SUBMIT</button>
                                        <button type="button" className="cancle-btn">CANCEL</button>
                                    </div>
                                </div>
                            </div>
                            {isGroupTransferSubVisible && <GroupTransferSub labelTransfer="Lead Transfer" />} {/* Conditionally render GroupTransferSub */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CreateFolderFormSub;