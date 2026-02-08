import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ActionsButtons from '../ActionsButtons'

function EventCard({ event }) {


    return (
        <div className="overflow-hidden rounded-md bg-[#242526]">
            <Image
                width={400}
                height={400}
                src={event?.imageUrl} alt="Event 1" className="w-full h-64 object-cover"
                quality={100}
            />

            <div className="p-3">
                <Link href={`/details/${event?.id}`} className="font-bold text-lg">{event?.name}</Link>
                <p className="text-[#9C9C9C] text-sm mt-1">{event?.location}</p>
                <div className="text-[#737373] text-sm mt-1">
                    <span>{event?.interested_ids.length} Interested </span>
                    <span>|</span>
                    <span> {event?.going_ids.length} Going</span>
                </div>
                <ActionsButtons event={event} />
            </div>
        </div>
    )
}

export default EventCard