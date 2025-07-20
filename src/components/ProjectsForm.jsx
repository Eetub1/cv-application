import { useState } from 'react';

function ProjectsForm({setCvState}) {
    const [formData, setFormData] = useState({
        name: "",
        description: ""
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
            projects : [...prev.projects, formData]
        }))
    }

    return (
        <div id="projectsForm" className="form">
            <form action="#" onSubmit={handleSubmit}>
                <div className="form">

                    <div className="formRow">
                        <label htmlFor="">Name</label>
                        <input type="text" name="name" onChange={handleChange}/>
                    </div>

                    <div className="formRow">
                        <label htmlFor="">Description</label>
                        <textarea type="text" name="description" onChange={handleChange}></textarea>
                    </div>

                    <div className="formButtonContainer">
                        <button type="submit">Add</button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default ProjectsForm