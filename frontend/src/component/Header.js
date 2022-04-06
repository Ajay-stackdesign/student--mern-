import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"

const Header = () => {
    return (
        <Fragment>
            <div className='header'>
                <div className='header__left'>
                    <Link to="/"><img src='https://pbs.twimg.com/profile_images/904691154368778241/QJyreG0h_400x400.jpg' alt='student_logo' /></Link>
                </div>
                <div className='header__right'>
                    <ul className='header__flex'>
                        <li><Link to="/" className='link'>Home</Link></li>
                        <li><Link to="/student/get" className='link'>Students</Link></li>
                        <li><Link to="/contact" className='link'>Contact</Link></li>
                        <li><Link to="/about" className='link'>About</Link></li>
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}

export default Header