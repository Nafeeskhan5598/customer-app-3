import React from 'react';

function DeleteLead(props) {
    return (
        <>
             <div className="group-transfer-heading text-center pt-4 pb-8">
                <h2 className="text-2xl "> Are you sure to delete this lead?  </h2>
                </div>
                <div className="form-control form-btn">
                <label></label>
                <button type="submit" className='continue-btn'>Ok</button>
                <button type="button" className="cancle-btn">Cancle</button>
            </div>
                
        </>         
    )
}
export default DeleteLead;