import React, { useContext } from 'react'
import { PriceContext } from '../../components/Context/PriceContext'
import './Prices.css'

const Prices = () => {
    const context = useContext(PriceContext);
    if (!context) {
        return <p>Error: Price context is missing. Ensure you're wrapped in PriceProvider.</p>;
    }
    const { tandemPrice, tandemPrices, experiencedPrices } = context;

    return (
        <div className="content-container">
            <div className="content">
                <h1>Prices</h1>
                <h3>Same low prices all year around!</h3>
                <div className="sbs">
                    <div className="article">
                        <h2>Tandem Skydive Prices</h2>
                        <div className="price-table">
                            <div className="table-header">
                                People
                            </div>
                            <div className="table-header">
                                Online
                            </div>
                            <div className="table-header">
                                Walk In
                            </div>
                            {tandemPrices.map((price, index) => (
                                <React.Fragment key={index}>
                                    <div className="cell">
                                        <p>{price.label}</p>
                                    </div>
                                    <div className="cell">
                                        <span className="reg-price">${tandemPrice.toFixed(2)}</span>
                                        <p>{price.online.toFixed(2)}</p>
                                    </div>
                                    <div className="cell">
                                        <p>{price.walkIn.toFixed(2)}</p>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                        <p className="m-0">Call us for walk in spots or same day availability.</p>
                    </div>
                    <div className="img-wrapper relative aspect-video">
                        <iframe width="560" height="315"
                                src="https://www.youtube.com/embed/TwpXYAECM5I?autoplay=1&si=qsipd8XoC5O8OsVO&amp;controls=0&loop=1&mute=1&playlist=TwpXYAECM5I"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        <div className="no-click"></div>
                    </div>
                </div>

                <div className="sbs">
                    <div className="article">
                        <h2>Experienced Skydive Prices</h2>
                        <div className="experienced-prices">
                            {experiencedPrices.map((price, index) => (
                                <p key={index}>
                                    <span className="icon">{price.icon}</span>
                                    <span className="label">{price.label}:</span>
                                    ${price.price.toFixed(2)}</p>
                            ))}

                        </div>
                    </div>
                    <div className="img-wrapper relative aspect-video">
                        <iframe width="560" height="315"
                                src="https://www.youtube.com/embed/Ti5bGDpK3GE?autoplay=1&si=LWsCn6ObsCq1EfsV&amp;controls=0&loop=1&mute=1&playlist=Ti5bGDpK3GE"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        <div className="no-click"></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Prices;