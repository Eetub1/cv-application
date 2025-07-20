
function ShowPersonalInfo({cvState}) {
    

    const name = cvState.personalInfo.fullName
    const location = cvState.personalInfo.location
    const email = cvState.personalInfo.email
    const phone = cvState.personalInfo.phone
    if (!(name === undefined) && !(email === undefined) && !(phone === undefined)) {
        return (
            <>
                <h1>{name}</h1>
                <p>{location}</p>
                <div>
                    <p>{email} {phone}</p>
                </div>
            </>
        )
    }  
    return (
        <></>
    )
}

export default ShowPersonalInfo