import EventDetails from '@/app/components/details/EventDetails'
import EventVenue from '@/app/components/details/EventVenue'
import HeroSection from '@/app/components/details/HeroSection'
import { getEventById } from '@/db/queries'
import React from 'react'


export async function generateMetadata({ params: { id } }, parent) {
    const eventInfo = await getEventById(id);

    return {
        title: `Nior Events - ${eventInfo?.name}`,
        description: eventInfo?.details,
        openGraph: {
            images: [eventInfo?.imageUrl]
        }

    }

}

async function DetailsPage({ params: { id } }) {

    const eventInfo = await getEventById(id)

    return (
        <>
            <HeroSection eventInfo={eventInfo} />
            <section className='container'>
                <div className='grid grid-cols-5 gap-12 my-12'>
                    <EventDetails swags={eventInfo?.swags} details={eventInfo?.details} />
                    <EventVenue location={eventInfo?.location} />
                </div>

            </section>
        </>
    )
}

export default DetailsPage