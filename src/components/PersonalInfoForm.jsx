import { useState } from 'react';

function PersonalInfoForm({setCvState}) {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
    })

    function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCvState(prev => ({
      ...prev,
      personalInfo: formData,
    }));
  }

    return (
        <div id="personalInfoForm" className="form">
            <form onSubmit={handleSubmit}>
                <div>

                    <div className="formRow">
                        <label htmlFor="">Full name</label>
                        <input type="text" name="fullName" onChange={handleChange} />
                    </div>

                    <div className="formRow">
                        <label htmlFor="">Email address</label>
                        <input type="text" name="email" onChange={handleChange}/>
                    </div>

                    <div className="formRow">
                        <label htmlFor="">Phone number</label>
                        <input type="text" name="phone" onChange={handleChange} />
                    </div>

                    <button type="submit">Send</button>

                </div>
            </form>
        </div>
    )
}

export default PersonalInfoForm