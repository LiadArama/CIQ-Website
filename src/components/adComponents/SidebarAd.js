import React, { useEffect } from 'react';
import '../../styles/SidebarAd.css'
import { useEventTracker } from "../../utils/useEventTracker";
import { useInView } from "react-intersection-observer";


function SidebarAd({imgSource, pageName}) {
    const { trackEvent } = useEventTracker();
    const { ref, inView } = useInView();

    useEffect(()=>{
        if(inView){
            trackEvent('adViewEvent', {adType: 'SidebarAd', adSrcName: imgSource, page: pageName})
        }
    }, [inView, trackEvent, imgSource]);
    const handleClick = () => {
        trackEvent('adClickEvent', {adType: 'SidebarAd', adSrcName: imgSource, page: pageName})
    }


    return (
        <aside className="sidebar-ad-container" ref={ref}>
            <img src={require(`../../mock-up-ads/${imgSource}`)} className="sidebar-ad" alt="sidebar-ad" onClick={handleClick} />
        </aside>
    );
}

export default SidebarAd;
