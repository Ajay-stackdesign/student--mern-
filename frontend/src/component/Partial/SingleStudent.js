import React, { Fragment, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import "./SingleStudent.scss"
import { clearErrors, getSingleStudent } from "../../actions/studentActions"
import Loader from './Loader'

const SingleStudent = ({ match }) => {
    const alert = useAlert()
    const dispatch = useDispatch()
    const { student, error, loading } = useSelector((state) => state.detail)

    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
        dispatch(getSingleStudent(match.params.id))
    }, [alert, dispatch, error, match.params.id])
    return (
        <Fragment>
            {loading ? (<Loader />) : (
                <Fragment>
                    <div className='single'>
                        <center><h4>Student Details</h4></center>
                        <p>Name -- {student.name}</p>
                        <p>Email -- {student.email}</p>
                        <p>contact -- {student.contact}</p>
                        <p>class -- {student.className}</p>
                        <p>Roll -- {student.roll}</p>
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}

export default SingleStudent