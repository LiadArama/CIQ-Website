import React, { useEffect } from 'react';
import HeaderAd from "../adComponents/HeaderAd";
import SidebarAd from "../adComponents/SidebarAd";
import FooterAd from "../adComponents/FooterAd";
import {destinations_data} from "../../mockup_data";
import '../../styles/Destinations.css';
import {useEventTracker} from "../../utils/useEventTracker";

let lastLoggedTime = 0;
function Destinations(){
    const { trackEvent } = useEventTracker();
    const handleExitIntent = (event) =>{
        if(event.clientY < 50){
            const now = Date.now();
            if (now - lastLoggedTime > 1000) {
                trackEvent('exitIntentEvent', {page: 'Destinations'})
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
        <div className="destination-main-container">
            <HeaderAd imgSource="header-travel-agency-mockup-ad.jpg"/>
            <SidebarAd imgSource="sidebar-travel-gear-mockup.jpg"/><br/>
            <h2 className="destination-main-title">Destinations:</h2><br/>
            <h3 className="destinations-content-title">Our Favorites:</h3><br/>
            <div className="destinations-content">
                {destinations_data.map((destination, index) => (
                    <div key={index} className="destination-card-expanded">
                        <div className="image-container">
                            <img src={destination.image} alt={destination.title}/>
                            <h3 className="destination-card-expanded-title">{destination.title}</h3>
                        </div>
                        <p>{destination.description}</p>
                    </div>
                ))}
            </div>
            <FooterAd imgSource="footer-hotel-travel-ad.jpg" />
        </div>
    );
}

export default Destinations;