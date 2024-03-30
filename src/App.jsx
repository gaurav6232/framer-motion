import React from 'react'
import Background from './components/background'
import Foreground from './components/Foreground'

const App = () => {
  return (
    <div className='w-full h-screen bg-zinc-700 relative'>
     <Background/>
     <Foreground/>
   
    </div>
  )
}

export default App
