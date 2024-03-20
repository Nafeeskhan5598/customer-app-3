import React from 'react';

function SubmitCancelBtn(props) {
    return (
        <>
             <div className="form-control form-btn">
                <label></label>
                <button type="submit" className='continue-btn' >{props.submitName}</button>
                <button type="button" className="cancle-btn">{props.cancelName}</button>
            </div>
        </>
    );
}

export default SubmitCancelBtn;