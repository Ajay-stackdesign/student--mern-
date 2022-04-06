import React, { Fragment, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Link, useHistory } from 'react-router-dom';
import CreateIcon from '@mui/icons-material/Create';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { clearErrors, deleteStudent, getStudent } from '../actions/studentActions';
import { DELETE_STUDENT_RESET } from '../constants/studentContants';


const DataGridMui = () => {
    const history = useHistory()
    const alert = useAlert()
    const dispatch = useDispatch()
    const { error, students } = useSelector((state) => state.students)

    const { error: deleteError, isDeleted } = useSelector(state => state.update)

    const deleteUserHandler = (id) => {
        dispatch(deleteStudent(id))
    }

    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
        if (deleteError) {
            alert.error(error)
            dispatch(clearErrors())
        }
        if (isDeleted) {
            alert.success("Student detail delete successfully")
            history.push("/")
            dispatch({ type: DELETE_STUDENT_RESET })
        }
        dispatch(getStudent())
    }, [alert, deleteError, dispatch, error, history, isDeleted])
    const cols = [
        { field: 'id', headerName: 'id', width: 120 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'contact', headerName: 'Contact', width: 170 },
        { field: 'class', headerName: 'ClassName', width: 120 },
        { field: 'roll', headerName: 'Roll No', width: 120 },
        {
            field: "actions",
            flex: 0.3,
            headerName: "Actions",
            minWidth: 150,
            type: "number",
            sortable: false,
            renderCell: (params) => {
                return (
                    <Fragment>
                        <Link className='link' to={`/student/update/${params.getValue(params.id, "id")}`} >
                            <CreateIcon />
                        </Link>
                        <Button onClick={() =>
                            deleteUserHandler(params.getValue(params.id, "id"))
                        }>
                            <DeleteIcon />
                        </Button>
                    </Fragment>
                )
            }
        }
    ]
    const rows = [

    ]

    students &&
        students.forEach(item => {
            rows.push({
                id: item._id,
                name: item.name,
                email: item.email,
                contact: item.contact,
                class: item.className,
                roll: item.roll
            })
        })
    return (
        <div className='data'>
            <DataGrid rows={rows} columns={cols} pageSize={5} autoHeight className="ListTable" />
        </div>
    )
}

export default DataGridMui