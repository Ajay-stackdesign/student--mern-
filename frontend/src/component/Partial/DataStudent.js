import React, { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearErrors } from '../../actions/studentActions'
import "./DataStudentt.scss"
import CreateIcon from '@mui/icons-material/Create';
import { Link, } from "react-router-dom"


const DataStudent = () => {
    const dispatch = useDispatch()
    const { error, students } = useSelector((state) => state.students)

    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }

    }, [dispatch, error])
    return (
        <Fragment>
            <div className='data'>
                <table class="table">
                    <thead>
                        <tr className="table-dark">
                            <th scope="col"><center>id</center></th>
                            <th scope="col"><center>Username</center></th>
                            <th scope="col">email</th>
                            <th scope="col">Job</th>
                            <th scope="col">Class</th>

                            <th scope='col'>Roll</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>

                        {students &&
                            students.map((student, id) => {
                                return (
                                    <>
                                        <tr className='id'>
                                            <th scope="row">{student._id}</th>
                                            <td className='name'><Link className='link' to={`/student/gets/${student._id}`}>{student.name}</Link></td>
                                            {/* <Link className='link' to={`/student/gets/${student._id}`}><td>{student.name}</td></Link> */}
                                            <td className='email'><Link className='link' to={`/student/gets/${student._id}`}>{student.email}</Link></td>
                                            <td className='contact'><Link className='link' to={`/student/gets/${student._id}`}>{student.contact}</Link></td>
                                            <td className='class'><Link className='link' to={`/student/gets/${student._id}`}>{student.className}</Link></td>
                                            <td className='roll'><Link className='link' to={`/student/gets/${student._id}`}>{student.roll}</Link></td>
                                            <td className="d-flex justify-content-between">
                                                <Link className='link' to={`/student/update/${student._id}`} >
                                                    <CreateIcon />
                                                </Link>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default DataStudent