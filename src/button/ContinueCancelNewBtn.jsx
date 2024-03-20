import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';

function ContinueCancelNewBtn(props) {
    return (
        <>
            <div className="form-control form-btn">
                <label></label>
                <button type="submit" className='continue-btn' onClick={props.onContinueClick}> CONTINUE</button>
                <button type="button" className="cancle-btn">CANCEL</button>
                <button type="button" className="cancle-btn-Contact">
                    <span>
                        <FontAwesomeIcon icon={faUser} />
                    </span>
                    ADD NEW CONTACT</button>
            </div>
        </>
    );
}

export default ContinueCancelNewBtn;