import {useEffect} from "react";
import {useEventTracker} from "./useEventTracker";
import {useInView} from "react-intersection-observer";

const useAdDataHandler = (adType, imgSource, pageName) => {
    const { trackEvent } = useEventTracker();
    const { ref, inView } = useInView();

    useEffect(()=>{
        if(inView){
            trackEvent('adViewEvent', {adType, adSrcName: imgSource, page: pageName})
        }
    }, [inView, trackEvent, imgSource, adType, pageName]);
    const handleClick = () => {
        trackEvent('adClickEvent', {adType, adSrcName: imgSource, page: pageName})
    }
    return {ref, handleClick}
}


export { useAdDataHandler }


