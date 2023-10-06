import {useEffect} from "react";
import {useEventTracker} from "./useEventTracker";

const useSessionTime = () => {
    const {trackEvent} = useEventTracker();
    const sessionStartTime = Date.now();
    useEffect(() => {
        const handleSessionEnd = () => {
            if(document.visibilityState === 'hidden') {
                const sessionEndTime = Date.now();
                const sessionLength = sessionEndTime - sessionStartTime;
                const sessionLengthInSeconds = sessionLength / 1000;
                trackEvent('sessionLength', {sessionLength: `${Math.round(sessionLengthInSeconds)}s`}, false);
            }
        }
        document.addEventListener("visibilitychange", handleSessionEnd);
        return () => {
            document.removeEventListener('visibilitychange', handleSessionEnd);
        }

    }, [sessionStartTime, trackEvent]);
}

export { useSessionTime }