import React from "react";

function TowInput(props) {

    return (

        <>
            <div className="input-dropdown">
                <label className="label-name" >{props.labelName}</label>
                <div className='flex w-[100%] '>
                    <div style={{ width: props.widthFLabel }} className='flex '>
                        <label className="form-search !h-[2.3rem] !w-[15%] bg-[#efefef] !rounded-none text-center">
                            <span>{props.iconFirst}</span>
                        </label>
                        <label style={{ width: props.inputFirstWidth }} className="!rounded-none text-center !border-none !w-[100%]">
                            <input
                                type={props.inputTypeFirst}
                                placeholder={props.fistPlaceholder}
                                className="form-search !w-[100%]"
                            />
                        </label>
                    </div>
                    <div style={{ width: props.centerDivWidth }} className='form-search !h-[2.3rem]  bg-[#efefef] !rounded-none text-center'>
                        <label className="">{props.centerDivTxt}
                        </label>
                    </div>
                    <div style={{ width: props.widthThirdDiv }} className='flex'>
                        <label className=" !w-[100%] !rounded-none text-center flex">
                            <label className="form-search relative z-50 bg-transparent !h-[2.3rem] !w-[15%] bg-[#efefef] !rounded-none text-center border-r-0">

                                <span>{props.iconSecond}</span>
                            </label>
                            <input
                                type={props.inputTypeSecond}
                                placeholder={props.secondPlaceholder}
                                className="form-search !w-[100%] !h-[2.3rem] border-l-0"
                            />
                        </label>
                    </div>
                </div>
            </div>

        </>
    )
}
export default TowInput