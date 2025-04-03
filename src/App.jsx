import { useState } from 'react'
import React from 'react'
import Main from './components/main/main'
import Sidebar from './components/sidebar/sidebar'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
     <Sidebar></Sidebar>
     <Main></Main>
     </>
  )
}

export default App
