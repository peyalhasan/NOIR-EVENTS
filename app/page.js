import React, { Suspense } from 'react'
import EventList from './components/landing/EventList'
import Header from './components/landing/Header'
import Loading from './components/Loading'

export default function HomePage({ searchParams: { query } }) {
  return (
    <section className='container'>
      <Header />
      <Suspense key={query} fallback={<Loading />}>
        <EventList query={query} />
      </Suspense>
    </section>
  )
}
