import { createContext, useState, type ReactNode } from 'react'
import { GiAirplaneDeparture, GiClothes } from 'react-icons/gi'
import { BsBackpack3 } from 'react-icons/bs'

type LayoutProps = {
    children: ReactNode;
};

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
        icon: JSX.Element
        label: string,
        price: number
    }[];
};

export const PriceContext = createContext<PriceContextType | null>(null);

export const PriceProvider = ({ children }: LayoutProps) => {
    const tandemPrice: number = 265;
    const [groupSize, setGroupSize] = useState<number>(0);
    const groupMax: number = 15;

    const getDiscountRate = () => {
        if (groupSize >= 10 && groupSize <= groupMax) return 0.75;
        if (groupSize >= 5) return 0.80;
        return 0.85;
    };

    const discountRate = getDiscountRate();
    const tandemDiscounted = Math.round(tandemPrice * discountRate * 100) / 100;
    const tandemTotal = Math.round(tandemDiscounted * groupSize * 100) / 100;

    const tandemPrices = [
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

    const experiencedPrices = [
        {
            icon: <GiAirplaneDeparture size={20} />,
            label: "13,500' Lift ticket",
            price: 30,
        }, {
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

    return (
        <PriceContext.Provider value={{
            tandemPrice,
            tandemDiscounted,
            groupMax,
            groupSize,
            setGroupSize,
            tandemTotal,
            tandemPrices,
            experiencedPrices
        }}>
            { children }
        </PriceContext.Provider>
    );
};

export default PriceContext;