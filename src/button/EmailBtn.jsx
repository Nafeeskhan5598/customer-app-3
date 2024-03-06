import React, { useState } from 'react';
import '../css/form.css';

const EmailBtn = () => {
  const [email, setEmail] = useState('');

  // const handleEmailChange = (event) => {
  // setEmail(event.target.value);
  // };

  const handleVerifyClick = () => {
    // Perform verification send a verification email
    console.log(`Verifying email: ${email}`);
    setEmail();
  };

  return (
    <div className='email-btn-area'>
      <button className='email-btn' onClick={handleVerifyClick}>Verify Email</button>
    </div>
  );
};

export default EmailBtn;
