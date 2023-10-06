import React from 'react';
import "../../styles/FooterAd.css";
import {useAdEventTracker} from "../../utils/useAdTracker";

function FooterAd({imgSource, pageName}) {
    const {ref, handleClick} = useAdEventTracker('FooterAd', imgSource, pageName);

    return (
        <footer className="footer-ad-container" ref={ref}>
            <img src={require(`../../mock-up-ads/${imgSource}`)} className="footer-ad" alt="footer-ad" onClick={handleClick} />
        </footer>
    );
}

export default FooterAd;
