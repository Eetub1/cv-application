import { useState } from 'react';

function PersonalInfoForm({setCvState}) {
    const [formData, setFormData] = useState({
        fullName: "",
        location: "",
        email: "",
        phone: "",
    })

    function handleChange(e) {
    const { name, value } = e.target;
    setFormData({...formData, [name] : value})
  }

  function handleSubmit(e) {
    e.preventDefault();
    e.target.reset()
    setCvState(prev => ({
      ...prev,
      personalInfo: formData,
    }));
  }

    return (
        <div id="personalInfoForm" className="form">
            <form onSubmit={handleSubmit}>
                <div className="form">

                    <div className="formRow">
                        <label htmlFor="">Full name</label>
                        <input type="text" name="fullName" onChange={handleChange} />
                    </div>

                    <div className="formRow">
                        <label htmlFor="">Location</label>
                        <input type="text" name="location" onChange={handleChange} />
                    </div>

                    <div className="formRow">
                        <label htmlFor="">Email address</label>
                        <input type="text" name="email" onChange={handleChange}/>
                    </div>

                    <div className="formRow">
                        <label htmlFor="">Phone number</label>
                        <input type="text" name="phone" onChange={handleChange} />
                    </div>

                    <div className="formButtonContainer">
                        <button type="submit">Add</button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default PersonalInfoForm