import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TextField(props) {

    return (

        <>
            <div style={{ width: props.textFieldWidth }}
                className="h-12  border border-solid border-gray-300 items-center flex p-4 gap-4">
                <div>
                    <span>
                        {!!props.userTextLogo && <FontAwesomeIcon className="font-bold text-xl response-text-small" icon={props.userTextLogo} />}
                    </span>
                </div>
                <div>
                    <span className="text-sm response-text-small"><span className="bg-[#fff1f1] response-text-small" style={{ color: props.userTxtColorFirst }}>{props.redtxtFirst}</span>  {props.userTextFirst} <span className="response-text-small">
                        {!!props.userVerifyLogo && <FontAwesomeIcon className="text-green-500 " icon={props.userVerifyLogo} />}
                    </span>   <span className="bg-[#fff1f1] response-text-small" style={{ color: props.userTxtColorSecond }}>{props.redtxtSecond}</span> </span>
                    <h6 className="text-sm font-bold response-text-small">{props.userTextSecond}</h6>
                </div>
            </div>
        </>
    )
}
export default TextField;