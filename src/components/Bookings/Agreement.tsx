import { useState } from 'react'
import { IoMdCheckboxOutline } from 'react-icons/io'
import { MdCheckBoxOutlineBlank } from 'react-icons/md'

type AgreementsKey =
    | 'age'
    | 'health'
    | 'weight'
    | 'id'
    | 'arrival'
    | 'duration'
    | 'weather';

type AgreementsArrayKey = {
    label: string;
    description: string;
};

const Agreement = () => {
    const [agreements, setAgreements] = useState<Record<AgreementsKey, boolean>>({
        age: false,
        health: false,
        weight: false,
        id: false,
        arrival: false,
        duration: false,
        weather: false,
    });

    const agreementsArray: AgreementsArrayKey[] = [
        {
            label: "age",
            description: "You must be at least 18 years of age to skydive (without exception).",
        }, {
            label: "health",
            description: "You must be in general good health.",
        }, {
            label: "weight",
            description: "You must weigh less than 220lbs (flexible depending on height compared to weight for an additional fee).",
        }, {
            label: "id",
            description: "You must bring a valid government issued photo ID (such as a driver's license or a passport).",
        }, {
            label: "arrival",
            description: "I understand that the time I selected is my ARRIVAL time and NOT my scheduled jump time.",
        }, {
            label: "duration",
            description: "I understand that I should plan to spend half of my day (4 hours) at the airport on the day of my skydive.",
        }, {
            label: "weather",
            description: "I understand that skydiving is a weather dependent sport and there is NO guarantee I will be able to skydive on the date I have selected.",
        }
    ];

    const toggleAgreement = (agreement: AgreementsKey) => {
        setAgreements((prev) => ({
            ...prev,
            [agreement]: !prev[agreement]
        }));
    };

    const allGreen = () => agreements.age && agreements.health && agreements.weight && agreements.id && agreements.arrival && agreements.duration && agreements.weather;

    return (
        <div className='agreements-container'>
            <div className="agreements">
                {agreementsArray.map(agreement => (
                    <div key={agreement.label} className='agreement'>
                        <div className={`icon ${agreements[agreement.label as AgreementsKey] ? 'active' : ''}`} onClick={() => toggleAgreement(agreement.label)}>
                            {agreements[agreement.label as AgreementsKey] ? <IoMdCheckboxOutline size={20} /> : <MdCheckBoxOutlineBlank size={20} />}
                        </div>
                        <div className="description">{ agreement.description }</div>
                    </div>
                ))}
            </div>

            <div className="button-container">
                <button className='back-btn'>Back</button>
                <button className='next-btn' disabled={!allGreen()}>Next</button>
            </div>
        </div>
    );
};

export default Agreement;