import React, { Fragment, useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { clearErrors, createStudent } from '../../actions/studentActions'
import { CREATE_STUDENT_RESET } from '../../constants/studentContants'
import Loader from '../Partial/Loader'
import "./NewStudent.scss"

const NewStudent = () => {
    const dispatch = useDispatch()
    const alert = useAlert()
    const history = useHistory()

    const { loading, error, success } = useSelector((state) => state.create)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")
    const [className, setClassName] = useState("")
    const [roll, setRoll] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        if (contact.length < 10 || contact.length > 10) {
            alert.error("contact number should be 10 Digits")
            return
        }

        dispatch(createStudent({ name, email, contact, className, roll }))
    }

    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
        if (success) {
            alert.success("New Student Added")
            history.push("/")
            dispatch({ type: CREATE_STUDENT_RESET })
        }
    }, [alert, dispatch, error, history, success])
    return (
        <Fragment>

            {loading ? (<Loader />) : (
                <Fragment>
                    <form className='update' onSubmit={handleSubmit}>
                        <h2>Add New Student</h2>
                        <div className='update__name'>
                            <label><center>name</center></label>
                            <input className="name" type="text" name="name" placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='update__email'>
                            <lable><center>Email</center></lable>
                            <input type="email" className='email' name='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='update__contact'>
                            <label><center>Contact</center></label>
                            <input type="number" className='number' name='number' placeholder='Enter Contact' value={contact} onChange={(e) => setContact(e.target.value)} />
                        </div>
                        <div className='update__classname'>
                            <label><center>ClassName</center></label>
                            <input className='classname' type="text" name='classname' placeholder='Enter className' value={className} onChange={(e) => setClassName(e.target.value)} />
                        </div>
                        <div className='update__roll'>
                            <label><center>Roll no</center></label>
                            <input type="number" className='update__number' placeholder='Enter Roll no' value={roll} onChange={(e) => setRoll(e.target.value)} />
                        </div>
                        <input className='submitBtn' type="submit" value="Submit" />
                    </form>
                </Fragment>
            )}
        </Fragment>
    )
}

export default NewStudent