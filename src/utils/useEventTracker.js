const ENDPOINTS = ['ad-events', 'page-events'];
const PORT = 5000; //5000 for express, 5432 for postgres, 3001 for mock API
const URL = `http://localhost:${PORT}/`

function sendEventData(eventData, isAdEvent){
    fetch(URL + ENDPOINTS[isAdEvent ? 0 : 1], // if false -> 1 = page-events if true-> 0 = ad-events
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                eventType: eventData.eventType,
                timestamp: eventData.timestamp,
                eventDetails: eventData.eventDetails
            }),
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
    const trackEvent = (eventType, eventDetails, isAdEvent) => {
        let timestamp = Date.now();
        let date = new Date(timestamp);
        const eventData = {
            eventType,
            timestamp: date,
            eventDetails
        };
        sendEventData(eventData, isAdEvent);
    }
    return {trackEvent}
};

export {useEventTracker, sendEventData};