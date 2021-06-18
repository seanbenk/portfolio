import './Projects.scss'
import { projectInfos } from './ProjectInfo'
export default function ProjectsList({ setCurrentProject, showSky }){
    return (
        <div className="projects-list">
            <h4 className={showSky?"dark-mode":null}>Projects Quick Nav</h4>
            <ul>
                { projectInfos.map((project,idx) => (
                    <li className={showSky?"dark-mode":null} onClick={() => setCurrentProject(idx)} key={idx}>{project.name}</li>
                ))}
            </ul>
        </div>
    )
}