import React, {useState} from 'react';
import "../../styles/FooterAd.css";

function FooterAd({imgSource}) {
    const [countClick, setCountClicks] = useState(0);

    const handleClick = () => {
        setCountClicks(countClick + 1);
    }


    return (
        <footer className="footer-ad-container">
            <img src={require(`../../mock-up-ads/${imgSource}`)} className="footer-ad" alt="footer-ad" onClick={handleClick} />
        </footer>
    );
}

export default FooterAd;
