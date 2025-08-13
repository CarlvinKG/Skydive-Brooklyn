//import React from 'react';
import Note from './Note'
import BookType from './BookingType'
import DateTime from './DateTime'
import GuestInfo from './GuestInfo'
import Agreement from './Agreement'
import './Booking.css'

const BookingForm = () => {
    return (
        <div>
            <Note />
            <BookType />
            <DateTime />
            <GuestInfo />
            <Agreement />
        </div>
    );
};

export default BookingForm;