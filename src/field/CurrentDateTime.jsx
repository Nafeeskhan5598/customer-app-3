import React, { useEffect, useState } from "react";


function CurrentDateTime(props) {

    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    useEffect(() => {
        const getCurrentDate = () => {
            const today = new Date();
            const dd = String(today.getDate()).padStart(2, '0');
            const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
            const yyyy = today.getFullYear();
            const currentDate = `${yyyy}-${mm}-${dd}`;

            const currentHour = String(today.getHours()).padStart(2, '0');
            const currentMinute = String(today.getMinutes()).padStart(2, '0');
            const currentTime = `${currentHour}:${currentMinute}`;

            setSelectedDate(currentDate);
            setSelectedTime(currentTime);
        };

        getCurrentDate();
    }, []);

    return (
        <>

            <div className="input-dropdown">
            {/* // Request Date      */}
        <label className="label-name text-black rounded-md pt-2 !m-0"
        style={{background: props.labelBgColor, textAlign: props.textAlign, width: props.labelwidth}}
        > {props.labelName} </label>   
                <input
                    style={{ width: props.dateWidth }}
                    type='date'
                    className="form-search "  //!w-[50%]
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                />
                <input
                    style={{ width: props.timeWidth }}
                    type='time'
                    className="form-search"   // !w-[40%]
                    value={selectedTime}
                    onChange={(e) => setSelectedDate(e.target.value)}
                />

            </div>

        </>
    )
}

export default CurrentDateTime;