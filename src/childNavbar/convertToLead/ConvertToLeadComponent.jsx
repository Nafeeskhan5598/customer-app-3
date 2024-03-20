import React from 'react';

function ConvertToLeadComponent(props) {
    return (
        <>
            <div className='w-full flex p-2 border-b-2'>
                <div className='w-[60%]'><span className='text-xs'>{props.remarkAddress}</span></div>
                <div className='w-[40%] flex justify-around'>
                    <div><span className='text-xs'>{props.assignTo}</span></div>
                    <div><span className='text-xs'>{props.planedDate}</span></div>
                    <div><span className='text-xs border-2 border-gray-300 rounded-sm p-1'>{props.status}</span> </div>
                </div>
            </div>
        </>
    );
}

export default ConvertToLeadComponent;