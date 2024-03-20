import React from "react";


function AddvanceSearchBtn({ onAdvancedSearchClick }) {

  return (

    <>
    
      <button type="button" className="open-task-search bg-[#007bff] !rounded text-white border" onClick={onAdvancedSearchClick}>
        ADDVANCE SEARCH
      </button>

    </>
  )
}
export default AddvanceSearchBtn;