import React from 'react';
import { faBars, faBed, faTty, faTableCells, faCar, faArrowsUpDown, faCalendarDays, faTable, faTableList, faBarsStaggered, faPowerOff, faCompass, } from '@fortawesome/free-solid-svg-icons';
import Dropdown from "../../field/Dropdown";
import CheckRectangle from '../../button/CheckRectangle';
import InputLogo from '../../field/InputLogo';
import SpanTxt from '../../common/SpanTxt';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import PageHeading from '../../common/PageHeading';
import SubmitCancelBtn from '../../button/SubmitCancelBtn';
import HalfDropdown from '../../field/HalfDropdownOption';
import createPropertyDrop from '../../js/DropdownVarible';

function CreatePropertyOtherDetails({ onContinueClick }) {

    return (

        <>
            <form action="">
                <div className="create-lead-area pt-10">
                          <PageHeading pageHeading="BedRoom Details" />

                    {/* <ThreeInput /> */}

                    <div className="input-dropdown">
                        <label className="label-name !text-[x-small] " > Master Bedroom</label>
                        <div className='flex w-[100%] justify-between'>
                            <div className='w-[100%] flex '>
                                <InputLogo
                                    inputLogo={faBed}
                                    inputWidth="25%"
                                    inputTypes="number"
                                    bgColorGray="#d7d7d7"
                                    
                                />
                                <SpanTxt
                                    spanTxtWidth="12.5%"
                                    spanText="Guest Room"
                                    
                                />
                                <InputLogo
                                    inputLogo={faBed}
                                    inputWidth="25%"
                                    inputTypes="number"
                                    bgColorGray="#d7d7d7"
                                
                                />
                                <SpanTxt
                                    spanTxtWidth="12.5%"
                                    spanText="Child Room"
                                />
                                <InputLogo
                                    inputLogo={faBed}
                                    inputWidth="25%"
                                    inputTypes="number"
                                    bgColorGray="#d7d7d7"
                                />
                            </div>
                        </div>
                    </div>



                    <div className="input-dropdown">
                        <label className="label-name !text-[x-small]" > Rate</label>
                        <div className='flex w-[100%] justify-between'>
                            <div className='w-[100%] flex '>
                                <InputLogo
                                    inputLogo={faTty}
                                    inputWidth="25%"
                                    inputTypes="number"
                                    bgColorGray="#d7d7d7"
                                />
                                <SpanTxt
                                    spanTxtWidth="12.5%"
                                    spanText="Common"
                                />
                                <InputLogo
                                    inputLogo={faTty}
                                    inputWidth="25%"
                                    inputTypes="number"
                                    bgColorGray="#d7d7d7"
                                />
                                <SpanTxt
                                    spanTxtWidth="12.5%"
                                    spanText="Ensuit"
                                />
                                <InputLogo
                                    inputLogo={faTty}
                                    inputWidth="25%"
                                    inputTypes="number"
                                    bgColorGray="#d7d7d7"
                                />
                            </div>
                        </div>
                    </div>


                    <div className="input-dropdown">
                        <label className="label-name !w-[14%] !text-[x-small]" > Other Room</label>
                        <div className='w-[100%] flex justify-end '>
                            <InputLogo
                                inputWidth="98%"
                                inputTypes="number"
                                // bgColorGray="#d7d7d7"

                            />
                        </div>
                    </div>

                    <div className="form-heading pb-4">
                        <h3>Useful Features</h3>
                    </div>


                    <div className="input-dropdown">
                        <label className="label-name !text-[x-small]" > Total Floor</label>
                        <div className='w-[100%] flex justify-end '>
                            <InputLogo
                                inputWidth="40%"
                                inputLogo={faTableCells}
                                inputTypes="number"
                                bgColorGray="#d7d7d7"
                            />
                            <SpanTxt
                                spanTxtWidth="20%"
                                spanText="Property On Floor"
                            />
                            <InputLogo
                                inputWidth="40%"
                                inputLogo={faTableCells}
                                inputTypes="number"
                                bgColorGray="#d7d7d7"
                            />
                        </div>
                    </div>

                    <div className="input-dropdown">
                        <label className="label-name !w-[14%] !text-[x-small]">Flooring</label>
                        <label className=" !w-[88%] !rounded-none text-center">
                            <Dropdown {...createPropertyDrop[0]}
                                dropHeading="Select"
                                dropOp1='Select'
                                dropOp2='Marble'
                                dropOp3='Tiles'
                                dropOp4='Others'
                                dropOp5='Vitrified'
                                dropOp6='Wooden'
                                dropOp7='Kota'
                            />
                        </label>
                    </div>


                    <div className="input-dropdown">
                        <label className="label-name !text-[x-small]" > No. of Parking</label>
                        <div className='w-[100%] flex justify-end '>
                            <InputLogo
                                inputWidth="40%"
                                inputLogo={faCar}
                                inputTypes="number"
                                bgColorGray="#d7d7d7"
                            />
                            <SpanTxt
                                spanTxtWidth="20%"
                                spanText="No. of Lift"
                            />
                            <InputLogo
                                inputWidth="40%"
                                inputLogo={faArrowsUpDown}
                                inputTypes="number"
                                bgColorGray="#d7d7d7"
                            />
                        </div>
                    </div>

                    <div className="input-dropdown">
                        <label className="label-name !w-[14%] !text-[x-small]">Facing</label>
                        <label className=" !w-[88%] !rounded-none text-center">
                            <Dropdown {...createPropertyDrop[0]}
                                dropHeading="Select"
                                dropOp1='Select'
                                dropOp2='North'
                                dropOp3='North-East'
                                dropOp4='North-West'
                                dropOp5='South'
                                dropOp6='South-East'
                                dropOp7='South-West'
                            />
                        </label>
                    </div>

                    <div className="input-dropdown">
                        <label className="label-name !w-[14%] !text-[x-small]">Amenities</label>
                        <label className=" !w-[88%] !rounded-none text-center">
                            <Dropdown {...createPropertyDrop[0]}
                                dropHeading="Select"
                                dropOp1='Select'
                                dropOp2='24/7 Security'
                                dropOp3='Activity Area'
                                dropOp4='Air Condition'
                                dropOp5='Air Conditioning'
                                dropOp6='Amphitheatre'
                                dropOp7='Astro Deck'
                            />
                        </label>
                    </div>
                    <div className="input-dropdown">
                        <label className="label-name !w-[14%] !text-[x-small]">Advertisement</label>
                        <label className=" !w-[88%] !rounded-none text-center">
                            <Dropdown {...createPropertyDrop[0]}
                                dropHeading="Select"
                                dropOp1='Select'
                                dropOp2='99acres.com'
                                dropOp3='99acres.com(free)'
                                dropOp4='Abodesindia'
                                dropOp5='ABP'
                                dropOp6='Agent Refferral'
                                dropOp7='Area Group'
                            />
                        </label>
                    </div>


                    <div className="your-form-container">
                        <div className='pb-4'>
                            <div className="input-dropdown">
                                <label className="label-name !w-[14%] !text-[x-small]" >Age Of Property</label>
                                <div className='flex w-[88%] justify-between'>
                                    <div className='w-[60%] flex '>
                                        <HalfDropdown {...createPropertyDrop[0]}
                                            dropHeading="Select"
                                            dropOp1='Select'
                                            dropOp2='Under Construction'
                                            dropOp3='Less then 5 years'
                                            dropOp4='5-10 years'
                                            dropOp5='10-20 years'
                                            dropOp6='More then 20 year'
                                            dropOp7='Less then 6 months'
                                        />
                                    </div>
                                    <div className='w-[30%]'>
                                        <label className=" !w-[48%] !rounded-none text-center">
                                            <HalfDropdown {...createPropertyDrop[0]}
                                                dropHeading="Select"
                                                dropOp1='Select'
                                                dropOp2='Only family'
                                                dropOp3='Only bachelor'
                                                dropOp4='Spinster'
                                                dropOp5='Working professional'
                                                dropOp6='Working Girls'
                                              
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>


                            <div className="input-dropdown">
                                <label className="label-name !w-[14%] !text-[x-small]" >Availability/Possession</label>
                                <div className='flex w-[88%]'>
                                    <div className='w-[60%] flex justify-end'>
                                        <HalfDropdown {...createPropertyDrop[0]}
                                            dropHeading="Select"
                                            dropOp1='Select'
                                            dropOp2='Immediately/Ready to move'
                                            dropOp3='Specify time'

                                        />
                                    </div>
                                    <div className='w-[40%] flex justify-end'>
                                        {/* <label className=" !w-[48%] !rounded-none text-center"> */}
                                        <InputLogo
                                            inputWidth="75%"
                                            inputLogo={faCalendarDays}
                                            inputTypes="number"
                                            bgColorGray="#d7d7d7"
                                        />
                                        {/* </label> */}
                                    </div>
                                </div>
                            </div>


                            <div className="input-dropdown">
                                <label className="label-name !text-[x-small]" >Workstation</label>
                                <div className='w-[100%] flex justify-end '>
                                    <InputLogo
                                        inputWidth="40%"
                                        inputLogo={faTableCells}
                                        inputTypes="number"
                                        bgColorGray="#d7d7d7"
                                    />
                                    <SpanTxt
                                        spanTxtWidth="20%"
                                        spanText="Cabins"
                                    />
                                    <InputLogo
                                        inputWidth="40%"
                                        inputLogo={faTable}
                                        inputTypes="number"
                                        bgColorGray="#d7d7d7"
                                    />
                                </div>
                            </div>


                            <div className="input-dropdown">
                                <label className="label-name !text-[x-small]" >Conference Room</label>
                                <div className='w-[100%] flex justify-end '>
                                    <InputLogo
                                        inputWidth="40%"
                                        inputLogo={faTableList}
                                        inputTypes="number"
                                        bgColorGray="#d7d7d7"
                                    />
                                    <SpanTxt
                                        spanTxtWidth="20%"
                                        spanText="Reception"
                                    />
                                    <InputLogo
                                        inputWidth="40%"
                                        inputLogo={faBarsStaggered}
                                        inputTypes="number"
                                        bgColorGray="#d7d7d7"
                                    />
                                </div>
                            </div>


                            <div className="input-dropdown">
                                <label className="label-name !text-[x-small]" >Power(In KVA)</label>
                                <div className='w-[100%] flex justify-end '>
                                    <InputLogo
                                        inputWidth="40%"
                                        inputLogo={faPowerOff}
                                        inputTypes="number"
                                        bgColorGray="#d7d7d7"
                                    />
                                    <SpanTxt
                                        spanTxtWidth="20%"
                                        spanText="DB Backup"
                                    />
                                    <InputLogo
                                        inputWidth="40%"
                                        inputLogo={faPowerOff}
                                        inputTypes="number"
                                        bgColorGray="#d7d7d7"
                                    />
                                </div>
                            </div>


                            <div className="form-heading pb-4">
                                <h2>Upload Video(Youtube or Vimeo)</h2>
                                <h3>Embed permissions can spacify to your websites for permissions to embed your video</h3>
                            </div>


                            <div className="input-dropdown">
                                <label className="label-name !text-[x-small]" >Power(In KVA)</label>
                                <div className='w-[100%] flex'>
                                    <InputLogo
                                        inputWidth="100%"
                                        inputLogo={faYoutube}
                                        inputPlaceholder="Enter youtube/vimeo url"
                                        inputTypes="text"
                                        bgColorGray="#d7d7d7"

                                    />
                                </div>
                            </div>


                            <div className="input-dropdown">
                                <label className="label-name !w-[14%] !text-[x-small]" >Website Keyword</label>
                                <div className='w-[100%] flex justify-end'>
                                    <InputLogo
                                        inputWidth="100%"
                                        inputTypes="text"
                               

                                    />
                                </div>
                            </div>






                            <div className="form-heading pb-4">
                                <h3>Warehouse Features</h3>
                            </div>


                            <div className="input-dropdown">
                                <label className="label-name !w-[14%] !text-[x-small]">Pollution Color Zone</label>
                                <label className=" !w-[88%] !rounded-none text-center">
                                    <Dropdown {...createPropertyDrop[0]}
                                        dropHeading="Select"
                                        dropOp1='Select'
                                        dropOp2='Red'
                                        dropOp3='Orange'
                                        dropOp4='Yellow'
                                        dropOp5='Green'

                                    />
                                </label>
                            </div>



                            <div className="input-dropdown">
                                <label className="label-name !text-[x-small]" >Racking Capacity(EOT)</label>
                                <div className='w-[100%] flex justify-end '>
                                    <InputLogo
                                        inputWidth="40%"
                                        inputLogo={faBars}
                                        inputTypes="number"
                                        inputPlaceholder="tonnes"
                                        bgColorGray="#d7d7d7"
                                    />
                                    <SpanTxt
                                        spanTxtWidth="20%"
                                        spanText="Floor Strngth"
                                    />
                                    <InputLogo
                                        inputWidth="40%"
                                        inputLogo={faBars}
                                        inputTypes="number"
                                        inputPlaceholder="tone per meter cube"
                                        bgColorGray="#d7d7d7"
                                    />
                                </div>
                            </div>


                            <div className="input-dropdown">
                                <label className="label-name !text-[x-small]" >STP/ETP Capacity</label>
                                <div className='w-[100%] flex justify-end '>
                                    <InputLogo
                                        inputWidth="40%"
                                        inputLogo={faBars}
                                        inputTypes="number"
                                        inputPlaceholder="liter"
                                        bgColorGray="#d7d7d7"
                                    />
                                    <SpanTxt
                                        spanTxtWidth="20%"
                                        spanText="No of loading bays"
                                    />
                                    <InputLogo
                                        inputWidth="40%"
                                        inputLogo={faBars}
                                        inputTypes="number"
                                        bgColorGray="#d7d7d7"
                                    />
                                </div>
                            </div>


                            <div className="input-dropdown">
                                <label className="label-name !text-[x-small]" >Canopy Details(Length-Width)</label>
                                <div className='w-[100%] flex justify-end '>
                                    <InputLogo
                                        inputWidth="48%"
                                        inputLogo={faCompass}
                                        inputTypes="number"
                                        bgColorGray="#d7d7d7"
                                    />
                                    <SpanTxt
                                        spanTxtWidth="6%"
                                        spanText="_"
                                    />
                                    <InputLogo
                                        inputWidth="48%"
                                        inputLogo={faCompass}
                                        inputTypes="number"
                                        bgColorGray="#d7d7d7"
                                    />
                                </div>
                            </div>


                            <div className='chec flex justify-around pl-28'>
                                {/* <div className=""> */}
                                    <CheckRectangle
                                        checkTxt="Fire NOC"
                                        checkFontSize="0.7rem"
                                    />
                                    <CheckRectangle
                                        checkTxt="Approval Plan"
                                        checkFontSize="0.7rem"
                                    />
                                       <CheckRectangle
                                        checkTxt="Dock Levellers"
                                        checkFontSize="0.7rem"
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
export default CreatePropertyOtherDetails;

// export default GoogleApiWrapper({
//     apiKey: ("YOUR_GOOGLE_API_KEY_GOES_HERE")
// })(CreatePropertiesLocation);