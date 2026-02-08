import React from 'react'
import EventList from './components/landing/EventList'
import Header from './components/landing/Header'

export default function Page() {
  return (
    <section className='container'>
      <Header />
      <EventList />
    </section>
  )
}
