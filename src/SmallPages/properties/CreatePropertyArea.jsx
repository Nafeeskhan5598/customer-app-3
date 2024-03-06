import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { GoogleApiWrapper } from 'google-maps-react';
import { faUser, faPerson, faEarth, faLocationDot, faChartArea, faGear, faIndianRupeeSign, faCalendarWeek, faBars, faLock, faCalendar, faPercent } from '@fortawesome/free-solid-svg-icons';
import Dropdown from "../../field/Dropdown";
// import GoogleMaps from '../../map/GoogleMaps';
// import FormValidation from '..//..//ChildComponents/FormValidation';
import CheckRectangle from '../../button/CheckRectangle';
import TowInput from '../../field/TowInput';

function CreatePropertyArea({ currentStep, onContinueClick }) {



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
                            <div className="step-name ">Location</div>
                        </div>
                        <div className={`stepper-item completed ${currentStep >= 4 ? 'completed' : ''}`}>
                            <div className="step-counter">
                                <FontAwesomeIcon icon={faChartArea} />
                            </div>
                            <div className="step-name font-bold">Area and pricing</div>
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
                        <h3>Give us some information about Area</h3>
                    </div>
                    <div className="your-form-container">
                        <div className='pb-4'>
                            <div className="input-dropdown">
                                <label className="label-name" > Area</label>
                                <div className='flex w-[100%] justify-between'>
                                    <div className='w-[60%] flex '>
                                        <label className="form-search !w-[8%] bg-[#efefef] !rounded-none text-center">
                                            <FontAwesomeIcon icon={faChartArea} />
                                        </label>
                                        <input
                                            type='text'
                                            className="form-search !w-[96%]"
                                        />
                                    </div>
                                    <div className='w-[30%]'>
                                        <label className=" !w-[48%] !rounded-none text-center">
                                            <Dropdown
                                                dropBg="#ffffff"
                                                dropWidth='100%'
                                                dropFont='11px'
                                                dropPadding='10px 0px'
                                                dropColor='#686868'
                                                drodownWidth='100%'
                                                dropHeading="Select"
                                                dropOp1='Select'
                                                dropOp2='sQ.Ft'
                                                dropOp3='Sq.Meter'
                                                dropOp4='grounds'
                                                dropOp5='Ankadam'
                                                dropOp6='Rood'
                                                dropOp7='Chataks'
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="input-dropdown">
                                <label className="label-name" >Built-Up Area</label>
                                <div className='flex w-[100%] justify-between'>
                                    <div className='w-[60%] flex '>
                                        <label className="form-search !w-[8%] bg-[#efefef] !rounded-none text-center">
                                            <FontAwesomeIcon icon={faChartArea} />
                                        </label>
                                        <input
                                            type='text'
                                            className="form-search !w-[96%]"
                                        />
                                    </div>
                                    <div className='w-[30%]'>
                                        <label className=" !w-[48%] !rounded-none text-center">
                                            <Dropdown
                                                dropBg="#ffffff"
                                                dropWidth='100%'
                                                dropFont='11px'
                                                dropPadding='10px 0px'
                                                dropColor='#686868'
                                                drodownWidth='100%'
                                                dropHeading="Select"
                                                dropOp1='Select'
                                                dropOp2='sQ.Ft'
                                                dropOp3='Sq.Meter'
                                                dropOp4='grounds'
                                                dropOp5='Ankadam'
                                                dropOp6='Rood'
                                                dropOp7='Chataks'
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="input-dropdown">
                                <label className="label-name" > Carpet Area</label>
                                <div className='flex w-[100%] justify-between'>
                                    <div className='w-[60%] flex '>
                                        <label className="form-search !w-[8%] bg-[#efefef] !rounded-none text-center">
                                            <FontAwesomeIcon icon={faChartArea} />
                                        </label>
                                        <input
                                            type='text'
                                            className="form-search !w-[96%]"
                                        />
                                    </div>
                                    <div className='w-[30%]'>
                                        <label className=" !w-[48%] !rounded-none text-center">
                                            <Dropdown
                                                dropBg="#ffffff"
                                                dropWidth='100%'
                                                dropFont='11px'
                                                dropPadding='10px 0px'
                                                dropColor='#686868'
                                                drodownWidth='100%'
                                                dropHeading="Select"
                                                dropOp1='Select'
                                                dropOp2='sQ.Ft'
                                                dropOp3='Sq.Meter'
                                                dropOp4='grounds'
                                                dropOp5='Ankadam'
                                                dropOp6='Rood'
                                                dropOp7='Chataks'
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="input-dropdown">
                                <label className="label-name" > Terrece Area</label>
                                <div className='flex w-[100%] justify-between'>
                                    <div className='w-[60%] flex '>
                                        <label className="form-search !w-[8%] bg-[#efefef] !rounded-none text-center">
                                            <FontAwesomeIcon icon={faChartArea} />
                                        </label>
                                        <input
                                            type='text'
                                            className="form-search !w-[96%]"
                                        />
                                    </div>
                                    <div className='w-[30%]'>
                                        <label className=" !w-[48%] !rounded-none text-center">
                                            <Dropdown
                                                dropBg="#ffffff"
                                                dropWidth='100%'
                                                dropFont='11px'
                                                dropPadding='10px 0px'
                                                dropColor='#686868'
                                                drodownWidth='100%'
                                                dropHeading="Select"
                                                dropOp1='Select'
                                                dropOp2='sQ.Ft'
                                                dropOp3='Sq.Meter'
                                                dropOp4='grounds'
                                                dropOp5='Ankadam'
                                                dropOp6='Rood'
                                                dropOp7='Chataks'
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="input-dropdown">
                                <label className="label-name" >Area Range</label>
                                <div className='flex w-[100%] justify-between'>
                                    <div className='w-[60%] flex '>
                                        <label className="form-search !w-[8%] bg-[#efefef] !rounded-none text-center">
                                            <FontAwesomeIcon icon={faChartArea} />
                                        </label>
                                        <input
                                            type='text'
                                            className="form-search !w-[43%]"
                                        />


                                        <label className="form-search !w-[8%] bg-[#efefef] !rounded-none text-center">
                                            <FontAwesomeIcon icon={faChartArea} />
                                        </label>
                                        <input
                                            type='text'
                                            className="form-search !w-[43%]"
                                        />
                                    </div>
                                    <div className='w-[30%]'>
                                        <label className=" !w-[48%] !rounded-none text-center">
                                            <Dropdown
                                                dropBg="#ffffff"
                                                dropWidth='100%'
                                                dropFont='11px'
                                                dropPadding='10px 0px'
                                                dropColor='#686868'
                                                drodownWidth='100%'
                                                dropHeading="Select"
                                                dropOp1='Select'
                                                dropOp2='sQ.Ft'
                                                dropOp3='Sq.Meter'
                                                dropOp4='grounds'
                                                dropOp5='Ankadam'
                                                dropOp6='Rood'
                                                dropOp7='Chataks'
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="input-dropdown">
                                <label className="label-name" >Plot Area</label>
                                <div className='flex w-[100%] justify-between'>
                                    <div className='w-[60%] flex '>
                                        <label className="form-search !w-[8%] bg-[#efefef] !rounded-none text-center">
                                            <FontAwesomeIcon icon={faChartArea} />
                                        </label>
                                        <input
                                            type='text'
                                            className="form-search !w-[96%]"
                                        />
                                    </div>
                                    <div className='w-[30%]'>
                                        <label className=" !w-[48%] !rounded-none text-center">
                                            <Dropdown
                                                dropBg="#ffffff"
                                                dropWidth='100%'
                                                dropFont='11px'
                                                dropPadding='10px 0px'
                                                dropColor='#686868'
                                                drodownWidth='100%'
                                                dropHeading="Select"
                                                dropOp1='Select'
                                                dropOp2='sQ.Ft'
                                                dropOp3='Sq.Meter'
                                                dropOp4='grounds'
                                                dropOp5='Ankadam'
                                                dropOp6='Rood'
                                                dropOp7='Chataks'
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="input-dropdown">
                                <label className="label-name" >Plot Dimension</label>
                                <div className='flex w-[100%] '>
                                    <div className='w-[65%] flex '>
                                        <label className="form-search !w-[8%] bg-[#efefef] !rounded-none text-center">
                                            <FontAwesomeIcon icon={faChartArea} />
                                        </label>
                                        <input
                                            type='number'
                                            className="form-search !w-[96%]"
                                            placeholder='Length'
                                        />
                                    </div>
                                    <div className='w-[65%] flex'>
                                        <label className="form-search !w-[8%] bg-[#efefef] !rounded-none text-center">    <FontAwesomeIcon icon={faChartArea} /></label>
                                        <label className=" !w-[100%] !rounded-none text-center">
                                            <input
                                                type='number'
                                                className="form-search !w-[100%]"
                                                placeholder='Width'
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>



                            <div className="input-dropdown">
                                <label className="label-name" >Plot Dimension</label>
                                <div className='flex w-[100%] '>
                                    <div className='w-[33%] flex '>
                                        <label className="form-search !w-[15%] bg-[#efefef] !rounded-none text-center">
                                            <FontAwesomeIcon icon={faChartArea} />
                                        </label>
                                        <input
                                            type='number'
                                            className="form-search !w-[100%]"
                                            placeholder='Height'
                                        />
                                    </div>
                                    <div className='w-[33%] flex'>
                                        <label className="form-search !w-[15%] bg-[#efefef] !rounded-none text-center">    <FontAwesomeIcon icon={faChartArea} /></label>
                                        <label className=" !w-[100%] !rounded-none text-center">
                                            <input
                                                type='number'
                                                className="form-search !w-[100%]"
                                                placeholder='Width'
                                            />
                                        </label>
                                    </div>

                                    <div className='w-[34%] flex'>

                                        <label className=" !w-[100%] !rounded-none text-center">
                                            <input
                                                type='number'
                                                className="form-search !w-[100%]"
                                                placeholder='Depth'
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="form-heading pb-4">
                                <h3>Give us some information about Area</h3>
                            </div>

                            <div className="input-dropdown">
                                <label className="label-name" >Expected Price</label>
                                <label className="form-search !w-[4.5%] bg-[#efefef] !rounded-none text-center">    <FontAwesomeIcon icon={faIndianRupeeSign} /></label>
                                <label className=" !w-[95.5%] !rounded-none text-center">
                                    <Dropdown
                                        dropBg="#ffffff"
                                        dropWidth='100%'
                                        dropFont='11px'
                                        dropPadding='10px 0px'
                                        dropColor='#686868'
                                        drodownWidth='100%'
                                        dropHeading="Select"
                                        dropOp1='Select'
                                        dropOp2='sQ.Ft'
                                        dropOp3='Sq.Meter'
                                        dropOp4='grounds'
                                        dropOp5='Ankadam'
                                        dropOp6='Rood'
                                        dropOp7='Chataks'
                                    />
                                </label>
                            </div>


                            <div className="input-dropdown">
                                <label className="label-name" >Nagotiable Amount</label>
                                <label className="form-search !w-[4.5%] bg-[#efefef] !rounded-none text-center">    <FontAwesomeIcon icon={faIndianRupeeSign} /></label>
                                <label className=" !w-[40.5%] !rounded-none text-center">
                                    <Dropdown
                                        dropBg="#ffffff"
                                        dropWidth='100%'
                                        dropFont='11px'
                                        dropPadding='10px 0px'
                                        dropColor='#686868'
                                        drodownWidth='100%'
                                        dropHeading="Select"
                                        dropOp2='sQ.Ft'
                                        dropOp3='Sq.Meter'
                                        dropOp4='grounds'
                                        dropOp5='Ankadam'
                                        dropOp6='Rood'
                                        dropOp7='Chataks'
                                    />
                                </label>
                                <label className="m-auto !w-[55%] pl-8">
                                    <CheckRectangle
                                        checkTxt="Negotiable Applicable"
                                    />
                                </label>
                            </div>


                            <div className="input-dropdown">
                                <label className="label-name" > Rate</label>
                                <div className='flex w-[100%] justify-between'>
                                    <div className='w-[100%] flex '>
                                        <label className="form-search !w-[4.5%] bg-[#efefef] !rounded-none text-center">
                                            <FontAwesomeIcon icon={faIndianRupeeSign} />
                                        </label>
                                        <input
                                            type='text'
                                            className="form-search !w-[95.5%] text-end"
                                            placeholder='0.00'
                                        />
                                    </div>
                                </div>
                            </div>


                            <div className="input-dropdown">
                                <label className="label-name" >Maintence Charges</label>
                                <label className="form-search !w-[4.5%] bg-[#efefef] !rounded-none text-center">    <FontAwesomeIcon icon={faIndianRupeeSign} /></label>
                                <label className=" !w-[40.5%] !rounded-none text-center">
                                    <input
                                        type='text'
                                        className="form-search !w-[100%] text-end"
                                        placeholder='0.00'
                                    />
                                </label>
                                <label className="m-auto !w-[55%] pl-8">
                                    <CheckRectangle
                                        checkTxt="Paid By Licensor"
                                    />
                                </label>
                            </div>

                            <div className="input-dropdown">
                                <label className="label-name" >Scurity deposit</label>
                                <label className="form-search !w-[4.5%] bg-[#efefef] !rounded-none text-center">    <FontAwesomeIcon icon={faIndianRupeeSign} /></label>
                                <label className=" !w-[40.5%] !rounded-none text-center">
                                    <input
                                        type='text'
                                        className="form-search !w-[100%] text-end"
                                        placeholder='0.00'
                                    />
                                </label>
                                <label className="m-auto !w-[55%] pl-8 flex">
                                    <CheckRectangle
                                        checkTxt="Negotiable"
                                    />
                                    <CheckRectangle
                                        checkTxt="Refundable"
                                    />
                                </label>
                            </div>



                            <div className="input-dropdown">
                                <label className="label-name" >JV Ratio</label>
                                <div className='flex w-[100%] '>
                                    <div className='w-[65%] flex '>
                                        <label className="form-search !w-[8%] bg-[#efefef] !rounded-none text-center">
                                            <FontAwesomeIcon icon={faChartArea} />
                                        </label>
                                        <input
                                            type='number'
                                            className="form-search !w-[96%]"
                                            placeholder='%'
                                        />
                                    </div>
                                    <div className='w-[65%] flex'>
                                        <label className="form-search !w-[8%] bg-[#efefef] !rounded-none text-center">    <FontAwesomeIcon icon={faChartArea} /></label>
                                        <label className=" !w-[100%] !rounded-none text-center">
                                            <input
                                                type='number'
                                                className="form-search !w-[100%]"
                                                placeholder='%'
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>




                            <div className="form-heading pb-4">
                                <h3>Give us some information about Area</h3>
                            </div>


                            <TowInput
                                labelName='Lock-in Period(Year)'
                                widthFLabel='40%'
                                inputFirstWidth='85%'
                                inputTypeFirst='date'
                                fistPlaceholder=''
                                iconFirst={<FontAwesomeIcon icon={faCalendarWeek} />}
                                centerDivWidth='20%'
                                centerDivTxt='Lease Period (Month)'
                                widthThirdDiv='40%'
                                iconSecond={<FontAwesomeIcon icon={faLock} />}
                                inputTypeSecond='password'
                                secondPlaceholder=''

                            />

                            <div className="input-dropdown">
                                <label className="label-name" > Lease hold charges</label>
                                <div className='flex w-[100%] justify-between'>
                                    <div className='w-[100%] flex '>
                                        <label className="form-search !w-[4.5%] bg-[#efefef] !rounded-none text-center">
                                            <FontAwesomeIcon icon={faIndianRupeeSign} />
                                        </label>
                                        <input
                                            type='NUMBER'
                                            className="form-search !w-[95.5%]"
                                        // placeholder='0.00'
                                        />
                                    </div>
                                </div>
                            </div>

                            <TowInput
                                labelName='Rent Free Period(in days)'
                                widthFLabel='40%'
                                inputFirstWidth='85%'
                                inputTypeFirst='text'
                                fistPlaceholder=''
                                iconFirst={<FontAwesomeIcon icon={faBars} />}
                                centerDivWidth='30%'
                                centerDivTxt='Commission payble(by landLord)'
                                widthThirdDiv='40%'
                                iconSecond={<FontAwesomeIcon icon={faBars} />}
                                inputTypeSecond=''
                                secondPlaceholder=''

                            />

                            <TowInput
                                labelName='Rent Per Month'
                                widthFLabel='40%'
                                inputFirstWidth='85%'
                                inputTypeFirst='text'
                                fistPlaceholder=''
                                iconFirst={<FontAwesomeIcon icon={faIndianRupeeSign} />}
                                centerDivWidth='20%'
                                centerDivTxt='Rent Start Date'
                                widthThirdDiv='40%'
                                iconSecond={<FontAwesomeIcon icon={faCalendar} />}
                                inputTypeSecond='date'
                                secondPlaceholder=''

                            />

                            <TowInput
                                labelName='Rent Escalation'
                                widthFLabel='40%'
                                inputFirstWidth='85%'
                                inputTypeFirst='text'
                                fistPlaceholder=''
                                iconFirst={<FontAwesomeIcon icon={faPercent} />}
                                centerDivWidth='20%'
                                centerDivTxt='MSEB'
                                widthThirdDiv='40%'
                                iconSecond={<FontAwesomeIcon icon={faIndianRupeeSign} />}
                                inputTypeSecond='number'
                                secondPlaceholder=''

                            />

                            <TowInput
                                labelName='ROI'
                                widthFLabel='40%'
                                inputFirstWidth='85%'
                                inputTypeFirst='text'
                                fistPlaceholder=''
                                iconFirst={<FontAwesomeIcon icon={faPercent} />}
                                centerDivWidth='20%'
                                centerDivTxt='Property Tax'
                                widthThirdDiv='40%'
                                iconSecond={<FontAwesomeIcon icon={faBars} />}
                                inputTypeSecond='number'
                                secondPlaceholder=''

                            />

                            <div className="form-control form-btn">
                                <label></label>
                                <button type="submit" className='continue-btn' onClick={onContinueClick}>CONTINUE</button>
                                <button type="button" className="cancle-btn">CANCEL</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
export default CreatePropertyArea;

// export default GoogleApiWrapper({
//     apiKey: ("YOUR_GOOGLE_API_KEY_GOES_HERE")
// })(CreatePropertiesLocation);