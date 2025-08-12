import { createContext } from 'react'

type SectionKey =
    | 'dateTime'
    | 'groupSize'
    | 'primaryInfo'
    | 'secondaryInfo'
    | 'agree'
    | 'payment'
    | 'confirmation';

type BookingContextType = {
    sessionType: string[];
    chosen: string;
    handelChosen: (s: string) => void;
    sections: {
        dateTime: boolean
        groupSize: boolean
        primaryInfo: boolean
        secondaryInfo: boolean
        agree: boolean
        payment: boolean
        confirmation: boolean
    };
    toggleSections: (section: SectionKey, prevSection?: SectionKey) => void;
    selectedDate: Date | undefined;
    setSelectedDate: (date: Date | undefined) => void;
    selectedTime: string | undefined;
    setSelectedTime: (time: string) => void;
    firstName: string;
    setFirstName: (firstName: string) => void;
    lastName: string;
    setLastName: (lastName: string) => void;
    email: string;
    setEmail: (email: string) => void;
    phone: string;
    setPhone: (phone: string) => void;
    phoneConsent: boolean;
    handlePhoneConsent:  () => void;
    note: string;
    setNote: (note: string) => void;
};

export const BookingContext = createContext<BookingContextType | null>(null)