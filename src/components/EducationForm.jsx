import { useState } from 'react';

function EducationForm({setCvState}) {
    const [formData, setFormData] = useState({
        date : "",
        school: "",
        gpa: "",
        degree: ""
    })

    function handleChange(e) {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        e.target.reset()
        setCvState(prev => ({
            ...prev,
            education: [...prev.education, formData]
        }))
    }

    return (
        <div id="educationForm" className="form">
            <form action="#" onSubmit={handleSubmit}>
                <div className="form">

                    <div className="formRow">
                        <label htmlFor="">Date</label>
                        <input type="text" name="date" onChange={handleChange}/>
                    </div>

                    <div className="formRow">
                        <label htmlFor="">School</label>
                        <input type="text" name="school" onChange={handleChange}/>
                    </div>

                    <div className="formRow">
                        <label htmlFor="">GPA</label>
                        <input type="text" name="gpa" onChange={handleChange}/>
                    </div>

                    <div className="formRow">
                        <label htmlFor="">Degree name</label>
                        <input type="text" name="degree" onChange={handleChange}/>
                    </div>

                    <div className="formButtonContainer">
                        <button type="submit">Add</button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default EducationForm