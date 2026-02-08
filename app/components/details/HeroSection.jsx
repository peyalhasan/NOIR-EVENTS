import Image from 'next/image'
import React from 'react'
import ActionsButtons from '../ActionsButtons'

function HeroSection({ eventInfo }) {
    return (
        <section className="container">
            <div className="bg-gradient-to-b from-slate-200/20 to-slate-800/30">
                <Image quality={100} width={900} height={900} src={eventInfo?.imageUrl} alt={eventInfo?.name} className="h-[450px] mx-auto" />
            </div>

            <div className="flex items-end">
                <div className="flex-auto py-4">
                    <h1 className="font-bold text-2xl">{eventInfo?.name}</h1>
                    <p className="text-[#9C9C9C] text-base mt-1">{eventInfo?.location}</p>
                    <div className="text-[#737373] text-sm mt-1">
                        <span>{eventInfo?.interested_ids.length} Interested</span>
                        <span> |</span>
                        <span> {eventInfo?.going_ids.length} Going</span>
                    </div>
                </div>
                <ActionsButtons event={eventInfo} fromDetails={true} />
            </div>
        </section>
    )
}

export default HeroSection