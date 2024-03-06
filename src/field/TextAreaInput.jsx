import React, { useState } from 'react';

const TextAreaInput = (props) => {


  const [ setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className='text-area-input' >
      <label className='label-name' style={{ width: props.textAreaLabelWidth }} htmlFor={props.id}>{props.label}</label>
      <textarea
        id={props.id}
        placeholder={props.placeholder}
        // value={props.textArea}
        onChange={handleTextChange}
        rows={props.rows}
        style={{ width: props.textAreaWidth }}
        name={props.textArea}
      />
    </div>
  );
};

export default TextAreaInput;
