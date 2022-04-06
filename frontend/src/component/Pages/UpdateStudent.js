import React, { Fragment, useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { clearErrors, getSingleStudent, updateStudent } from '../../actions/studentActions'
import { UPDATE_STUDENT_RESET } from '../../constants/studentContants'
import Loader from '../Partial/Loader'

const UpdateStudent = ({ match }) => {
    const alert = useAlert()
    const dispatch = useDispatch()
    const history = useHistory()
    const { loading, error, student } = useSelector((state) => state.detail)

    const { error: updateError, isUpdated } = useSelector((state) => state.update)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")
    const [className, setClassName] = useState("")
    const [roll, setRoll] = useState("")

    const studentId = match.params.id

    useEffect(() => {

        if (student && student._id !== studentId) {
            dispatch(getSingleStudent(studentId))
        } else {
            setName(student.name)
            setEmail(student.email)
            setContact(student.setContact)
            setClassName(student.className)
            setRoll(student.roll)
        }
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
        if (updateError) {
            alert.error(updateError);
            dispatch(clearErrors());
        }

        if (isUpdated) {
            alert.success("student detail change")
            history.push("/")
            dispatch({ type: UPDATE_STUDENT_RESET })
        }
    }, [alert, dispatch, error, history, isUpdated, student, studentId, updateError])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (contact.length < 10 || contact.length > 10) {
            alert.error("Phone number should be 10 Digits")
            return
        }
        const myForm = new FormData()
        myForm.set("name", name)
        myForm.set("email", email)
        myForm.set("className", className)
        myForm.set("roll", roll)

        dispatch(updateStudent(studentId, myForm))
    }

    return (
        <Fragment>
            {loading ? (<Loader />) : (
                <Fragment>
                    <form className='update' onSubmit={handleSubmit}>
                        <h2>Update Student</h2>
                        <div className='update__name'>
                            <label><center>Name</center></label>
                            <input className="name" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='update__email'>
                            <lable><center>Email</center></lable>
                            <input type="email" className='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='update__contact'>
                            <label><center>Contact</center></label>
                            <input type="number" className='number' name='number' value={contact} onChange={(e) => setContact(e.target.value)} />
                        </div>
                        <div className='update__classname'>
                            <label><center>ClassName</center></label>
                            <input className='classname' type="text" name='classname' value={className} onChange={(e) => setClassName(e.target.value)} />
                        </div>
                        <div className='update__roll'>
                            <label><center>Roll No</center></label>
                            <input type="number" className='update__number' value={roll} onChange={(e) => setRoll(e.target.value)} />
                        </div>
                        <input className='submitBtn' type="submit" value="Submit" />
                    </form>
                </Fragment>
            )}
        </Fragment>
    )
}

export default UpdateStudent