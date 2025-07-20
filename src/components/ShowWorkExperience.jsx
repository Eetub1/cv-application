import { useState } from 'react';

function ShowWorkExperience({cvState}) {
    let workExp = ""
    if (cvState.experience?.length > 0) {
        return (
            <>
                <div id="workExperienceHeaderDiv">
                    <h3>Work Experience</h3>
                </div>
                <div>
                    {cvState.experience.map(exp => <CreateWorkBlock key={exp.date + exp.company} exp={exp}/>)}
                </div>
            </>
        )
    }
    return (<>{workExp}</>)
}

function CreateWorkBlock({exp}) {
    const [hovered, setHovered] = useState(false)

    return (
        <div>
            <div id="companyAndDateContainer">
                <p id="companyPara">{exp.company}</p>
                <p>{exp.date}</p>
            </div>
            <div>
                <p>{exp.title}</p>
            </div>
            <div>
                <p>{exp.description}</p>
            </div>
        </div>
    )
}

export default ShowWorkExperience