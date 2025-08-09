//import React from 'react';
import './Home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    const goTo = () => {
        navigate('/book-now');

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <div className="content-container">
            <h1 className="title">Welcome to Skydive Brooklyn!</h1>
            <div className="video-banner">
                <iframe
                        src="https://www.youtube.com/embed/j54R3P76aS4?autoplay=1&si=iOtkBp7avWW4CSN9&amp;controls=0&loop=1&mute=1&playlist=j54R3P76aS4&end=260"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"></iframe>
                <div className="no-click">
                    <div className="button" onClick={() => goTo()}>Book The Experience!</div>
                </div>
            </div>
            <div className="content">
                <div className="article">
                    <h3>Come see why Skydive Brooklyn is the premier skydiving location in Brooklyn!</h3>

                    <p>Would you like to revive the kid in you who believed you could fly?  Do you enjoy freedom; even from gravity, no matter how brief?  Does the natural high of adrenaline appeal to your senses?  If you've answered yes to any of these questions or would simply love to fuel your sense of adventure, you've come to the right place!!  Skydive Brooklyn is THE prime Skydiving facility within the New York area and is accommodating to beginners as well as the most experienced of sky divers.</p>

                    <p>Whether you're a curious first timer who's interested in a tandem skydive or an experienced professional who yearns for a safe, convenient, professional and scenic Skydive option...you have undoubtedly come to the right place.  We have operated and expanded our operations in Brooklyn for over 15 years and remain the only full service Skydiving & Training Facility in the Five Boroughs.</p>
                </div>
                <h2>Requirements & Recommendations</h2>
                <div className="article">
                    <h4>We Require:</h4>
                    <ul>
                        <li>MUST BE AT LEAST 18 YEARS OF AGE.</li>
                        <li>PHOTO ID is mandatory! A driver's license or passport.</li>
                        <li>WEIGH LESS THAN 225LBS (Flexible in many cases).</li>
                        <li>MUST BE IN GOOD HEALTH.</li>
                        <li>Sign a Legal Waiver.</li>
                    </ul>

                    <h4>We Recommend:</h4>
                    <ul>
                        <li><b>Wear comfortable attire:</b> Dress appropriately for the weather. While athletic type clothing is recommended, jeans or loose fitting attire will also be fine.</li>
                        <li><b>Bring sneakers:</b> Please refrain from wearing boots or shoes with hooks, flip-flops.</li>
                        <li><b>Call in case of bad weather:</b> If the weather appears inclement on the day of your jump, please call before you head out. We will let you know if we are able to jump on that day. If the conditions will not allow for jumping, you will be given the option to reschedule for a better day without penalty.</li>
                        <li><b>Put time aside:</b> Please plan on spending half of your day with us. Delays are possible.</li>
                    </ul>
                </div>
                <h2>Skydiving Safely with Skydive Brooklyn</h2>
                <div className="sbs">
                    <div className="article">
                        <h3>Skydive Brooklyn has ten of the safest and most versatile planes in the business!</h3>
                        <p>Skydive Brooklyn is extremely proud of its impeccable and untarnished safety record.  This has made us a trusted and preferred option for beginners and experienced skydivers alike.  Our ability to maintain such an impression track record is directly correlated to the use of up-to-date safety equipment, our highly trained certified professional staff and progressive training methods.  We are a proud member of the USPA (United States Parachute Association), which sets the highest standards for safety.  Your safety is our primary concern!</p>
                    </div>
                    <div className="img-wrapper">
                        <img src="/plane.jpg" alt="plane"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;