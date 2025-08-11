//import React from 'react';
import BookType from './BookingType'
import DateTime from './DateTime'
import GuestInfo from './GuestInfo'

const BookingForm = () => {
    return (
        <div>
            <BookType />
            <DateTime />
            <GuestInfo />
        </div>
    );
};

export default BookingForm;