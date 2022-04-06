import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from "../component/Partial/Loader.js"
import Student from "../component/Partial/Student.js"
import { useAlert } from 'react-alert'
import { clearErrors, getStudent } from '../actions/studentActions.js'


const StudentSearchDetail = ({ match }) => {
    const alert = useAlert()
    const dispatch = useDispatch()
    const { loading, error, students } = useSelector((state) => state.students)

    const keyword = match.params.keyword

    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors)
        }
        dispatch(getStudent(keyword))
    }, [alert, dispatch, error, keyword])
    return (
        <Fragment>
            {loading ? (<Loader />) : (
                <Fragment>
                    <h2 className='studentDetail' style={{ "borderBottom": "2px solid black", "width": "200px", }}>
                        <center>Students Details</center>
                    </h2>
                    {students &&
                        students.map((student) => (
                            <Student key={student._id} student={student} />
                        ))
                    }
                </Fragment>
            )}
        </Fragment>
    )
}

export default StudentSearchDetail