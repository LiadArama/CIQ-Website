import {useEffect} from "react";
import {useEventTracker} from "./useEventTracker";
import {useInView} from "react-intersection-observer";

const useAdEventTracker = (adType, imgSource, pageName) => {
    const { trackEvent } = useEventTracker();
    const { ref, inView } = useInView();

    useEffect(()=>{
        if(inView){
            trackEvent('adViewEvent', {adType, adSrcName: imgSource, page: pageName}, true)
        }
    }, [inView, trackEvent, imgSource, adType, pageName]);
    const handleClick = () => {
        trackEvent('adClickEvent', {adType, adSrcName: imgSource, page: pageName}, true)
    }
    return {ref, handleClick}
}


export { useAdEventTracker }


