import React, { useEffect } from 'react';
import "../../styles/FooterAd.css";
import { useInView } from 'react-intersection-observer';
import { useEventTracker } from '../../utils/useEventTracker.js';

function FooterAd({imgSource, pageName}) { // maybe pageName
        const { trackEvent } = useEventTracker();
        const { ref, inView } = useInView();

        useEffect(()=>{
            if(inView){
                trackEvent('adViewEvent', {adType: 'FooterAd', adSrcName: imgSource, page: pageName})
            }
        }, [inView, trackEvent, imgSource]);
        const handleClick = () => {
            trackEvent('adClickEvent', {adType: 'FooterAd', adSrcName: imgSource, page: pageName})
        }


    return (
        <footer className="footer-ad-container" ref={ref}>
            <img src={require(`../../mock-up-ads/${imgSource}`)} className="footer-ad" alt="footer-ad" onClick={handleClick} />
        </footer>
    );
}

export default FooterAd;
