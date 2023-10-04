import React, {useState} from 'react';
import "../../styles/HeaderAd.css";
function HeaderAd({imgSource}){
    const [countClick, setCountClicks] = useState(0);

    const handleClick = async () =>{
        setCountClicks(countClick+1);
    }


    return (
        <header className="header-ad-container">
            <img src={require(`../../mock-up-ads/${imgSource}`)} className="header-ad" alt="travel-agency-ad" onClick={handleClick} />
        </header>
    )
}

export default HeaderAd