import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { GoogleApiWrapper } from 'google-maps-react';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';

function ThreeInput() {


    return (

        <>

            <div className="input-dropdown">
                <label className="label-name" > Rate</label>
                <div className='flex w-[100%] justify-between'>
                    <div className='w-[100%]'>
                        <input
                            type='number'
                            className="form-search !w-[50%] !pl-10"
                            placeholder=''
                        />
                        <span className="icon  relative left-5 -top-8">
                            <FontAwesomeIcon icon={faIndianRupeeSign} />
                        </span>
                        <div>
                        <span className="bg-red-500 w[50%]">Guest Room</span>
                    </div>
                    </div>
                    
                </div>
            </div>

        </>
    )
}
export default ThreeInput;