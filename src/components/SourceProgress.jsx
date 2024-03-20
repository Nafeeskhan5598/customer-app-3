import React from "react";

function SourceProgress(props) {

    return (

        <>
            <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <div className="p-2 border-b border-solid border-opacity-25 ">
                        {props.OpportunitiesTxt}
                    </div>
                    <div className=" w-full ">
                        <div className="flex justify-arround">

                            {props.Progress}
                        </div>

                    </div>
                </div>
            </div>





        </>
    )
}
export default SourceProgress;