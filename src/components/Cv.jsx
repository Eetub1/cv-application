import ShowWorkExperience from './ShowWorkExperience.jsx'
import ShowPersonalInfo from './ShowPersonalInfo.jsx'
import ShowEducation from './ShowEducation.jsx'
import ShowSkills from './ShowSkills.jsx'
import ShowProjects from './ShowProjects.jsx'

function Cv({cvState}) {
    return (
        <div id="cvContainer">
            <div id="cv">
                <div id="cvMain">
                    <div id="personalInfoSection">{<ShowPersonalInfo cvState={cvState}/>}</div>
                    <div id="workExperienceSection">{<ShowWorkExperience cvState={cvState}/>}</div>
                    <div id="EducationSection">{<ShowEducation cvState={cvState}/>}</div>
                    <div id="ProjectsSection">{<ShowProjects cvState={cvState}/>}</div>
                    <div id="SkillsSection">{<ShowSkills cvState={cvState}/>}</div>
                </div>
            </div>
        </div>
    )
}

export default Cv