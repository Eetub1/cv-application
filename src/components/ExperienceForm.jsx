import { useState } from 'react';

function ExperienceForm({setCvState}) {
    const [formData, setFormData] = useState({
        date: "",
        company: "",
        title: "",
        description: "",
    })

    function handleChange(e) {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
    }

    function handleSubmit(e) {
    e.preventDefault();
    e.target.reset()
    setCvState(prev => ({
        ...prev, 
        experience: [...prev.experience, formData]
    }))
  }

    return (
        <div id="experienceForm" className="form">
            <form action="#" onSubmit={handleSubmit}>
                <div className="form">

                    <div className="formRow">
                        <label htmlFor="">Date</label>
                        <input type="text" name="date" onChange={handleChange}/>
                    </div>

                    <div className="formRow">
                        <label htmlFor="">Company</label>
                        <input type="text" name="company" onChange={handleChange}/>
                    </div>

                    <div className="formRow">
                        <label htmlFor="">Job title</label>
                        <input type="text" name="title" onChange={handleChange}/>
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

export default ExperienceForm