import React, {useEffect} from 'react';
import HeaderAd from "../adComponents/HeaderAd";
import SidebarAd from "../adComponents/SidebarAd";
import FooterAd from "../adComponents/FooterAd";
import '../../styles/Homepage.css';
import {destinations_data} from "../../mockup_data";
import {useEventTracker} from "../../utils/useEventTracker";


let lastLoggedTime = 0;
function Homepage(){
    const { trackEvent } = useEventTracker();
    const handleExitIntent = (event) =>{
        if(event.clientY < 50){
            const now = Date.now();
            if (now - lastLoggedTime > 1000) {
            trackEvent('exitIntentEvent', {page:'Homepage'})
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
    return (
        <div className="homepage-main-container">
        <HeaderAd imgSource="header-travel-agency-mockup-ad.jpg"/>
        <SidebarAd imgSource="sidebar-travel-gear-mockup.jpg"/>
            <br/><h2 className="homepage-title">Home Page</h2><br/>
            <h3 className="welcome-homepage-title">Welcome to Travel Diaries</h3><br/>
            <p className="welcome-homepage-text">Your one-stop destination to explore the world's most beautiful places and connect with a community of travelers.</p><br/>
            <div className="featured-destinations">
                {destinations_data.map((destination, index) => (
                    <div key={index} className="destination-card">
                        <img src={destination.image} alt={destination.title} />
                        <h3>{destination.title}</h3>
                        <p className="truncate">{destination.description}</p>
                    </div>
                ))}
            </div>
        <FooterAd imgSource="footer-hotel-travel-ad.jpg"/>
        </div>
    );


}

export default Homepage;