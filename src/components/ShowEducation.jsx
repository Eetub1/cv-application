
function ShowEducation({cvState}) {
    let education = ""
    if (cvState.education?.length > 0) {
        return (
            <>
                <div id="educationHeaderDiv">
                    <h3>Education</h3>
                </div>
                <div>
                    {cvState.education.map(edu => <CreateEducationBlock key={edu.date + edu.gpa} edu={edu}/>)}
                </div>
            </>
        )
    }
    return (<>{education}</>)
}

function CreateEducationBlock({edu}) {
    return (
        <div className="educationBlock">
            <div id="schoolAndDateContainer">
                <p>{edu.school}</p>
                <p>{edu.date}</p>
            </div>
            <div id="degreeAndGpaContainer">
                <p>{edu.degree}</p>
                <p>gpa: {edu.gpa}</p>
            </div>
        </div>
    )
}

export default ShowEducation