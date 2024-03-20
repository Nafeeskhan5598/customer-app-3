import React from 'react';
import FormHeading from '../../SubComponents/formSub/FormHeading';
import CircleLogo from '../../ChildComponents/CircleLogo';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function History(props) {
    return (
        <>
            <FormHeading
                headingForm={props.headingForm} //" Create Audience for"
                headingItalic={props.headingItalic}      //"All Contacts"
                headingTotal={props.headingTotal}  //props"Total Records"
                headingValue={props.headingValue}
            />

            <div className='p-4'>
                <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
                    <li className="mb-10 ms-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-white">
                            <svg className="w-3.5 h-3.5 text-white dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                        </span>
                        <h3 className="font-medium leading-tight pb-4"><span className='text-blue-500'>Administrator</span>(11 Mar 2024 2: 23 PM)</h3>

                        <p className=" flex text-xs gap-1"><span className='bg-gray-500 rounded-lg text-white w-[16rem] mx-auto text-center p-2'>Clasified Response Lead-Create</span> <span className='relative top-2'> <CircleLogo  className="text-xs" circleLogo={faPlay} /> </span> [HOUSING] Interested in Signature Global City 81 Pahse 2, Sector 81, residantial, 2 BHK, 3 BHK, new-projects for </p>
                        <h6>[18865392]</h6>
                    </li>
                    <li className="mb-10 ms-6">
                     <button type='submit' className='w-full'>SEE ALL</button>
                    </li>
                  
                </ol>
            </div>

        </>
    );
}

export default History;