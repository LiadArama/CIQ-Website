import React from 'react';
import "../../styles/HeaderAd.css";
import {useAdEventTracker} from "../../utils/useAdTracker";

function HeaderAd({imgSource, pageName}){
    const {ref, handleClick} = useAdEventTracker('HeaderAd', imgSource, pageName);

    return (
        <header className="header-ad-container" ref={ref}>
            <img src={require(`../../mock-up-ads/${imgSource}`)} className="header-ad" alt="travel-agency-ad" onClick={handleClick} />
        </header>
    )
}

export default HeaderAd