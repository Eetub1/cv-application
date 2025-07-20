import { useState } from 'react'

function SkillsForm({setCvState}) {
    const [formData, setFormData] = useState({
        skills: ""
    })

    function handleChange(e) {
    const { name, value } = e.target;
    setFormData({...formData, [name] : value})
  }

    function handleSubmit(e) {
        e.preventDefault()
        e.target.reset()
        setCvState(prev => ({
            ...prev,
            skills: formData
        }))
    }

    return (
        <div id="skillsForm" className="form">
            <form action="#" onSubmit={handleSubmit}>
                <div className="form">

                    <div className="formRow">
                        <label htmlFor="">Skills</label>
                        <textarea type="text" name="skills" onChange={handleChange}></textarea>
                    </div>

                    <div className="formButtonContainer">
                        <button type="submit">Add</button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default SkillsForm