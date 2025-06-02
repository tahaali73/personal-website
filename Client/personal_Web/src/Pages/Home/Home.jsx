import React from 'react'
import Hero from './Hero'
import Creative from './Creative'
import Benefits from './Benefits'
import MyWork from './myWork'
import Faq from './Faq'
import FaqComp from '../../Components/FaqComp'

function Home() {
  return (
    <div className='overflow-y-auto scrollbar-hide flex flex-col items-center'>
           <Hero/>
           <Creative/>
           <Benefits/>
           <MyWork/>
           <Faq/>
    </div>
  )
}

export default Home