
function ShowProjects({cvState}) {
    if (cvState.projects?.length > 0) {
        return (
            <>
                <div id="projectsHeaderDiv">
                    <h3>Projects</h3>
                </div>
                <div>
                    {cvState.projects.map(project => <CreateProjectBlock key={project.name} project={project}/>)}
                </div>
            </>
        )
    }
    return (<><p></p></>)
}

function CreateProjectBlock({project}) {
    return (
        <div className="projectBlock">
            <p className="boldText">{project.name}</p>
            <p>{project.description}</p>
        </div>
    )
}

export default ShowProjects