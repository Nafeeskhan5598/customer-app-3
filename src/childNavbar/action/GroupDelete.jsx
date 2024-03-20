import React from "react";
import FormHeading from "../../SubComponents/formSub/FormHeading";
// import FormValidation from "../../ChildComponents/FormValidation";
// import Dropdown from "../../field/Dropdown";
// import SearchBar from "../../field/SearchBar";

function GroupDelete(props) {
    return (

        <>
            <FormHeading

                headingForm={props.HeadingForm}
                headingItalic={props.HeadingItalic}
                headingTotal={props.HeadingTotal}
                headingValue={props.HeadingValue}



            />
            <h5 className="text-center text-4xl text-red-500 relative -top-8">7676</h5>


            <div className="w-1/2 pb-4 m-auto">
            <input type="text" className="open-task-search !w-full"  />

            </div>

            {/* <div className="p-4">
                < FormValidation
                    FormOnSubmit="loginHandle"
                    labelName="Name"
                    placeholder=""
                    inputName="user name"

                />


                <div className="input-dropdown ">
                    <label className="label-name" >Type</label> <Dropdown
                        dropBg="#ffffff"
                        dropWidth='100%'
                        dropFont='11px'
                        dropPadding='10px 0px'
                        dropColor='#686868'
                        drodownWidth='100%'
                        dropHeading="Select"
                        dropOp1='Select'
                        dropOp2='Email'
                        dropOp3='SMS'
                        dropOp4='IVR'
                        dropOp5='Whatsapp'
                    // dropOp6='Joint Ventures'
                    // dropOp7='Services'

                    />
                </div>

                <div className="input-dropdown ">
                    <label className="label-name" > Tamplate</label> <Dropdown
                        dropBg="#ffffff"
                        dropWidth='100%'
                        dropFont='11px'
                        dropPadding='10px 0px'
                        dropColor='#686868'
                        drodownWidth='100%'
                        dropHeading="Select"
                        dropOp1='Select'
                    // dropOp2='On demand'
                    // dropOp3='Daily'
                    // dropOp4='Weekly'
                    // dropOp5='Monthly'
                    // dropOp6='Joint Ventures'
                    // dropOp7='Services'

                    />
                </div>

                <div className="input-dropdown ">
                    <label className="label-name" > Schedule</label> <Dropdown
                        dropBg="#ffffff"
                        dropWidth='100%'
                        dropFont='11px'
                        dropPadding='10px 0px'
                        dropColor='#686868'
                        drodownWidth='100%'
                        dropHeading="Select"
                        dropOp1='Select'
                        dropOp2='On demand'
                        dropOp3='Daily'
                        dropOp4='Weekly'
                        dropOp5='Monthly'

                    />
                </div> */}

            <div className="form-control form-btn">
                <label></label>
                <button type="submit" className='continue-btn' >CONTINUE</button>
                <button type="button" className="cancle-btn">CANCEL</button>
            </div>

        {/* </div > */}

        </>
    )
}

export default GroupDelete;