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

    const [isFirstNameValid, setFirstNameValid] = useState<boolean>(false);
    const [isLastNameValid, setLastNameValid] = useState<boolean>(false);
    const [isEmailValid, setEmailValid] = useState<boolean>(false);
    const [isPhoneValid, setPhoneValid] = useState<boolean>(false);

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
        toggleSections
    } = context;

    const allGreen = () => isFirstNameValid && isLastNameValid && isEmailValid && isPhoneValid;

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, type: string) => {
        const value = e.target.value;

        if (type === 'first name') {
            setFirstName(value);

        } else if (type === 'last name') {
            setLastName(value);
        }
    }

    const handleNameError = (type: string) => {
        const regex = /^[a-zA-Z0-9 .,?!'"-]*$/;

        if (type === 'first name') {
            if (firstName.trim() === '' || firstName.length <= 2) {
                setFirstNameError(`Please enter a valid ${type}. Must be at least 3 characters.`);
                setFirstNameValid(false);
            } else if (!regex.test(firstName)) {
                setFirstNameError(specialChar);
                setFirstNameValid(false);
            } else {
                setFirstNameError('');
                setFirstNameValid(true);
            }
        } else if (type === 'last name') {
            if (lastName.trim() === '' || lastName.length <= 2) {
                setLastNameError(`Please enter a valid ${type}. Must be at least 3 characters.`);
                setLastNameValid(false);
            } else if (!regex.test(lastName)) {
                setLastNameError(specialChar);
                setLastNameValid(false);
            } else {
                setLastNameError('');
                setLastNameValid(true);
            }
        }
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);
    };

    const handleEmailError = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(email)) {
            setEmailError('');
            setEmailValid(true);
        } else {
            setEmailError('Please enter a valid email address.');
            setEmailValid(false);
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

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, selectionStart, selectionEnd } = e.target;
        const formattedValue = getFormattedPhoneNumber(value);
        setPhone(formattedValue);

        setTimeout(() => {
            if (phoneRef.current && selectionStart !== null && selectionEnd !== null) {
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
            setPhoneValid(false);
        } else {
            setPhoneError('');
            setPhoneValid(true);
        }
    }

    return (
        <div className="guest-info">
            <div className="info-fields">
                <div className="field">
                    <label htmlFor="first-name">First Name<sup>*</sup> <span>{isFirstNameValid && !firstNameError ? checkMark : ''}</span></label>
                    <input
                        className={firstNameError ? 'error-border' : ''}
                        value={firstName}
                        type='text'
                        id='first-name'
                        onChange={ (e) => handleNameChange(e, "first name") }
                        onBlur={() => handleNameError("first name")}
                        required={ true }
                        aria-invalid={!!firstNameError} />
                    {firstNameError && <small className="error">{firstNameError}</small>}
                </div>
                <div className="field">
                    <label htmlFor="last-name">Last Name<sup>*</sup> <span>{isLastNameValid && !lastNameError ? checkMark : ''}</span></label>
                    <input
                        className={lastNameError ? 'error-border' : ''}
                        value={lastName}
                        type='text'
                        id='last-name'
                        onChange={ (e) => handleNameChange(e, "last name") }
                        onBlur={() => handleNameError("last name")}
                        required={ true }
                        aria-invalid={!!lastNameError} />
                    {lastNameError && <small className="error">{lastNameError}</small>}
                </div>
                <div className="field">
                    <label htmlFor="email">E-mail<sup>*</sup> <span>{isEmailValid && !emailError ? checkMark : ''}</span></label>
                    <input
                        className={emailError ? 'error-border' : ''}
                        value={email}
                        type='email'
                        id='email'
                        onChange={ (e) => handleEmailChange(e) }
                        onBlur={handleEmailError}
                        required={ true }
                        aria-invalid={!!emailError} />
                    {emailError && <small className="error">{emailError}</small>}
                </div>
                <div className="field">
                    <label htmlFor="phone">Phone Number<sup>*</sup> <span>{isPhoneValid && !phoneError ? checkMark : ''}</span></label>
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
                        <div className={`icon ${phoneConsent ? 'active' : ''}`} onClick={ () => handlePhoneConsent() }>
                            {phoneConsent ? <IoMdCheckboxOutline size={20} /> : <MdCheckBoxOutlineBlank size={20} />}
                        </div>
                    </div>
                    <small className="consent">
                        By providing your phone number, you agree to receive informational text messages from Skydive Brooklyn. Message frequency may vary. Msg & data rates may apply. Reply HELP for help or STOP to cancel.
                    </small>
                </div>
            </div>
            <div className="button-container">
                <button className='back-btn' onClick={() => toggleSections('dateTime', 'primaryInfo')}>Back</button>
                <button className='next-btn' disabled={!allGreen()} onClick={() => toggleSections('primaryInfo', 'agree')}>Next</button>
            </div>
        </div>
    );
};

export default GuestInfo;