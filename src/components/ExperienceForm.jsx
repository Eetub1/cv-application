
function ExperienceForm() {
    return (
        <div id="experienceForm" className="form">
            <form action="#">
                <div>

                    <div className="formRow">
                        <label htmlFor="">Date</label>
                        <input type="text" />
                    </div>

                    <div className="formRow">
                        <label htmlFor="">Company</label>
                        <input type="text" />
                    </div>

                    <div className="formRow">
                        <label htmlFor="">Job title</label>
                        <input type="text" />
                    </div>

                    <div className="formRow">
                        <label htmlFor="">Description</label>
                        <input type="text"/>
                    </div>

                    <button type="submit">Send</button>

                </div>
            </form>
        </div>
    )
}

export default ExperienceForm