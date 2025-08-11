import React, { useState, type ReactNode } from 'react'
import { GiAirplaneDeparture, GiClothes } from 'react-icons/gi'
import { BsBackpack3 } from 'react-icons/bs'
import { PriceContext } from './PriceContext.tsx'

type LayoutProps = {
    children: ReactNode;
};

type TandemTable = {
    label: string;
    online: number;
    walkIn: number;
};

type ExperiencedTable = {
    icon: React.JSX.Element;
    label: string;
    price: number;
};

export const PriceProvider = ({ children }: LayoutProps) => {
    const tandemPrice: number = 265;
    const experiencedPrice: number = 45;
    const [groupSize, setGroupSize] = useState<number>(1);
    const groupMax: number = 15;

    const getDiscountRate = () => {
        if (groupSize >= 10 && groupSize <= groupMax) return 0.75;
        if (groupSize >= 5) return 0.80;
        return 0.85;
    };

    const deposit: number = 65;
    const discountRate = getDiscountRate();
    const tandemDiscounted: number = Math.round(tandemPrice * discountRate * 100) / 100;
    const tandemTotal: number = Math.round(tandemDiscounted * groupSize * 100) / 100;
    const experiencedTotal: number = Math.round(experiencedPrice * groupSize * 100) / 100;

    const tandemTable: TandemTable[] = [
        {
            label: '1 - 4',
            online: tandemDiscounted,
            walkIn: tandemPrice
        }, {
            label: '5 - 9',
            online: (tandemPrice * 0.80),
            walkIn: (tandemPrice * 0.95)
        }, {
            label: '10 - 15',
            online: (tandemPrice * 0.75),
            walkIn: (tandemPrice * 0.90)
        }
    ]

    const experiencedTable: ExperiencedTable[] = [
        {
            icon: <GiAirplaneDeparture size={20} />,
            label: "14,500' Lift ticket",
            price: 45,
        }, {
            icon: <GiClothes size={20} />,
            label: "Gear rental",
            price: 40,
        }, {
            icon: <BsBackpack3 size={20} />,
            label: "Pack job",
            price: 10,
        }
    ]

    const handleGroupSize =(e: number) => {
        if (e !== groupSize) {
            setGroupSize(e)
        }
    }

    return (
        <PriceContext.Provider value={{
            tandemPrice,
            tandemDiscounted,
            deposit,
            groupMax,
            groupSize,
            setGroupSize,
            tandemTotal,
            tandemTable,
            experiencedTable,
            experiencedPrice,
            experiencedTotal,
            handleGroupSize
        }}>
            { children }
        </PriceContext.Provider>
    );
};