import { useContext } from 'react';
import Note from './Note'
import BookType from './BookingType'
import DateTime from './DateTime'
import GuestInfo from './GuestInfo'
import Agreement from './Agreement'
import { BookingContext } from '../Context/Booking/BookingContext'
import './Booking.css'

const BookingForm = () => {
    const bookingContext = useContext(BookingContext);

    if (!bookingContext) {
        return <p>Error: Booking context is missing. Ensure you're wrapped in BookingProvider.</p>;
    }

    const { sections  } = bookingContext;

    return (
        <div className="booking-form">
            <Note />
            {
                sections.sessionType ? <BookType/>
                : sections.dateTime ? <DateTime />
                : sections.primaryInfo ? <GuestInfo />
                : sections.agree ? <Agreement />
                : ''
            }
        </div>
    );
};

export default BookingForm;