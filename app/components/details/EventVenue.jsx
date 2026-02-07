import React from 'react'
import EventMap from './EventMap'

function EventVenue({ location }) {
    return (
        <div className="overflow-hidden rounded-lg col-span-2 bg-[#242526]">
            <div className="w-full">
                <EventMap location={location} />
            </div>
            <div className="p-4">
                <p className="text-[#9C9C9C] text-base mt-1">
                    {location}
                </p>
            </div>
        </div>
    )
}

export default EventVenue