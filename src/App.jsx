import { useState } from 'react'
import './styles/App.css'
import AddInfo from './components/AddInfo.jsx'
import Cv from './components/Cv.jsx'

function App() {
  const [cvState, setCvState] = useState({
    personalInfo: {},
    experience: [],
    education: [],
    projects: [],
    skills: [],
  });

  return (
    <div id="page">
      <AddInfo cvState={cvState} setCvState={setCvState}/>
      <Cv cvState={cvState}/>
    </div>
  )
}

export default App
