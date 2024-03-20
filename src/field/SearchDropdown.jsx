import React, { useState } from 'react';
import '../css/input.css';

function SearchDropdown(Props) {
  const [setSelectedItem] = useState(null);
  const handleDropdownClick = (item) => {
    setSelectedItem(item);

  };

  return (
    <>
      <div className="relative w-1/2 lg:max-w-sm" style={{ width: Props.drodownWidth }}>
        <select
          className="ch dropdown-content input-dropdown w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none"
          style={{
            background: Props.dropBg,
            width: Props.dropWidth,
            fontSize: Props.dropFont,
            padding: Props.dropPadding,
            color: Props.dropColor,
          }}
          onChange={(e) => handleDropdownClick(e.target.value)}
        >
          <option></option>
          <option>{Props.dropOp2}</option>
          <option>{Props.dropOp3}</option>
          <option>{Props.dropOp4}</option>
          <option>{Props.dropOp5}</option>
        </select>
      </div>
    </>
  );
}

export default SearchDropdown;