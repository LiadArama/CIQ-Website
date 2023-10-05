import React, {useEffect} from 'react';
import "../../styles/HeaderAd.css";
import { useInView } from 'react-intersection-observer';
import { useEventTracker } from '../../utils/useEventTracker.js';

function HeaderAd({imgSource, pageName}){
    const { trackEvent } = useEventTracker();
    const { ref, inView } = useInView();

    useEffect(()=>{
        if(inView){
            trackEvent('adViewEvent', {adType: 'HeaderAd', adSrcName: imgSource, page: pageName})
        }
    }, [inView, trackEvent, imgSource]);
    const handleClick = () => {
        trackEvent('adClickEvent', {adType: 'HeaderAd', adSrcName: imgSource, page: pageName})
    }

    return (
        <header className="header-ad-container" ref={ref}>
            <img src={require(`../../mock-up-ads/${imgSource}`)} className="header-ad" alt="travel-agency-ad" onClick={handleClick} />
        </header>
    )
}

export default HeaderAd