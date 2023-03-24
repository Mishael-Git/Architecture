import React from 'react'
import { Build1, Build2, Build3 } from '../assets/img/Image'

function Recent_project() {
  return (
    <div className='space-y-8'>
        <div className='flex flex-col items-center'>
            <h1 class="text-3xl font-thin">RECENT  PROJECTS</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio adipisci fugit rem, numquam delectus laudantium minima,</p>
        </div>
        {/* Images */}
        <div className='flex flex-col items-center space-y-6'>
        <div className='flex items-center space-x-7 px-16'>
        <div className='w-64 h-44'>
            <img src={Build1} className="w-full h-full object-contain object-cover"/>
        </div>
        <div className='w-64 h-44'>
            <img src={Build2} className="w-full h-full object-contain object-cover"/>
        </div>
        <div className='w-64 h-44'>
            <img src={Build3} className="w-full h-full object-contain object-cover"/>
        </div>
        </div>
        <button class="rounded-lg px-5 bg-[#fed615] ease-in duration-300 hover:bg-black hover:text-white">VIEW MORE</button>
        </div>
    </div>
  )
}

export default Recent_project