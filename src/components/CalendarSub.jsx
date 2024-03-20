import React, { useState } from "react";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
const localizer = momentLocalizer(moment)

function CalendarSub() {
    const [events, setEvents] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectDate, setSelectDate] = useState(null);
    const [eventTitle, setEventTitle] = useState('');
    const [selectEvent, setSelectEvent] = useState(null);

    const handleSelectSlot = (slotInfo) => {
        setShowModal(true);
        setSelectDate(slotInfo.start);
        setSelectEvent(null);
    }
    const handleSelectEvent = (event) => {
        setShowModal(true);
        setSelectEvent(event);
        setEventTitle(event.title);
        debugger
    }

    const saveEvent = () => {
        if (eventTitle && selectDate) {
            if (selectEvent) {
                const updateEvent = { ...selectEvent, title: eventTitle };
                const updateEvents = events.map((event) =>
                    event === selectEvent ? updateEvent : event
                );
                setEvents(updateEvents);
            } else {
                const newEvent = {
                    title: eventTitle,
                    start: selectDate,
                    end: moment(selectDate).add(1, 'hours').toDate(),
                };
                setEvents([...events, newEvent]);
            }
            setShowModal(false);
            setEventTitle('');
            setSelectEvent(null);
            
        }
        
    };

    const deleteEvents = () => {
        if (selectEvent) {
            const updatedEvents = events.filter((event) => event !== selectEvent);
            setEvents(updatedEvents);
            setShowModal(false);
            setEventTitle('');
            setSelectEvent(null);
        }
    };

    return (
        <>
            <div style={{ height: '500px' }}>
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ margin: '50px' }}
                    selectable={true}
                    onSelectSlot={handleSelectSlot}
                    onSelectEvent={handleSelectEvent}
                />
                {showModal && (
                    <div className="absolute z-10  top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-8 rounded shadow-md w-96">
                            <div className="flex justify-between mb-4">
                                <h5 className="text-xl font-bold">
                                    {selectEvent ? 'Edit Event' : 'Add Event'}
                                </h5>
                                <button
                                    type="button"
                                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                                    onClick={() => {
                                        setShowModal(false);
                                        setEventTitle('');
                                        setSelectEvent(null);
                                    }}
                                >
                                    Close
                                </button>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="eventTitle" className="block text-sm font-medium text-gray-600">Event Title:</label>
                                <input
                                    type="text"
                                    id="eventTitle"
                                    value={eventTitle}
                                    onChange={(e) => setEventTitle(e.target.value)}
                                    className="mt-1 p-2 border rounded-md w-full"
                                />
                            </div>
                            <div className="flex justify-end">
                                {selectEvent && (
                                    <button
                                        type="button"
                                        className="btn text-white px-4 py-2 bg-red-400 me-2 hover:bg-red-600 rounded-md focus:outline-none"
                                        onClick={deleteEvents}
                                    >
                                        Delete Event
                                    </button>
                                )}
                                <button
                                    type="button"
                                    onClick={saveEvent}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                                >
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default CalendarSub;
