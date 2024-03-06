import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TextLogo(props) {

    return (

        <>
            <div className="bg-[#b5b5b5] text-white p-1 rounded">
                <span className=""> 
                  {!! props.textLogo &&  <FontAwesomeIcon icon={props.textLogo} /> }
                  </span>
                <span>{props.logoText}</span>
            </div>
        </>
    )
}
export default TextLogo;