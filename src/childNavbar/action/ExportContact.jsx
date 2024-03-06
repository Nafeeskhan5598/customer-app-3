import React from "react";
import FormHeading from "../../SubComponents/formSub/FormHeading";
import InputLogo from "../../field/InputLogo";
import { faGauge } from "@fortawesome/free-solid-svg-icons";
import DownloadBtn from "../../button/DownloadBtn";
import GoogleDriveBtn from '..//..//button/GoogleDriveBtn';

function ExportContact() {
    const exportInfo = [
        {
            headingForm: "7676",
            headingTotal: "4000",
        }
    ]

    return (

        <>
            {exportInfo.map((info, index) => (
                <FormHeading
                    key={index}
                    headingForm={`Export total number of record: ${info.headingForm}`}
                    headingPera="You may face download issues based on volume of data"    //"You may face 
                    headingTotal={`Max Limit: ${info.headingTotal}`}

                />
            ))}
            <div className="input-dropdown">
                <label className="label-name  !flex !justify-center items-center" >Page No</label>
                <div className='w-[100%] flex justify-end '>
                    <InputLogo
                        inputWidth="100%"
                        inputLogo={faGauge}
                        inputTypes="text"
                        inputPlaceholder="1"
                    />
                </div>
            </div>


            <div className="input-dropdown">
                <label className="label-name  !flex !justify-center items-center" >Page Size</label>
                <div className='w-[100%] flex justify-end '>
                    <InputLogo
                        inputWidth="100%"
                        inputLogo={faGauge}
                        inputTypes="text"
                        inputPlaceholder="4000"
                    />
                </div>
            </div>


            <center className="flex gap-1 m-auto justify-center">
                <DownloadBtn />
                <GoogleDriveBtn />
            </center>

        </>
    )
}

export default ExportContact;