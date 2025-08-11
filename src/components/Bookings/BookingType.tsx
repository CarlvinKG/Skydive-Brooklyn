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

    const { sessionType, chosen, handelChosen  } = bookingContext;
    const { groupMax, handleGroupSize, tandemTotal, tandemDiscounted, deposit, experiencedTotal, experiencedPrice } = priceContext;

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
        <>
            <div className="sessions">
                {sessionType.map((session) =>  (
                    <div className="session-item" key={session}>
                        <div className="icon" onClick={() => handelChosen(session)}>
                                { chosen === session ? <IoMdRadioButtonOn /> : <IoMdRadioButtonOff /> }
                        </div>
                        <div className="session-name">
                            <p>{session}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="group-size">
                <label htmlFor="groupSize">Number of Guest</label>
                <input
                    disabled={!chosen}
                    defaultValue='1'
                    type="number"
                    id='group-size'
                    name='group-size'
                    min='1'
                    max={groupMax}
                    onChange={(e) => handleGroupSize(e.target.valueAsNumber)}
                />{chosen === "Tandem" ? ` x $${tandemDiscounted.toFixed(2)}/Per Person` : chosen === "Experienced" ? ` x $${experiencedPrice.toFixed(2)}/Per Person` : ''}
            </div>
            <div className="pricing">
                {renderPricing()}
            </div>
            <div className="button-container">
                <button disabled={!chosen}>Next</button>
            </div>
        </>
    );
};

export default BookType;