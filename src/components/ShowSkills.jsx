
function showSkills({cvState}) {

    if (cvState.skills.skills) {
        return (
        <>
            <div id="showSkillsHeaderDiv">
                <h3>Skills</h3>
            </div>
            <div>
                <p>{cvState.skills.skills}</p>
            </div>
        </>
        )
    }
    return (<></>)
}

export default showSkills