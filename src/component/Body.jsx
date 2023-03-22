import React from 'react'
import { Build, Nav, Welcome } from './Info'

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

    </div>
  )
}

export default Body