//import React from 'react';

const AboutUs = () => {
    return (
        <div className="content-container">
            <div className="content">
                <h1>About Us</h1>
                <div className="article">
                    <p>Skydive Brooklyn was founded in 1996, by Carlvin George, who is renowned worldwide as a superior skydiver!  Carlvin took his first plunge out of a moving aircraft as a U.S military paratrooper in 1985.  Carlvin proudly served in Dessert Storm and decided to pursue his recreational love for skydiving, upon his departure from the U.S military in 1995.  Born and bred in Brooklyn, it was only natural that he founded his base of operations in his native Borough.  So began the humble foundation of Skydive Brooklyn, with one aircraft and two dedicated employees.</p>
                    <p>Through word of mouth and a grassroots marketing campaign, Skydive Brooklyn had expanded its operations to 5 aircrafts and 10 employees by 1998 and attained membership to USPA (United States Parachute Association).  In 2000 Skydive relocated to a nearby facility including private runway, which the company now owns and operates.  We now boast an impressive 10 aircrafts with over 20 certified instructors, who rule the clouds in NYC.  We also proudly consult with paratroop divisions of the US military, which further demonstrates our vast superiority in the industry.  So come join us for an unforgettable experience!!</p>
                </div>
                <h2>Our Facility</h2>
                <div className="sbs">
                    <div className="img-wrapper">
                        <img src="/runway.jpg" alt="runway"/>
                    </div>
                    <div className="article">
                        <h4>Includes</h4>
                        <ul>
                            <li>3,500 Acre airstrip.</li>
                            <li>10 Full-time turbine aircraft seating up to 15 passengers each.</li>
                            <li>Gear rentals.</li>
                            <li>Freefly & wingsuit coaching available.</li>
                            <li>Full-time rigging services on site.</li>
                            <li>Mock up for pre-jump practice exits.</li>
                            <li>Shaded loading area.</li>
                            <li>Lounge.</li>
                            <li>Indoor restrooms.</li>
                            <li>Showers.</li>
                            <li>Soda & snack vending machines.</li>
                            <li>Picnic tables and free spectator viewing area.</li>
                        </ul>
                    </div>
                </div>
                <div className="sbs">
                    <div className="article">
                        <h3>Hours of Operation</h3>
                        <ul>
                            <li>Monday - Friday: 10:00 am - 6:00 pm</li>
                            <li>Saturday - Sunday: 7:30 am - 6:00 pm</li>
                        </ul>
                    </div>
                    <div className="article">
                        <h3>Reservation Times</h3>
                        <ul>
                            <li>Monday - Friday: 10:30 am - 5:00 pm</li>
                            <li>Saturday - Sunday: 8:00 am - 5:00 pm</li>
                        </ul>
                        <p>Walk-ins are welcome but reservations take top priority.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;