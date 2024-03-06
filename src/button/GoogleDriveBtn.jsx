
import React from "react";
// import GoogleDriveImg from '../img/google-drive.png';

function DownloadBtn() {



    return (
        <>
                <div className="">
                        
                    <div className="bg-[#1a1a1ae6] flex justify-between items-center pl-1 ">
                        <img className="h-6 p-1"  src={process.env.PUBLIC_URL + '/img/google-drive.png'} alt="google drive" />
                        <button
                            type="button"
                            className="bg-[#404040]  text-white p-2"
                        > Google Drive
                        </button>
                    </div>

                </div>
        </>
    )
}

export default DownloadBtn;