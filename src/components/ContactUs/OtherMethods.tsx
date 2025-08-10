import { useState, useEffect } from 'react'
import { PiPhoneCallThin, PiChatCircleDotsThin } from 'react-icons/pi'

const OtherMethods = () => {
    const chatStart = "10:00:00";
    const chatEnd = "17:00:00";

    const [chatOpen, setChatOpen] = useState(false);

    const getTimeToday = (timeStr: string) => {
        const [hours, minutes, seconds] = timeStr.split(":").map(Number);
        const date = new Date();
        date.setHours(hours, minutes, seconds || 0, 0);
        return date;
    };

    const chatTime = () => {
        const now = new Date();
        const startTime = getTimeToday(chatStart)
        const endTime = getTimeToday(chatEnd)

        setChatOpen(now >= startTime && now < endTime);
    }

    useEffect(() => {
        chatTime();

        const interval = setInterval(chatTime, 30 * 1000); // check every 30 sec

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="other-methods">
            <div className="article">
                <div className="info">
                    <PiPhoneCallThin size={70} />
                    <h4>Call Us</h4>
                    <h5>(718) 995-8200</h5>
                    <p><b>Phone Hours</b></p>
                    <p><b>Monday - Friday:</b></p>
                    <p>9:30 am - 5:00 pm</p>
                    <p><b>Saturday - Sunday:</b></p>
                    <p>8:30 am - 5:00 pm</p>
                </div>
            </div>
            <div className="article">
                <div className="info">
                    <PiChatCircleDotsThin size={70} />
                    <h4>Live Chat</h4>
                    <h5>Quick answers to all your questions.</h5>
                    <p><b>Chat Hours</b></p>
                    <p><b>Monday - Sunday:</b></p>
                    <p>10:00 am - 5:00 pm</p>
                    <button disabled={!chatOpen}>{chatOpen ? 'Chat Now' : 'Currently Offline'}</button>
                </div>
            </div>
        </div>
    );
};

export default OtherMethods;