import {
    GET_STUDENT_REQUEST,
    GET_STUDENT_SUCCESS,
    GET_STUDENT_FAIL,


    CREATE_STUDENT_FAIL,
    CREATE_STUDENT_REQUEST,
    CREATE_STUDENT_SUCCESS,

    CLEAR_ERROR,
    UPDATE_STUDENT_REQUEST,
    UPDATE_STUDENT_FAIL,
    UPDATE_STUDENT_SUCCESS,
    DELETE_STUDENT_REQUEST,
    DELETE_STUDENT_FAIL,
    DELETE_STUDENT_SUCCESS,
    SINGLE_STUDENT_REQUEST,
    SINGLE_STUDENT_SUCCESS,
    SINGLE_STUDENT_FAIL,

} from "../constants/studentContants"
import axios from "axios"


export const getStudent = (keyword = "") => async (dispatch) => {
    try {
        dispatch({ type: GET_STUDENT_REQUEST })

        const { data } = await axios.get(`/api/v1/student/get?keyword=${keyword}`)

        console.log(data)

        dispatch({
            type: GET_STUDENT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_STUDENT_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getSingleStudent = (id) => async (dispatch) => {
    try {
        dispatch({ type: SINGLE_STUDENT_REQUEST })

        const { data } = await axios.get(`/api/v1/student/gets/${id}`)
        console.log(data)
        dispatch({
            type: SINGLE_STUDENT_SUCCESS,
            payload: data.student
        })
    } catch (error) {
        dispatch({
            type: SINGLE_STUDENT_FAIL,
            payload: error.response.data.message
        })
    }
}

// export const createStudent = (studentData) => async (dispatch) => {
//     try {
//         dispatch({ type: CREATE_STUDENT_REQUEST })

//         const config = {
//             headers: { "Content-Type": "application/json" },
//         };


//         const { data } = await axios.post(`/api/v1/student/create`, studentData, config)
//         console.log(data)

//         dispatch({
//             type: CREATE_STUDENT_SUCCESS,
//             payload: data,
//         })


//     } catch (error) {
//         dispatch({
//             type: CREATE_STUDENT_FAIL,
//             payload: error.response.data.message,
//         })
//     }
// }
// Create Product
export const createStudent = (studentData) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_STUDENT_REQUEST });

        const config = {
            headers: { "Content-Type": "application/json" },
        };

        const { data } = await axios.post(
            `/api/v1/student/create`,
            studentData,
            config
        );

        dispatch({
            type: CREATE_STUDENT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: CREATE_STUDENT_FAIL,
            payload: error.response.data.message,
        });
    }
};

export const updateStudent = (id, studentData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_STUDENT_REQUEST });

        const config = {
            headers: { "Content-Type": "application/json" },
        };

        const { data } = await axios.put(
            `/api/v1/student/update/${id}`,
            studentData,
            config
        );

        dispatch({
            type: UPDATE_STUDENT_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_STUDENT_FAIL,
            payload: error.response.data.message,
        });
    }
};
// export const updateStudent = (id, studentData) => async (dispatch) => {
//     try {
//         dispatch({ type: UPDATE_STUDENT_REQUEST })

//         const config = {
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         }

//         const { data } = await axios.put(`/api/v1/student/update/${id}`, studentData, config)

//         console.log(data)

//         dispatch({
//             type: UPDATE_STUDENT_SUCCESS,
//             payload: data.success,
//         })

//     } catch (error) {
//         dispatch({
//             type: UPDATE_STUDENT_FAIL,
//             payload: error.response.data.message,
//         })
//     }
// }

export const deleteStudent = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_STUDENT_REQUEST })

        const { data } = await axios.delete(`/api/v1/student/delete/single/${id}`)

        dispatch({
            type: DELETE_STUDENT_SUCCESS,
            payload: data.success
        })
    } catch (error) {
        dispatch({
            type: DELETE_STUDENT_FAIL,
            payload: error.response.data.message
        })
    }
}



export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERROR })
}