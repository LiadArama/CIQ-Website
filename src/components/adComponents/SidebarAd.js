import React from 'react';
import '../../styles/SidebarAd.css'
import {useAdDataHandler} from "../../utils/adDataHandlerHook";

function SidebarAd({imgSource, pageName}) {
    const {ref, handleClick} = useAdDataHandler('SidebarAd', imgSource, pageName);

    return (
        <aside className="sidebar-ad-container" ref={ref}>
            <img src={require(`../../mock-up-ads/${imgSource}`)} className="sidebar-ad" alt="sidebar-ad" onClick={handleClick} />
        </aside>
    );
}

export default SidebarAd;
