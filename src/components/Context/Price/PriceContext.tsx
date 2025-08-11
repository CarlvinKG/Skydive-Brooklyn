import React, { createContext } from 'react'

type PriceContextType = {
    experiencedPrice: number;
    experiencedTotal: number;
    tandemPrice: number;
    tandemDiscounted: number;
    groupMax: number;
    groupSize: number;
    deposit: number;
    setGroupSize: (size: number) => void;
    tandemTotal: number;
    tandemTable: {
        label: string,
        online: number,
        walkIn: number
    }[];
    experiencedTable: {
        icon: React.JSX.Element
        label: string,
        price: number
    }[];
    handleGroupSize: (e: number) => void;
};

export const PriceContext = createContext<PriceContextType | null>(null);