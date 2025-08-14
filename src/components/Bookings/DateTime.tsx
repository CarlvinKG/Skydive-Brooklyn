import { useContext } from 'react';
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/style.css'
import { BookingContext } from '../Context/Booking/BookingContext'

const DateTime = () => {
    const context = useContext(BookingContext);
    if (!context) {
        return <p>Error: Booking context is missing. Ensure you're wrapped in BookingProvider.</p>;
    }

    const { sections, selectedDate, setSelectedDate, selectedTime, setSelectedTime, toggleSections } = context;

    const today = new Date();
    const dayAfterTomorrow = new Date(today);
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);
    dayAfterTomorrow.setHours(0, 0, 0, 0)

    let availableTimes = [];

    for (let i = 10; i <= 17; i++) {
        if (i < 12) {
            availableTimes.push(i + ":00 am");
        } else if (i === 12) {
            availableTimes.push(i + ":00 pm");
        } else {
            availableTimes.push((i - 12) + ":00 pm");
        }
    }

    return (
        <div className={`datetime ${sections.dateTime ? 'opened' : ''}`}>
            <div className='date'>
                <DayPicker
                    mode="single"
                    selected={ selectedDate }
                    onSelect={ setSelectedDate }
                    navLayout="around"
                    disabled={{ before: dayAfterTomorrow }}
                />
            </div>
            <div className="time">
                <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} disabled={!selectedDate}>
                    <option value="" disabled hidden>Please select a time</option>
                    {availableTimes.map((time) => (
                        <option key={time} value={time}>{time}</option>
                    ))}
                </select>
            </div>
            <div className="button-container">
                <button className='back-btn' onClick={() => toggleSections('sessionType','dateTime')}>Back</button>
                <button className='next-btn' disabled={!selectedDate || selectedTime === ''} onClick={() => toggleSections('dateTime', 'primaryInfo')}>Next</button>
            </div>
        </div>
    );
};

export default DateTime;