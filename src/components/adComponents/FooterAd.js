import React from 'react';
import "../../styles/FooterAd.css";
import {useAdDataHandler} from "../../utils/adDataHandlerHook";

function FooterAd({imgSource, pageName}) {
    const {ref, handleClick} = useAdDataHandler('FooterAd', imgSource, pageName);

    return (
        <footer className="footer-ad-container" ref={ref}>
            <img src={require(`../../mock-up-ads/${imgSource}`)} className="footer-ad" alt="footer-ad" onClick={handleClick} />
        </footer>
    );
}

export default FooterAd;
