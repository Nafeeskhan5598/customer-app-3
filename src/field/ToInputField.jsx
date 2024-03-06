import React from 'react';
import { EmailSchema } from '../schema/EmailSchema';
import { useFormik } from "formik";

function ToInputField(props) {
    const formInitialValues = {
        name: '',
        email: ''
    }

    const { handleChange, errors } = useFormik({
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
            <div className="input-dropdown">
                <label className="label-name" >{props.labelName}</label>
                <input
                    type='text'
                    className="form-search !w-[49%]"
                    placeholder={props.placeholderFist}
                    // name={props.namefirst}
                    onChange={handleChange}
                    name={props.firstName}
                />
                <input type="text"
                    className="form-search !w-[50%]"
                    placeholder={props.placeholderSecond}
                    onChange={handleChange}
                    name={props.secondName}
                />

                <br />
                <br />
                <span style={{ color: "red" }}>{errors.name}</span>
            </div>
        </>
    );
}

export default ToInputField;