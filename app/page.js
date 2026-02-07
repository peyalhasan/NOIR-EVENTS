import React from 'react'
import Header from './components/landing/Header'
import EventList from './components/landing/EventList'

export default function Page() {
  return (
    <section className='container'>
      <Header />
      <EventList />
    </section>
  )
}
