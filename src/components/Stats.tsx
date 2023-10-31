import React from 'react'
import { stats } from '../constants'

const Stats = () => {
  return (
<section className="flex items-center flex-row gap-5">

{
   stats.map((stat) => (

    <div key={stat.id} className="flex items-center gap-[10px]">
        <h4 className="font-bold text-[24px]">{stat.value}</h4>
        <p className="uppercase font-semibold">{stat.title}</p>

    </div>

   )) 
}


</section>  )
}

export default Stats