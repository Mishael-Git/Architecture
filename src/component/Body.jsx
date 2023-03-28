import React from 'react'
import { Build, Experts, Nav, Recent, Welcome } from './Info'

function Body() {
  return (
    <div className='space-y-7'>
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

    </div>
  )
}

export default Body