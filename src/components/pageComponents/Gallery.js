import React, {useEffect} from 'react';
import HeaderAd from "../adComponents/HeaderAd";
import SidebarAd from "../adComponents/SidebarAd";
import FooterAd from "../adComponents/FooterAd";
import {destinations_data} from "../../mockup_data";
import '../../styles/Gallery.css';
import {useEventTracker} from "../../utils/useEventTracker";

let lastLoggedTime = 0;

function Gallery(){
    const { trackEvent } = useEventTracker();
    const handleExitIntent = (event) =>{
        if(event.clientY < 50){
            const now = Date.now();
            if (now - lastLoggedTime > 1000) {
                trackEvent('exitIntentEvent', {page: 'Gallery'})
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
            trackEvent('timeSpent', {page: 'Destinations', timeSpent: `${Math.round(timeSpentInSeconds)}s`});        };

    }, [trackEvent]);

    return(
        <div className="gallery-container">
            <HeaderAd imgSource="header-travel-agency-mockup-ad.jpg"/>
            <SidebarAd imgSource="sidebar-travel-gear-mockup.jpg"/><br/>
            <h2 className="gallery-main-title">Gallery</h2>
            <h3 className="gallery-title">Our Favorite Photos</h3>
            <div className="gallery-content-container">
                {destinations_data.map((destination, index) => (
                    <div key={index} className="gallery-content">
                        <h2 className="gallery-photo-title">{destination.title}</h2>
                        <img src={destination.image} alt={destination.title}/>
                    </div>
                ))}
            </div>
            <FooterAd imgSource="footer-hotel-travel-ad.jpg" />
        </div>
    );
}

export default Gallery;