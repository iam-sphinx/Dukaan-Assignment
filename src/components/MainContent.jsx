import React from 'react'
import Navbar from './mainContent/Navbar'
import Content from './mainContent/Content'

const MainContent = () => {
  return (
    <div className='flex flex-col flex-1 overflow-auto'>
    <Navbar/>

    <Content/>
    </div>
  )
}

export default MainContent