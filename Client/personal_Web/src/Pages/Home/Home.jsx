import React from 'react'
import Hero from './Hero'
import Creative from './Creative'
import Benefits from './Benefits'


function Home() {
  return (
    <div className='overflow-y-auto scrollbar-hide flex flex-col items-center'>
           <Hero/>
           <Creative/>
           <Benefits/>
    </div>
  )
}

export default Home