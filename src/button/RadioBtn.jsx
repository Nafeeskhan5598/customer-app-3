import React from "react";

function RadioBtn(props) {

    return (
        <>
            <div>
                <input
                    type="radio"
                    id={props.id}
                    name={props.name}
                    value={props.value}
                    checked={props.checked}
                    onChange={props.onChange}
                />
                <label htmlFor={props.id}><span>{props.label}</span> </label>
            </div>

        </>
    )
}
export default RadioBtn;