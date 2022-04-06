import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import "./Student.scss"

const Student = ({ student }) => {
    return (
        <Fragment>
            <div className='student'>
                <Link to={`/student/get/${student._id}`} className="studentDetail">
                    <p><center>STUDENT ID ---{student._id} </center></p>
                    <p><center>STUDENT NAME ---{student.name}</center></p>
                    <p><center>STUDENT EMAIL --- {student.email}</center></p>
                    <p><center>STUDENT CONTACT --- {student.contact}</center></p>
                    <p><center>STUDENT CLASS --- {student.class}</center></p>
                    <p><center>STUDENT ROLL --- {student.roll}</center></p>
                    <p><center>STUDENT CREATED AT --- {student.createdAt}</center></p>
                </Link>
            </div>
        </Fragment>
    )
}

export default Student