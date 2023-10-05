import React from 'react';
import HeaderAd from "../adComponents/HeaderAd";
import SidebarAd from "../adComponents/SidebarAd";
import FooterAd from "../adComponents/FooterAd";
import {destinations_data} from "../../mockup_data";
import '../../styles/Destinations.css';
import {usePageEventTracker} from "../../utils/pageDataHandlerHook";

function Destinations(){
    usePageEventTracker('Destinations');
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