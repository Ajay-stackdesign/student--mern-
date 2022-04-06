import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import "./AddList.scss"

const AddList = () => {
    return (
        <Fragment>
            <div className='add'>
                {/* <div className='add__left'>
                    hello
                </div> */}
                <div className='add__right'>
                    <button className='rightBtn'>
                        <Link className='link' to="/student/create">Add User</Link>
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default AddList