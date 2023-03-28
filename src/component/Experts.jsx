import React from 'react'
import { Architect } from '../assets/img/Image'

function Experts() {
  return (
    <div className='flex flex-col items-center space-y-6'>
        <div>
        <h1 class="text-3xl font-thin">EXPERTS SAY</h1>
        </div>
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, beatae debitis repellendus earum eos veritatis</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fuga culpa maxime, iste autem tempore corporis laboriosam voluptatem, iure, rerum commod</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aliquam repudiandae saepe sunt, consequuntur </p>
        </div>
        <div className='w-40 h-40 '>
            <img src={Architect} className="w-full h-full object-contain object-cover rounded-full"/>
        </div>
        <p class="text-xl font-bold">Jonathan Frank</p>
    </div>
  )
}

export default Experts