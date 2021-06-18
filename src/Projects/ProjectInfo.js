import  './Projects.scss'

const projectInfos = [
    {
        name: 'TicTacToe', 
        blurb: 'This is a tic tac toe game I built with raw html, css and javascript', 
        githubLink: 'https://github.com/seanbenk/tictactoe', 
        websiteLink:'https://seanbenk.github.io/tictactoe/'
    },
    {
        name: 'Fish Finder', 
        blurb: 'This is a Restful Api app I made where people can post infomation about their favourite fishing spots and find new ones close to them using the google maps API', 
        githubLink: 'https://github.com/seanbenk/fishadvisor', 
        websiteLink: 'https://glacial-sands-22653.herokuapp.com/'
    },
    {
        name: 'Widget Wizard', 
        blurb: 'Widget Wizards is a group project I worked on with the idea being a dashboard application you can use as your home page in your favourite browser', 
        githubLink: 'https://github.com/jtabba/Widget_Wizard', 
        websiteLink: 'https://widget-wizard.herokuapp.com/'
    },
    {
        name: 'Path Finder', 
        blurb: 'This is an app that demonstrates path finding, dijkstra\'s algoruthm is used to find a path from point a to point b ', 
        githubLink: 'https://github.com/seanbenk/path-finder', 
        websiteLink: 'https://seanbenk.github.io/path-finder/'
    }
]

function ProjectInfo({ projectNumber, closeProjectInfo }){
    const currProject = projectInfos[projectNumber]
    return (
        <section className="project-info">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className="project-info-wrapper">
                    <h2>{currProject.name}</h2>
                <div>
                    <p>{currProject.blurb}</p>
                    <div>
                        <a href={currProject.githubLink} rel="noreferrer" target="_blank"><i class="fa fa-github git-icon"></i></a>
                        <a href={currProject.websiteLink} rel="noreferrer" target="_blank"><span class="material-icons website-icon">language</span></a>
                    </div>
                </div>
                <h3 className="close" onClick={closeProjectInfo}>CLOSE</h3>
            </div>
        </section>
    )
}

export { ProjectInfo, projectInfos }