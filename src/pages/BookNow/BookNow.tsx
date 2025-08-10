//import React from 'react';
import BookType from '../../components/Bookings/BookingType'

const BookNow = () => {
    return (
        <div className="content-container">
            <h1 className="title">Book The Experience!</h1>
            <div className="content">
                <div className="article">
                    <BookType />
                </div>
            </div>
        </div>
    );
};

export default BookNow;