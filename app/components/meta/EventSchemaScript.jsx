import React from 'react'

function EventSchemaScript({ event }) {
    const eventName = encodeURIComponent(event?.name);

    const formattedData = {
        "@context": "https://schema.org",
        "@type": "Event",
        "name": eventName,
        "startDate": new Date(),
        "endDate": new Date(),
        "eventStatus": "https://schema.org/EventScheduled",
        "location": {
            "@type": "Place",
            "name": event?.location,
        },
        image: [event?.imageUrl],
        organizer: {
            "@type": "Organization",
            name: "Noir Events",
            url: "http://www.localhost:3000/"
        }
    }

    return (
        <>
            <script type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(formattedData)
                }}
            />
        </>
    )
}

export default EventSchemaScript