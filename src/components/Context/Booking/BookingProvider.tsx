import { useState, type ReactNode } from 'react'
import { BookingContext } from './BookingContext'
import type { SectionKey, AgreementsKey } from './Types'

type LayoutProps = {
    children: ReactNode;
};

export const BookingProvider = ({ children }: LayoutProps) => {
    const sessionType: string[] = ['Tandem', 'Experienced'];
    const [chosen, setChosen] = useState('');
    const [selectedDate, setSelectedDate] = useState<Date | undefined>();
    const [selectedTime, setSelectedTime] = useState('');
    const [sections, setSections] = useState<Record<SectionKey, boolean>>({
        sessionType: true,
        dateTime: false,
        groupSize: false,
        primaryInfo: false,
        agree: false,
        payment: false,
        confirmation: false,
    });
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [phoneConsent, setPhoneConsent] = useState<boolean>(false);
    const [note, setNote] = useState<string>('');
    const [agreements, setAgreements] = useState<Record<AgreementsKey, boolean>>({
        age: false,
        health: false,
        weight: false,
        id: false,
        arrival: false,
        duration: false,
        weather: false,
    });

    const handleChosen = (s: string) => {
        if (s !== chosen) {
            setChosen(s);
        }
    }

    const handlePhoneConsent = () => {
        setPhoneConsent(!phoneConsent)
    }

    const toggleSections = (prevSection: SectionKey, nextSection: SectionKey) => {
        setSections((prev) => ({
            ...prev,
            [prevSection]: !prev[prevSection],
            ...(nextSection ? { [nextSection]: !prev[nextSection] } : {}),
        }));
    };

    const toggleAgreement = (agreement: AgreementsKey) => {
        setAgreements((prev) => ({
            ...prev,
            [agreement]: !prev[agreement]
        }));
    };

    return (
        <BookingContext.Provider value={{
            sessionType,
            chosen,
            handleChosen,
            sections,
            toggleSections,
            selectedDate,
            setSelectedDate,
            selectedTime,
            setSelectedTime,
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
            note,
            setNote,
            agreements,
            toggleAgreement
        }}>
            { children }
        </BookingContext.Provider>
    );
};