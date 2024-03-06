import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { GoogleApiWrapper } from 'google-maps-react';
import { faUser, faPerson, faEarth, faLocationDot, faChartArea, faGear, faMapPin } from '@fortawesome/free-solid-svg-icons';
import Dropdown from "../../field/Dropdown";
import GoogleMaps from '../../map/GoogleMaps';
import FormValidation from '..//..//ChildComponents/FormValidation';

function CreatePropertiesLocation({ currentStep, onContinueClick }) {

   
    
    return (

        <>
            <form action="">
                <div className="create-lead-area pt-10">
                    <div className="stepper-wrapper">
                        <div className={`stepper-item completed ${currentStep >= 1 ? 'completed' : ''}`}>
                            <div className="step-counter">
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <div className="step-name ">Contact Information</div>
                        </div>
                        <div className={`stepper-item completed ${currentStep >= 2 ? 'completed' : ''}`}>
                            <div className="step-counter">
                                <FontAwesomeIcon icon={faPerson} />
                            </div>
                            <div className="step-name ">Basic Information</div>
                        </div>
                        <div className={`stepper-item completed ${currentStep >= 3 ? 'completed' : ''}`}>
                            <div className="step-counter">
                                <FontAwesomeIcon icon={faLocationDot} />
                            </div>
                            <div className="step-name font-bold">Location</div>
                        </div>
                        <div className={`stepper-item ${currentStep >= 4 ? 'completed' : ''}`}>
                            <div className="step-counter">
                                <FontAwesomeIcon icon={faChartArea} />
                            </div>
                            <div className="step-name">Area and pricing</div>
                        </div>
                        <div className={`stepper-item ${currentStep >= 5 ? 'completed' : ''}`}>
                            <div className="step-counter">
                                <FontAwesomeIcon icon={faGear} />
                            </div>
                            <div className="step-name">Other details</div>
                        </div>
                        <div className={`stepper-item ${currentStep >= 6 ? 'completed' : ''}`}>
                            <div className="step-counter">
                                <FontAwesomeIcon icon={faEarth} />
                            </div>
                            <div className="step-name">Save and publish</div>
                        </div>
                    </div>
                    <div className="form-heading">
                        <h3>Give us customer information about opportunity</h3>
                    </div>
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
                        {/* //selectedLocation={setSelectedLocation} */}

                        <div className='pb-4'>

                            <div className="input-dropdown ">
                                <label className="label-name" > Address</label> <Dropdown
                                    dropBg="#ffffff"
                                    dropWidth='100%'
                                    dropFont='11px'
                                    dropPadding='10px 0px'
                                    dropColor='#686868'
                                    drodownWidth='100%'
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
                                <label className="label-name" > Building / Tower / Project</label> <Dropdown
                                    dropBg="#ffffff"
                                    dropWidth='100%'
                                    dropFont='11px'
                                    dropPadding='10px 0px'
                                    dropColor='#686868'
                                    drodownWidth='100%'
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
                                <label className="label-name" > City</label> <Dropdown
                                    dropBg="#ffffff"
                                    dropWidth='100%'
                                    dropFont='11px'
                                    dropPadding='10px 0px'
                                    dropColor='#686868'
                                    drodownWidth='100%'
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
                                <label className="label-name" > Locality</label> <Dropdown
                                    dropBg="#ffffff"
                                    dropWidth='100%'
                                    dropFont='11px'
                                    dropPadding='10px 0px'
                                    dropColor='#686868'
                                    drodownWidth='100%'
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

                            <div className="form-control form-btn">
                                <label></label>
                                <button type="submit" className='continue-btn' onClick={onContinueClick}>CONTINUE</button>
                                <button type="button" className="cancle-btn">CANCEL</button>
                                {/* <button type="button" className="cancle-btn-Contact">
                                    <span>
                                        <FontAwesomeIcon icon={faUser} />
                                    </span>
                                    ADD NEW CONTACT</button> */}
                            </div>
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