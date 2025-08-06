//import React from 'react';

import MessageForm from "../../components/ContactUs/MessageForm.tsx";
import OtherMethods from "../../components/ContactUs/OtherMethods.tsx";

const ContactUs = () => {
    return (
        <div className="content-container">
            <h1 className="title">Contact Us</h1>
            <div className="content">
                <div className="contact">
                    <MessageForm />
                    <OtherMethods />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;