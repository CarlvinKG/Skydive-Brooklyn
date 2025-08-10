import React, { createContext } from 'react'

type PriceContextType = {
    tandemPrice: number;
    tandemDiscounted: number;
    groupMax: number;
    groupSize: number;
    setGroupSize: (size: number) => void;
    tandemTotal: number;
    tandemPrices: {
        label: string,
        online: number,
        walkIn: number
    }[];
    experiencedPrices: {
        icon: React.JSX.Element
        label: string,
        price: number
    }[];
};

export const PriceContext = createContext<PriceContextType | null>(null);