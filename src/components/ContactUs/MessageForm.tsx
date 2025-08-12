import React, { useState } from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import './ContactUs.css'

const MessageForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');
    const specialChar: string = "Special characters are not allowed.";
    const check = <IoMdCheckmarkCircleOutline size={18} />;

    const isNameValid = () => name !== '' && nameError === '';
    const isEmailValid = () => email !== '' && emailError === '';
    const isMessageValid = () => message !== '' && messageError === '';

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (allGreen()) {
            setSubmitted(true);
        }
    }

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, type: string) => {
        const value = e.target.value;
        const regex = /^[a-zA-Z0-9 .,?!'"-]*$/;

        if (value.trim() !== '' && value.length > 2) {
            if (regex.test(value)) {
                if (type === 'name') {
                    setName(value);
                    setNameError('');
                } else if (type === 'message') {
                    setMessage(value);
                    setMessageError('');
                }
            } else {
                if (type === 'name') {
                    setNameError(specialChar)
                } else if (type === 'message') {
                    setMessageError(specialChar);
                }
            }
        } else {
            if (type === 'name') {
                setNameError(`Please enter a valid ${type}. Must be at least 3 characters.`);
            } else if (type === 'message') {
                setMessageError(`Please enter a valid ${type}. Must be at least 3 characters.`)
            }
        }
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(value)) {
            setEmailError('');
            setEmail(value);
        } else {
            setEmailError('Please enter a valid email address.');
        }
    };

    const allGreen = () =>
        isNameValid() &&
        isEmailValid() &&
        isMessageValid();

    if (submitted) {
        return (
            <div className="message-form">
                <h2>Your message has been sent!</h2>
                <p>Thank you {name}.</p>
                <p>A representative will be in contact with you shortly at {email}.</p>
                <p>About you message: {message}</p>
            </div>
        )
    }

    return (
        <div className="message-form">
            <h2>Tell us what's on your mind.</h2>
            <p>Fill out your information and a representative will reach out to you.</p>
            <form className="send-message" onSubmit={ handleOnSubmit }>
                <fieldset>
                    <div className="field">
                        <label htmlFor="name">Your Name <span>{name && !nameError && check}</span></label>
                        <input
                            className={nameError ? 'error-border' : ''}
                            type='text'
                            id='name'
                            onBlur={ (e) => handleOnChange(e, "name") }
                            required={ true }
                            aria-invalid={!!nameError} />
                        {nameError && <small className="error">{nameError}</small>}
                    </div>
                    <div className="field">
                        <label htmlFor="email">E-mail <span>{email && !emailError && check}</span></label>
                        <input
                            type='email'
                            id='email'
                            onBlur={ (e) => handleEmailChange(e) }
                            required={ true }
                            aria-invalid={!!emailError} />
                        {emailError && <small className="error">{emailError}</small>}
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message <span>{message && !messageError && check}</span></label>
                        <textarea
                            id="message"
                            className={messageError ? 'error-border' : ''}
                            rows={ 6 }
                            maxLength={1000}
                            required={ true }
                            onBlur={ (e) => handleOnChange(e, "message") }
                            aria-invalid={!!messageError}
                        ></textarea>
                        <div className="grid grid-cols-[60%_40%] items-center w-full">
                            <small className="error order-1">{messageError && `${messageError}`}</small>
                            <small className="order-2 text-end">{message.length} / 1000 characters</small>
                        </div>
                    </div>
                    <div className='btn-container'>
                        <button className="btn" type="submit" disabled={!allGreen()}>
                            Submit
                        </button>
                    </div>
                </fieldset>
            </form>

        </div>
    );
};

export default MessageForm;