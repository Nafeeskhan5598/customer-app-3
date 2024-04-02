import React from 'react';

function InputMobile(props) {

    // const [mobileNumber, setMobileNumber] = useState('');
    // const [mobileNumberError, setMobileNumberError] = useState('');

  
    return (
        <>
            <input
                type="tel"
                pattern="[0-9]{10}"
                id="phoneNumber"
                required
                className="form-search !w-[88%]"
                placeholder="10-Digit Mobile"
                value={props.value}
                onChange={props.onChange} 
            />
        </>
    );
}

export default InputMobile;