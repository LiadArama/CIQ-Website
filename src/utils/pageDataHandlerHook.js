import { useEffect } from 'react';
import { useEventTracker } from './useEventTracker';

const usePageEventTracker = (pageName) => {
    const { trackEvent } = useEventTracker();
    let lastLoggedTime = 0;

    const handleExitIntent = (event) => {
        if(event.clientY < 50){
            const now = Date.now();
            if (now - lastLoggedTime > 1000) {
                trackEvent('exitIntentEvent', {page: pageName});
                lastLoggedTime = now;
            }
        }
    };

    useEffect(() => {
        trackEvent('pageLoad', {page: pageName});
        const pageLoadTimestamp = new Date();
        document.addEventListener('mousemove', handleExitIntent);

        return () => {
            document.removeEventListener('mousemove', handleExitIntent);
            const pageExitTimestamp = new Date();
            const timeSpentOnPage = pageExitTimestamp - pageLoadTimestamp;
            const timeSpentInSeconds = timeSpentOnPage / 1000;
            if(timeSpentInSeconds > 1){
                trackEvent('timeSpent', {page: pageName, timeSpent: `${Math.round(timeSpentInSeconds)}s`});
            }
        };
    }, [trackEvent, pageName]);
};

export { usePageEventTracker }