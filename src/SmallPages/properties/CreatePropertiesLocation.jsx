import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import Dropdown from "../../field/Dropdown";
import GoogleMaps from '../../map/GoogleMaps';
import FormValidation from '..//..//ChildComponents/FormValidation';
import PageHeading from '../../common/PageHeading';
import SubmitCancelBtn from '../../button/SubmitCancelBtn';
import createPropertyDrop from '../../js/DropdownVarible';

function CreatePropertiesLocation({ onContinueClick }) {

    return (

        <>
            <form action="">
                <div className="create-lead-area p-8">
                    <PageHeading pageHeading="Give us customer information about opportunity" />
                    <div className="your-form-container">



                        {/* <div className="relative w-full h-96 pb-4">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
                                frameBorder="0"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                            ></iframe>
                        </div> */}

                        <GoogleMaps  />   

                        <div className='pb-4'>
                            <div className="input-dropdown ">
                                <Dropdown {...createPropertyDrop[0]}
                                  labelName="Address"
                                    dropHeading="Select"
                                    dropOp1='Select'
                                    dropOp2='Sale'
                                    dropOp3='PG'
                                    dropOp4='Rent/Lease'
                                    dropOp5='Re-Development'
                                    dropOp6='Joint Ventures'
                                    dropOp7='Services'

                                />
                            </div>



                            <div className="input-dropdown">
                                <div></div>

                                <label className="label-name" > Lat And Long</label>
                                <label className="form-search !w-[4%] bg-[#efefef] !rounded-none text-center">
                                    <FontAwesomeIcon icon={faMapPin} />
                                </label>
                                <input
                                    type='text'
                                    className="form-search !w-[45%]"
                                />
                                <label className="form-search !w-[4%] bg-[#efefef] !rounded-none text-center">
                                    <FontAwesomeIcon icon={faMapPin} />
                                </label>


                                <input
                                    type="text"
                                    className="form-search !w-[45%]"
                                />
                            </div>

                            < FormValidation
                                FormOnSubmit="loginHandle"
                                labelName="Flat/Office/Unit No"
                                placeholder="Unit/Flat/Plot Number"
                                inputName="name"
                                
                            />

                            <div className="input-dropdown relative !pb-0 bottom-4">
                                <label className="label-name" ></label>
                                <div className='text-[#bbb8b8]'>Maximum 20 character allowed</div>
                            </div>


                            < FormValidation
                                FormOnSubmit="loginHandle"
                                labelName="Property/Developer Name"
                                placeholder=""
                                inputName="user name"
                            />

                            <div className="input-dropdown relative !pb-0 bottom-4">
                                <label className="label-name" ></label>
                                <div className='text-[#bbb8b8]'>Maximum 50 character allowed</div>
                            </div>
                            <div className="input-dropdown ">
                                <Dropdown {...createPropertyDrop[0]}
                                   labelName="Building / Tower / Project"
                                    dropHeading="Select"
                                    dropOp1='Select'
                                    dropOp2='Sale'
                                    dropOp3='PG'
                                    dropOp4='Rent/Lease'
                                    dropOp5='Re-Development'
                                    dropOp6='Joint Ventures'
                                    dropOp7='Services'

                                />
                            </div>
                            <div className="input-dropdown !pb-0 relative bottom-4">
                                <label className="label-name" ></label>
                                <div className='text-[#bbb8b8]'>Maximum 40 character allowed</div>
                            </div>

                            < FormValidation
                                FormOnSubmit="loginHandle"
                                labelName="Street"
                                placeholder=""
                                inputName="user name"
                            />

                            <div className="input-dropdown !pb-0 relative bottom-4">
                                <label className="label-name" ></label>
                                <div className='text-[#bbb8b8]'>Maximum 50 character allowed</div>
                            </div>

                            < FormValidation
                                FormOnSubmit="loginHandle"
                                labelName="Landmark"
                                placeholder=""
                                inputName="user name"
                            />

                            <div className="input-dropdown !pb-0 relative bottom-4">
                                <label className="label-name" ></label>
                                <div className='text-[#bbb8b8]'>Maximum 100 character allowed</div>
                            </div>

                            < FormValidation
                                FormOnSubmit="loginHandle"
                                labelName="PIn Code"
                                placeholder=""
                                inputName="user name"
                            />
                             <div className="input-dropdown ">
                                <Dropdown {...createPropertyDrop[0]}
                                  labelName="City"
                                    dropHeading="Select"
                                    dropOp1='Select'
                                    dropOp2='Sale'
                                    dropOp3='PG'
                                    dropOp4='Rent/Lease'
                                    dropOp5='Re-Development'
                                    dropOp6='Joint Ventures'
                                    dropOp7='Services'

                                />
                            </div>
                            <div className="input-dropdown ">
                                <Dropdown {...createPropertyDrop[0]}
                                labelName="Locality"
                                    dropHeading="Select"
                                    dropOp1='Select'
                                    dropOp2='Sale'
                                    dropOp3='PG'
                                    dropOp4='Rent/Lease'
                                    dropOp5='Re-Development'
                                    dropOp6='Joint Ventures'
                                    dropOp7='Services'

                                />
                            </div>

                            <SubmitCancelBtn submitName="CONTINUE" cancelName="CANCEL" onContinueClick={onContinueClick} />
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
export default CreatePropertiesLocation;

// export default GoogleApiWrapper({
//     apiKey: ("YOUR_GOOGLE_API_KEY_GOES_HERE")
// })(CreatePropertiesLocation);