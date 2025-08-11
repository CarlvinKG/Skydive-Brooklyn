//import React from 'react';
import BookingForm from '../../components/Bookings/BookingForm'

const BookNow = () => {
    return (
        <div className="content-container">
            <h1 className="title">Book The Experience!</h1>
            <div className="content">
                <div className="article">
                    <div className="note">
                        <p>Please note:</p>

                        <ul>
                            <li>Online reservations must be made at least 24 hours in advance.</li>
                            <li>All members of your group are <b>required</b> to sign a waiver before takeoff.</li>
                            <li>For short notice & same day bookings, please call our office at (718) 995-8200.</li>
                        </ul>
                    </div>
                    <BookingForm />
                </div>
            </div>
        </div>
    );
};

export default BookNow;