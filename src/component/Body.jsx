import React from 'react'
import { Build, Experts, Get_in_touch, Nav, Recent, Welcome } from './Info'

function Body() {
  return (
    <div className='space-y-7 px-40'>
        <div>
        <Nav/>
        </div>

    <div>
        <Build/>
    </div>
    <div>
        <Welcome/>
    </div>
    <div className='bg-[#fafbf6] py-5 px'>
      <Recent/>
    </div>

    <div>
      <Experts/>
    </div>
    <div>
      <Get_in_touch/>
    </div>

    </div>
  )
}

export default Body