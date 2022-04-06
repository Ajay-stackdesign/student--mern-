import React, { Fragment } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./About.scss"

const About = () => {
    return (
        <Fragment>
            <div className='about'>
                <div className="linkedin">
                    <LinkedInIcon />
                    <a href='https://www.linkedin.com/in/ajay-sahani-95736b1a5/' target="blank">LinkedIn</a>
                </div>
                <div className='github'>
                    <GitHubIcon />
                    <a href='https://github.com/Ajay-stackdesign' target="blank">Github</a>
                </div>
            </div>
        </Fragment>
    )
}

export default About