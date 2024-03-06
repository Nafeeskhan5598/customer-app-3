
import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Dropdown from '../../field/Dropdown';
import FormHeading from '../../SubComponents/formSub/FormHeading';
import InputLogo from '../../field/InputLogo';
import CurrentDateTime from '../../field/CurrentDateTime';

function SendGroupEmail(props) {

    return (
        <div className="CKEditor-area p-4">
            <FormHeading
              headingForm={props.headingForm} //" Create Audience for"
              headingItalic={props.headingItalic}      //"All Contacts"
              headingTotal={props.headingTotal}  //props"Total Records"
              headingValue={props.headingValue} 
            />

            <div className="input-dropdown ">
                <label className="label-name p-2 text-center text-black bg-gray-300 rounded-md" > Template </label> <Dropdown
                    dropBg="#ffffff"
                    dropWidth='100%;'
                    dropFont='11px'
                    dropPadding='10px 0px'
                    dropColor='#686868'
                    drodownWidth='100%'
                    dropHeading="Select"
                    dropOp1='Select'
                    dropSearch="search"
                    dropOp2="text-2"
                    dropOp3="text-3"
                    dropOp4="text-4"
                />
            </div>  

            <div></div>
            <div className='pb-4'>
                <InputLogo
                    inputWidth="100%"
                    inputTypes="text"
                    inputPlaceholder="add a subject"
                />
            </div>


            <div className='pb-4'>
                <CKEditor
                    editor={ClassicEditor}
                    data="<p>Hello &nbsp;</p>"
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event) => {
                        console.log(event);
                    }}
                    onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                    }}
                />
            </div>

            <CurrentDateTime
                labelName="Schedule"
                dateWidth="50%"
                timeWidth="40%"
            />

            <div className="form-control form-btn">
                <label></label>

                <button type="submit" className='continue-btn' >Send</button>
                <button type="button" className="cancle-btn">Discard</button>
            </div>
        </div>
    );
}

export default SendGroupEmail;
