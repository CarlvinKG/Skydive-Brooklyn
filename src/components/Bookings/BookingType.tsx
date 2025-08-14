import { useContext } from 'react';
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from 'react-icons/io'
import { BookingContext } from '../Context/Booking/BookingContext'
import { PriceContext } from '../Context/Price/PriceContext'

const BookType = () => {
    const bookingContext = useContext(BookingContext);
    const priceContext = useContext(PriceContext);

    if (!bookingContext) {
        return <p>Error: Booking context is missing. Ensure you're wrapped in BookingProvider.</p>;
    }

    if (!priceContext) {
        return <p>Error: Price context is missing. Ensure you're wrapped in PriceProvider.</p>;
    }

    const { sections, sessionType, chosen, handleChosen, toggleSections } = bookingContext;
    const { groupMax, handleGroupSize, tandemTotal, tandemDiscounted, deposit, experiencedTotal, experiencedPrice, groupSize } = priceContext;

    const renderPricing = () => {
        if (chosen === "Tandem") {
            return (
                <>
                    <p><b>Total Cost:</b> ${tandemTotal} <br />
                        <b>Due Now:</b> ${deposit}</p>
                </>
            );
        } else if (chosen === "Experienced") {
            return (
                <>
                    <p><b>Total Cost:</b> ${experiencedTotal} <br />
                        <b>Due Now:</b> ${experiencedPrice}</p>
                </>
            );
        }
    }


    return (
        <div className={`booking-type ${sections.sessionType ? 'opened' : ''}`}>
            <div className="sessions">
                {sessionType.map((session) =>  (
                    <div className="session-item" key={session}>
                        <div className={`icon ${chosen === session ? 'active' : ''}`} onClick={() => handleChosen(session)}>
                                { chosen === session ? <IoMdRadioButtonOn size={20} /> : <IoMdRadioButtonOff size={20} /> }
                        </div>
                        <div className="session-name">
                            <p>{session}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="group-size">
                <label htmlFor="groupSize">Number of Guest</label>
                <div className="w-full mb-2">
                    <input
                    disabled={!chosen}
                    value={groupSize}
                    type="number"
                    id='group-size'
                    name='group-size'
                    min='1'
                    max={groupMax}
                    onChange={(e) => handleGroupSize(e.target.valueAsNumber)}
                />
                    {chosen === "Tandem" ? ` x $${tandemDiscounted.toFixed(2)}/Per Person` : chosen === "Experienced" ? ` x $${experiencedPrice.toFixed(2)}/Per Person` : ''}
                </div>
            </div>
            <div className="pricing">
                {renderPricing()}
            </div>
            <div className="button-container">
                <button onClick={() => toggleSections('sessionType','dateTime')} disabled={!chosen}>Next</button>
            </div>
        </div>
    );
};

export default BookType;