
function Cv({cvState}) {
    const name = cvState.personalInfo.fullName
    const email = cvState.personalInfo.email
    const phone = cvState.personalInfo.phone

    return (
        <div id="cvContainer">
            <div id="cv">
                <div id="cvMain">
                    <div id="personalInfoSection">{`${name} ${email} ${phone}`}</div>
                    <div id="workExperienceSection"></div>
                </div>
            </div>
        </div>
    )
}

export default Cv