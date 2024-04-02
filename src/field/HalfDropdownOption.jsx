import React from 'react';
import '../css/input.css';
import { EmailSchema } from '../schema/EmailSchema';
import { useFormik } from "formik";


function HalfDropdown(Props) {
//   const [selectedItem, setSelectedItem] = useState(null);

//   const handleDropdownClick = (item) => {
//     setSelectedItem(item);

  // };
  const formik = useFormik({
    initialValues: {
      dropdownValue: '',
    },
    validationSchema: EmailSchema,
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log(values);
    },
  });

  const handleDropdownClick = (item) => {
    formik.setFieldValue('dropdownValue', item);
  };

  return (
    <>
      <div className="relative" style={{ width: Props.drodownWidth }}>
        <select
          className="dropdown-content input-dropdown w-full  text-{!#b3b3b3} bg-none border  shadow-sm outline-none "
          style={{
            
            background: Props.dropBg,
            fontSize: Props.dropFont,
            padding: Props.dropPadding,
            color: Props.dropColor,
          }}
          onChange={(e) => {
            handleDropdownClick(e.target.value);
            formik.handleChange(e);
          }}
          value={formik.values.dropdownValue}
          name="dropdownValue"
        >
          <option>{Props.dropOp1}</option>
          <option>{Props.dropOp2}</option>
          <option>{Props.dropOp3}</option>
          <option>{Props.dropOp4}</option>
          <option>{Props.dropOp5}</option>
          <option>{Props.dropOp6}</option>
          <option>{Props.dropOp7}</option>
          <option>{Props.dropOp8}</option>
        </select>

        <span style={{ color: 'red' }}>{formik.errors.dropdownValue}</span>
      </div>
    </>
  );
}

export default HalfDropdown;
