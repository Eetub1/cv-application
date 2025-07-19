import { useState } from 'react';
import PersonalInfoForm from "./PersonalInfoForm.jsx";
import ExperienceForm from './ExperienceForm.jsx';
import EducationForm from './EducationForm.jsx';

function AddInfo({cvState, setCvState}) {
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
                return <div>Placeholder 3</div>
            case "skills":
                return <div>Placeholder 4</div>
            default:
                return <div>defaultti</div>
        }
    }

    return (
        <div id="addInfo">
            <div id="buttonsContainer">
                <button onClick={() => {setInfoForm("personal")}}>Personal Info</button>
                <button onClick={() => {setInfoForm("experience")}}>Work Experience</button>
                <button onClick={() => {setInfoForm("education")}}>Education</button>
                <button onClick={() => {setInfoForm("projects")}}>Projects</button>
                <button onClick={() => {setInfoForm("skills")}}>Skills</button>
                <div id="formContainer">{showForm()}</div>
            </div>
        </div>
    )
}

export default AddInfo