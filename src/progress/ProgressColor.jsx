import React, { useState } from 'react';

const ProgressColor = (props) => {
    const [value, setValue] = useState(0);

    const getRangeColor = (min, max, color) => {
        return value >= min && value <= max ? color : 'white';
    };

    const getRangeTextColor = (min, max) => {
        return value >= min && value <= max ? 'white' : 'black';
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <>
            <div className="your-form-container">
                <div className='flex w-full'>
                    <div style={{width:props.rangeLabelWidth}} className='w-1/6'>
                        <label className="label-name ">
                            Source <span>[{value}]%</span>
                        </label>
                    </div>
                    <div style={{width: props.rangeWidth}} className='w-[81%] relative '>
                        <input
                            id="pi_input"
                            type="range"
                            min="0"
                            max="100"
                            step="1"
                            value={value}
                            onChange={handleChange}
                            className='w-[100%] absolute'
                        />
                    </div>
                </div>
            </div>

            <div className="form-control m-auto">
                <label className="label-name"></label>
                <div className='flex w-11/12 justify-center'>
                    {[
                        { min: 1, max: 34, label: 'Cold', color: 'blue' },
                        { min: 35, max: 67, label: 'Warn', color: 'green' },
                        { min: 68, max: 90, label: 'Hot', color: 'red' },

                    ].map((range, index) => (
                        <div
                            key={index}
                            className={`w-[29%] p-5 border border-teal-300 font-bold text-center rounded-3xl hover:drop-shadow-lg`}
                            style={{
                                backgroundColor: getRangeColor(range.min, range.max, range.color),
                                color: getRangeTextColor(range.min, range.max),
                                transition: 'background-color 0.8s',
                            }}
                        >
                            {range.label}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProgressColor;
