import React from 'react';
import HeaderAd from "../adComponents/HeaderAd";
import SidebarAd from "../adComponents/SidebarAd";
import FooterAd from "../adComponents/FooterAd";
import {destinations_data} from "../../mockup_data";
import '../../styles/TravelTips.css';
import {usePageEventTracker} from "../../utils/pageDataHandlerHook";

function TravelTips() {
    usePageEventTracker('TravelTips');
    return (
        <div className="travel-tips-container">
            <HeaderAd imgSource="header-travel-agency-mockup-ad.jpg" pageName='TravelTips'/>
            <SidebarAd imgSource="sidebar-travel-gear-mockup.jpg" pageName='TravelTips'/><br/>
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
            <FooterAd imgSource="footer-hotel-travel-ad.jpg" pageName='TravelTips'/>
        </div>
    );
}

export default TravelTips