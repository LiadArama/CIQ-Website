import React, { useState } from 'react';
import '../../styles/SidebarAd.css'


function SidebarAd({imgSource}) {
    const [countClick, setCountClicks] = useState(0);

    const handleClick = async () => {
        setCountClicks(countClick + 1);
    }


    return (
        <aside className="sidebar-ad-container">
            <img src={require(`../../mock-up-ads/${imgSource}`)} className="sidebar-ad" alt="sidebar-ad" onClick={handleClick} />
        </aside>
    );
}

export default SidebarAd;
