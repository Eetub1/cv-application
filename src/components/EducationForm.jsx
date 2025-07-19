import { useState } from 'react';

function EducationForm({setCvState}) {
    const [formData, setFormData] = useState({})

    function handleChange(e) {

    }

    function handleSubmit(e) {

    }

    return (
        <div id="educationForm" className="form">
            <form action="#" onSubmit={handleSubmit}>
                <div>

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

                    <button type="submit">Send</button>

                </div>
            </form>
        </div>
    )
}

export default EducationForm