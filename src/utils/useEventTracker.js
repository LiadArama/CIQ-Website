import { useEffect } from 'react';

const JSON_PORT = 3001;
const ENDPOINTS = ['events'];
const URL = `http://localhost:${JSON_PORT}/${ENDPOINTS[0]}`
function sendEventData(eventData){
    fetch(URL,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData),
        }
        )
        .then((response) =>  {
            return response.json()
        })
        .then((responseData) => {
            console.log("Success: ", responseData);
        })
        .catch((error) => {
            console.log("Error: ", error);
        })
}

const useEventTracker = () => {
    const trackEvent = (eventType, eventDetails) => {
        const eventData = {
            eventType,
            timestamp: Date.now(),
            eventDetails
        };
        sendEventData(eventData);
    }
    return {trackEvent}
};

const usePageView =  (pageName) => {
    const { trackEvent } = useEventTracker();

    useEffect(()=>{
        trackEvent('pageView', {page: pageName});

    }, [pageName, trackEvent])
};

export {useEventTracker, usePageView, sendEventData};