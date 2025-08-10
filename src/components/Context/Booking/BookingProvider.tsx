import { useState, type ReactNode } from 'react'
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
    const sessionType: string[] = ['Tandem', 'Experience'];
    const [chosen, setChosen] = useState('');
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
        setChosen(s);
    }

    const toggleSections = (section: SectionKey, prevSection?: SectionKey) => {
        setSections((prev) => ({
            ...prev,
            [section]: !prev[section],
            ...(prevSection ? { [prevSection]: !prev[prevSection] } : {}),
        }));
    };

    return (
        <BookingContext.Provider value={{
            sessionType,
            chosen,
            handelChosen,
            sections,
            toggleSections,
        }}>
            { children }
        </BookingContext.Provider>
    );
};