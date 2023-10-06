import React from 'react';
import '../../styles/SidebarAd.css'
import {useAdEventTracker} from "../../utils/useAdTracker";

function SidebarAd({imgSource, pageName}) {
    const {ref, handleClick} = useAdEventTracker('SidebarAd', imgSource, pageName);

    return (
        <aside className="sidebar-ad-container" ref={ref}>
            <img src={require(`../../mock-up-ads/${imgSource}`)} className="sidebar-ad" alt="sidebar-ad" onClick={handleClick} />
        </aside>
    );
}

export default SidebarAd;
