import { useState } from 'react'
import './styles/App.css'
import AddInfo from './components/AddInfo.jsx'
import Cv from './components/Cv.jsx'

function App() {
  return (
    <div id="page">
      <AddInfo/>
      <Cv/>
    </div>
  )
}

export default App
