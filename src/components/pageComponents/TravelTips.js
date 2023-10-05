import React, {useEffect} from 'react';
import HeaderAd from "../adComponents/HeaderAd";
import SidebarAd from "../adComponents/SidebarAd";
import FooterAd from "../adComponents/FooterAd";
import {destinations_data} from "../../mockup_data";
import '../../styles/TravelTips.css';
import {useEventTracker} from "../../utils/useEventTracker";

let lastLoggedTime = 0;

function TravelTips() {
    const { trackEvent } = useEventTracker();
    const handleExitIntent = (event) =>{
        if(event.clientY < 50){
            const now = Date.now();
            if (now - lastLoggedTime > 1000) {
                trackEvent('exitIntentEvent', {page:'TravelTips'})
                lastLoggedTime = now;
            }
        }
    }

    useEffect(() => {
        const pageLoadTimestamp = new Date();
        document.addEventListener('mousemove', handleExitIntent);

        return () => {
            document.removeEventListener('mousemove', handleExitIntent);
            const pageExitTimestamp = new Date();
            const timeSpentOnPage = pageExitTimestamp - pageLoadTimestamp;
            const timeSpentInSeconds = timeSpentOnPage / 1000;
            trackEvent('timeSpent', {page: 'Destinations', timeSpent: `${Math.round(timeSpentInSeconds)}s`});
        };

    }, [trackEvent]);

    return (
        <div className="travel-tips-container">
            <HeaderAd imgSource="header-travel-agency-mockup-ad.jpg"/>
            <SidebarAd imgSource="sidebar-travel-gear-mockup.jpg"/><br/>
            <h2 className="travel-tips-main-title">Travel Tips</h2><br/>
            <h3 className="travel-tips-title">Travelling soon? Some things to remember</h3><br/>
            <p className="travel-tips-main-paragraph">Here are some simple tips to keep in mind while travelling those destinations</p><br/><br/>
            <div className="travel-tips-content">
                {destinations_data.map((destinations, index) => (
                    <div key={index} className="travel-tips-card-container">
                        <div className="travel-tips-card-content">
                            <img src={destinations.image} alt={destinations.title}/>
                            <h3 className="travel-tips-card-title">{destinations.title}</h3>
                        </div>
                        <ul className="travel-tips-card-text">
                            {destinations.tips.split('\n').map((tip, tipIndex) => (
                                <li key={tipIndex}>{tip}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <FooterAd imgSource="footer-hotel-travel-ad.jpg" />
        </div>
    );
}

export default TravelTips