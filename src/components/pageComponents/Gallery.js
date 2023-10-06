import React from 'react';
import HeaderAd from "../adComponents/HeaderAd";
import SidebarAd from "../adComponents/SidebarAd";
import FooterAd from "../adComponents/FooterAd";
import {destinations_data} from "../../mockup_data";
import '../../styles/Gallery.css';
import {usePageEventTracker} from "../../utils/usePageTracker";

function Gallery(){
    usePageEventTracker('Gallery');
    return(
        <div className="gallery-container">
            <HeaderAd imgSource="header-travel-agency-mockup-ad.jpg" pageName='Gallery'/>
            <SidebarAd imgSource="sidebar-travel-gear-mockup.jpg" pageName='Gallery'/><br/>
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
            <FooterAd imgSource="footer-hotel-travel-ad.jpg" pageName='Gallery'/>
        </div>
    );
}

export default Gallery;