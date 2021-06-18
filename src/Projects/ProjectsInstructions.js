import './Projects.scss'
export default function ProjectsInstructions({ closeProjectsInstructions }){
    return (
        <section className="projects-instructions">
            <div className="projects-instructions-wrapper">
                <h2>Instructions</h2>
                <p><i>Click and Drag</i> or <i>Swipe</i> to move the model around.<br/> 
                <i>Click</i> on different sections or use the nav menu to open up a project of mine.</p>
                <h3 className="close" onClick={closeProjectsInstructions}>CLOSE</h3>
            </div>
        </section>
    )
}