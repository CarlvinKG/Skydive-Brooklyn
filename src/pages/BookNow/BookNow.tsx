//import React from 'react';
import BookingForm from '../../components/Bookings/BookingForm'

const BookNow = () => {
    return (
        <div className="content-container">
            <h1 className="title">Book The Experience!</h1>
            <div className="content">
                <div className="article">
                    <div className="mx-auto w-full md:w-[50%]">
                        <BookingForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookNow;