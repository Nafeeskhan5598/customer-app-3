import React from "react";

function CheckBoxBtn(Props) {

    return (
        <>
      
                <div className="w-1/2">
                    <form className="your-form-container">
                        <div className="form-control">
                            <label className="label-name">{Props.labelName}</label>
                            <label >{Props.Dropdown}</label>
                            <input
                                type="checkbox"
                                id={Props.id}   
                                name={Props.name}
                                value={Props.value}
                                checked={Props.checked}
                                onChange={Props.onChange}
                            />
                            <label style={{ width: Props.checkLabelWidth }} className={Props.labelClass} htmlFor={Props.id}><span>{Props.label}</span> </label>
                            {/* //width: "131px" */}
                        </div>
                    </form>
                </div>
  

        </>
    )
}
export default CheckBoxBtn;