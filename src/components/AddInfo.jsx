import { useState } from 'react';
import PersonalInfoForm from "./PersonalInfoForm.jsx";
import ExperienceForm from './ExperienceForm.jsx';
import EducationForm from './EducationForm.jsx';
import SkillsForm from './SkillsForm.jsx'
import ProjectsForm from './ProjectsForm.jsx'

function AddInfo({setCvState}) {
    const [infoForm, setInfoForm] = useState(null)

    function showForm() {
        switch (infoForm) {
            case "personal":
                return <PersonalInfoForm setCvState={setCvState}/>
            case "experience":
                return <ExperienceForm setCvState={setCvState}/>
            case "education":
                return <EducationForm setCvState={setCvState}/>
            case "projects":
                return <ProjectsForm setCvState={setCvState}/>
            case "skills":
                return <SkillsForm setCvState={setCvState}/>
            default:
                return <div>Select a section to start making your cv!</div>
        }
    }

    return (
        <div id="addInfo">
            <div id="buttonsContainer">
                <div>
                    <button className="showFormButton" onClick={() => { setInfoForm("personal") }}>Personal Info</button>
                </div>
                <div>
                    <button className="showFormButton" onClick={() => { setInfoForm("experience") }}>Work Experience</button>
                </div>
                <div>
                    <button className="showFormButton" onClick={() => { setInfoForm("education") }}>Education</button>
                </div>
                <div>
                    <button className="showFormButton" onClick={() => { setInfoForm("projects") }}>Projects</button>
                </div>
                <div>
                    <button className="showFormButton" onClick={() => { setInfoForm("skills") }}>Skills</button>
                </div>
                <div id="formContainer">{showForm()}</div>
            </div>
        </div>
    )
}

export default AddInfo