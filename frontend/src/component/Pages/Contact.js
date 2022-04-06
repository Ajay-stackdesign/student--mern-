import { Button } from '@mui/material'
import React from 'react'
import "./Contact.scss"

const Contact = () => {
    return (
        <div className="contactContainer">
            <a className="mailBtn" href="mailto:ajaygsahani968@gmail.com">
                <Button>Contact: ajaygsahani968@gmail.com</Button>
            </a>
        </div>
    )
}

export default Contact