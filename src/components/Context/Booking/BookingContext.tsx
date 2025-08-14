import { createContext } from 'react'
import type { SectionKey, AgreementsKey } from './Types'

type BookingContextType = {
    sessionType: string[];
    chosen: string;
    handleChosen: (s: string) => void;
    sections: {
        agree: boolean
        confirmation: boolean
        dateTime: boolean
        groupSize: boolean
        payment: boolean
        primaryInfo: boolean
        sessionType: boolean
    };
    toggleSections: (prevSection: SectionKey, nextSection: SectionKey) => void;
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
    handlePhoneConsent: () => void;
    note: string;
    setNote: (note: string) => void;
    agreements: {
        age: boolean
        arrival: boolean
        duration: boolean
        health: boolean
        id: boolean
        weather: boolean
        weight: boolean
    };
    toggleAgreement: (agreement: AgreementsKey) => void;
};

export const BookingContext = createContext<BookingContextType | null>(null)