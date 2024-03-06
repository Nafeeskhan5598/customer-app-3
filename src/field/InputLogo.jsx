import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EmailSchema } from '../schema/EmailSchema';
import { useFormik } from "formik";

function InputLogo(props) {
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

            <span style={{background:props.bgColorGray}} className="relative top-0  left-18 p-2">
              { !! props.inputLogo &&  <FontAwesomeIcon  icon={props.inputLogo} />}
            </span>
            <input
            style={{width: props.inputWidth}}
                type={props.inputTypes}
                className="form-search "
                placeholder={props.inputPlaceholder}
                onChange={handleChange}
                value={values.name}
                name="name"
            />
             <span style={{color: "red"}}>{errors.name}</span>
        </>
    )
}
export default InputLogo;