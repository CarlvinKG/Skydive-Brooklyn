import React, { useContext, useState, useRef } from 'react'
import { BookingContext } from '../Context/Booking/BookingContext'
import { IoMdCheckmarkCircleOutline, IoMdCheckboxOutline } from 'react-icons/io'
import { MdCheckBoxOutlineBlank } from 'react-icons/md'

const GuestInfo = () => {
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const specialChar: string = "Special characters are not allowed.";
    const checkMark = <IoMdCheckmarkCircleOutline size={18} />;
    const phoneRef = useRef<HTMLInputElement>(null);

    const context = useContext(BookingContext);
    if (!context) {
        return <p>Error: Booking context is missing. Ensure you're wrapped in BookingProvider.</p>;
    }

    const {
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        phone,
        setPhone,
        phoneConsent,
        handlePhoneConsent,
    } = context;

    const isFirstNameValid = () => firstName !== '' && firstNameError === '';
    const isLastNameValid = () => lastName !== '' && lastNameError === '';
    const isEmailValid = () => email !== '' && emailError === '';
    const isPhoneValid = () => phone !== '' && phoneError === '';

    const allGreen = () => isFirstNameValid() && isLastNameValid() && isEmailValid() && isPhoneValid();

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, type: string) => {
        const value = e.target.value;
        const regex = /^[a-zA-Z0-9 .,?!'"-]*$/;

        if (value.trim() !== '' && value.length > 2) {
            if (regex.test(value)) {
                if (type === 'first name') {
                    setFirstName(value);
                    setFirstNameError('');
                } else if (type === 'last name') {
                    setLastName(value);
                    setLastNameError('');
                }
            } else {
                if (type === 'first name') {
                    setFirstNameError(specialChar)
                } else if (type === 'last name') {
                    setLastNameError(specialChar)
                }
            }
        } else {
            if (type === 'first name') {
                setFirstNameError(`Please enter a valid ${type}. Must be at least 3 characters.`)
            } else if (type === 'last name') {
                setLastNameError(`Please enter a valid ${type}. Must be at least 3 characters.`)
            }
        }
    }

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

    const getFormattedPhoneNumber = (value: string) => {
        const digits: string = value.replace(/\D/g, '').slice(0, 10);
        let res: string = '';

        if (digits.length > 0) {
            res = `${digits.slice(0, 3)}`;
        }

        if (digits.length >= 4) {
            res = `(${res}) ${digits.slice(3, 6)}`;
        }

        if (digits.length >= 7) {
            res += `-${digits.slice( 6)}`;
        }
        return res;
    }

    const handlePhoneChange = (e) => {
        const { value, selectionStart, selectionEnd } = e.target;
        const formattedValue = getFormattedPhoneNumber(value);
        setPhone(formattedValue);

        setTimeout(() => {
            if (phoneRef.current) {
                const position = formattedValue.indexOf(
                    value[selectionStart - 1],
                    selectionEnd - 1
                ) +1 || selectionEnd;
                phoneRef.current.setSelectionRange(position, position);
            }
        }, 0)
    }

    const handlePhoneError = () => {
        if (phone.length < 14) {
            setPhoneError('Please enter valid phone number.');
        } else {
            setPhoneError('');
        }
    }

    return (
        <div className="guest-info">
            <div className="info-fields">
                <div className="field">
                    <label htmlFor="first-name">First Name<sup>*</sup> <span>{firstName && !firstNameError && checkMark}</span></label>
                    <input
                        className={firstNameError ? 'error-border' : ''}
                        type='text'
                        id='first-name'
                        onBlur={ (e) => handleOnChange(e, "first name") }
                        required={ true }
                        aria-invalid={!!firstNameError} />
                    {firstNameError && <small className="error">{firstNameError}</small>}
                </div>
                <div className="field">
                    <label htmlFor="last-name">Last Name<sup>*</sup> <span>{lastName && !lastNameError && checkMark}</span></label>
                    <input
                        className={lastNameError ? 'error-border' : ''}
                        type='text'
                        id='last-name'
                        onBlur={ (e) => handleOnChange(e, "last name") }
                        required={ true }
                        aria-invalid={!!lastNameError} />
                    {lastNameError && <small className="error">{lastNameError}</small>}
                </div>
                <div className="field">
                    <label htmlFor="email">E-mail<sup>*</sup> <span>{email && !emailError && checkMark}</span></label>
                    <input
                        type='email'
                        id='email'
                        onBlur={ (e) => handleEmailChange(e) }
                        required={ true }
                        aria-invalid={!!emailError} />
                    {emailError && <small className="error">{emailError}</small>}
                </div>
                <div className="field">
                    <label htmlFor="phone">Phone Number<sup>*</sup> <span>{phone.length === 14 && !phoneError && checkMark}</span></label>
                    <input
                        className={phoneError ? 'error-border' : ''}
                        value={phone}
                        ref={phoneRef}
                        type='tel'
                        id='phone'
                        placeholder='123-456-7890'
                        onChange={(e) => handlePhoneChange(e)}
                        onBlur={handlePhoneError}
                        required={ true }
                        aria-invalid={!!phoneError} />
                    {phoneError && <small className="error">{phoneError}</small>}
                </div>
                <div className="phone-consent">
                    <div className="checkBox">
                        <div className="icon" onClick={ () => handlePhoneConsent() }>
                            {phoneConsent ? <IoMdCheckboxOutline size={20} /> : <MdCheckBoxOutlineBlank size={20} />}
                        </div>
                    </div>
                    <small className="consent">
                        By providing your phone number, you agree to receive informational text messages from Skydive Sussex. Message frequency may vary. Msg & data rates may apply. Reply HELP for help or STOP to cancel.
                    </small>
                </div>
            </div>
            <div className="button-container">
                <button className='back-btn'>Back</button>
                <button className='next-btn' disabled={!allGreen()}>Next</button>
            </div>
        </div>
    );
};

export default GuestInfo;