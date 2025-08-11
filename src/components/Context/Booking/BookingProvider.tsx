import { useState, useEffect, type ReactNode } from 'react'
import { BookingContext } from './BookingContext'

type LayoutProps = {
    children: ReactNode;
};

type SectionKey =
    | 'dateTime'
    | 'groupSize'
    | 'primaryInfo'
    | 'secondaryInfo'
    | 'agree'
    | 'payment'
    | 'confirmation';

export const BookingProvider = ({ children }: LayoutProps) => {
    const sessionType: string[] = ['Tandem', 'Experienced'];
    const [chosen, setChosen] = useState('');
    const [selectedDate, setSelectedDate] = useState<Date | undefined>();
    const [selectedTime, setSelectedTime] = useState('');
    const [sections, setSections] = useState<Record<SectionKey, boolean>>({
        dateTime: false,
        groupSize: false,
        primaryInfo: false,
        secondaryInfo: false,
        agree: false,
        payment: false,
        confirmation: false,
    });

    const handelChosen = (s: string) => {
        if (s !== chosen) {
            setChosen(s);
        }
    }

    const toggleSections = (section: SectionKey, prevSection?: SectionKey) => {
        setSections((prev) => ({
            ...prev,
            [section]: !prev[section],
            ...(prevSection ? { [prevSection]: !prev[prevSection] } : {}),
        }));
    };

    useEffect(() => {
        if (chosen) {
            toggleSections("dateTime");
        }
    }, [chosen]);

    return (
        <BookingContext.Provider value={{
            sessionType,
            chosen,
            handelChosen,
            sections,
            toggleSections,
            selectedDate,
            setSelectedDate,
            selectedTime,
            setSelectedTime,
        }}>
            { children }
        </BookingContext.Provider>
    );
};