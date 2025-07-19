
function Cv({cvState}) {
    const name = cvState.personalInfo.fullName
    const email = cvState.personalInfo.email
    const phone = cvState.personalInfo.phone

    //tästä varmaan voisi tehdä oman komponentin joka palauttaa jsx:ää paremmassa 
    //muodossa
    function showWorkExperience() {
        let workExp = ""
        if (cvState.experience.length > 0) {
            cvState.experience.forEach(exp => {
                workExp += `${exp.date} ${exp.company} ${exp.title} ${exp.description}\n`
            })
        }
        return workExp
    }

    return (
        <div id="cvContainer">
            <div id="cv">
                <div id="cvMain">
                    <div id="personalInfoSection">{`${name} ${email} ${phone}`}</div>
                    <div id="workExperienceSection">{showWorkExperience()}</div>
                </div>
            </div>
        </div>
    )
}

export default Cv