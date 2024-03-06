// import { Dropdown } from "flowbite";
import React  from "react";
import { EmailSchema } from '../schema/EmailSchema';
import { useFormik } from "formik";
import '../css/form.css'

function FormValidation(Props) {
  const formInitialValues = {
    name: '',
    email: ''
}

const {  handleChange, values, errors} = useFormik({
    initialValues: formInitialValues,
    validationSchema: EmailSchema,          
    onSubmit: (values) => {
        console.log(values);
        console.log(values.name)                              
        // console.log(values.email)
    }
});


    return (


        <>
                 {/* <form onSubmit={handleSubmit}> */}
            <div>
                <div className="">
                    <div className="form-control">
                        <label className="label-name">{Props.labelName}</label>
                        <label >{Props.Dropdown}</label>
                        <input
                            className="input-area"
                            style={{
                                background: Props.labelBg,
                                width: Props.labelWidth,
                                position: "relative",
                                left: Props.labelLeft,
                                color: Props.labelColor,
                                textTransform: Props.labelTxtTransform,
                                outline: 'none'
                            }}
                            type={Props.inputType}
                            name={Props.inputName}
                            // name="name"
                            placeholder={Props.placeholder}
                            onChange={handleChange}
                        />
                        <br />
                        <br />
                         <span style={{color: "red"}}>{errors.name}</span>
                        {/* {userError && <p style={{ color: 'red' }}>Please fill in this field</p>} */}
                    </div>
                </div>
            </div>
            {/* </form> */}
        </>
    )
}
export default FormValidation;