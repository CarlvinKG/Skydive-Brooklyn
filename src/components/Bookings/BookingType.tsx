import { useContext } from 'react';
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from 'react-icons/io'
import { BookingContext } from '../Context/Booking/BookingContext'

const BookType = () => {
    const context = useContext(BookingContext);
    if (!context) {
        return <p>Error: Booking context is missing. Ensure you're wrapped in BookingProvider.</p>;
    }

    const { sessionType, chosen, handelChosen, } = context;

    return (

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
    );
};

export default BookType;