import React, { useState } from 'react';
import '../css/input.css';


function DropdownSecond(Props) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDropdownClick = (item) => {
    setSelectedItem(item);

      $(document).ready(function (){
    console.log("jqury working")
  })
  };



  return (
    <>
      <div className="relative " style={{ width: Props.drodownWidth }}>
        <select
          className="dropdown-content input-dropdown w-full  text-{!#b3b3b3} bg-none border rounded-md shadow-sm outline-none"
          style={{
            background: Props.dropBg,
            width: Props.dropWidth,
            fontSize: Props.dropFont, 
            padding: Props.dropPadding,
            color: Props.dropColor,
          }}
          onChange={(e) => handleDropdownClick(e.target.value)}
        >
              {/* <input type="search" placeholder="Search.." id="myInput" onKeyUp={filterFunction()}></input> */}
              {/* <input
            className="flex items-center h-8 px-3 text-sm border-b border-black hover:bg-gray-200 focus:outline-none"
            type="search"
            name=""
            id=""
            placeholder="Search…"
          /> */}
          <option>{Props.dropOp1}</option>
          <option>{Props.dropOp2}</option>
          <option>{Props.dropOp3}</option>
          <option>{Props.dropOp4}</option>
          <option>{Props.dropOp5}</option>
          <option>{Props.dropOp6}</option>
          <option>{Props.dropOp7}</option>
          <option>{Props.dropOp8}</option>
          {/* <option><input type={Props.dropSearch} /></option> */}
        </select>
      </div>
    </>
  );
}

export default DropdownSecond;
