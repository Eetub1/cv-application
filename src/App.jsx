import { useState } from 'react'
import './styles/App.css'
import AddInfo from './components/AddInfo.jsx'
import Cv from './components/Cv.jsx'

function App() {
  const [cvState, setCvState] = useState({
    personalInfo: {
      fullName: "Eetu Oinonen",
      location: "Jyväskylä - Central Finland",
      email: "eetu.oinonen04@gmail.com",
      phone: "0401234567"
    },
    experience: [
      {
        date: "2022 - present",
        company: "Amazon",
        title: "Senior Fullstack developer",
        description: "Passionate and detail-oriented Full-Stack Developer with experience building scalable web applications from front to back. Proficient in modern frontend frameworks (React, Vue) and backend technologies (Node.js, Express, Django), with a strong grasp of databases, RESTful APIs, and cloud deployment."
      },
      {
        date: "2019 - 2022",
        company: "Google",
        title: "AI Solutions Engineer",
        description: "Innovative and results-driven engineer focused on building and deploying AI-powered solutions at scale. Experienced in integrating machine learning models into production systems, optimizing performance for real-time inference, and collaborating with cross-functional teams to deliver impactful AI features across web and cloud platforms. Skilled in Python, TensorFlow, PyTorch, and modern MLOps workflows."
      }
    ],
    education: [
      {
        date: "2024 - 2029",
        school: "University of Jyväskylä",
        gpa: "4.7",
        degree: "Master's degree in computer science"
      }
    ],
    projects: [
      {
        name: "Thingmabob 3000",
        description: "Does some stuff idk"
      }
    ],
    skills: {
      skills: "HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, PostgreSQL, Git, Docker, REST APIs, GraphQL, Jest, AWS, TypeScript"
    },
  });

  return (
    <div id="page">
      <AddInfo setCvState={setCvState}/>
      <Cv cvState={cvState}/>
    </div>
  )
}

export default App
