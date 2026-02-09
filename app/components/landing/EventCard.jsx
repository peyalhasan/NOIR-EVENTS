import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ActionsButtons from '../ActionsButtons'
import EventSchemaScript from '../meta/EventSchemaScript'

function EventCard({ event }) {


    return (
        <div className="overflow-hidden rounded-md bg-[#242526]">
            <EventSchemaScript event={event} />
            <Link href={`/details/${event?.id}`}>

                <Image
                    width={400}
                    height={400}
                    src={event?.imageUrl} alt="Event 1" className="w-full h-64 object-cover"
                    quality={100}
                />

                <div className="pt-3 pl-3 pr-3">
                    <p className="font-bold text-lg">{event?.name}</p>
                    <p className="text-[#9C9C9C] text-sm mt-1">{event?.location}</p>
                    <div className="text-[#737373] text-sm mt-1">
                        <span>{event?.interested_ids.length} Interested </span>
                        <span>|</span>
                        <span> {event?.going_ids.length} Going</span>
                    </div>
                </div>
            </Link>
            <div className='pl-3 pb-3 pr-3'>
                <ActionsButtons event={event} />
            </div>
        </div>
    )
}

export default EventCard