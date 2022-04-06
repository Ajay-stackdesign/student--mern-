import {
    GET_STUDENT_REQUEST,

    GET_STUDENT_SUCCESS,

    GET_STUDENT_FAIL,
    CLEAR_ERROR,
    UPDATE_STUDENT_REQUEST,
    UPDATE_STUDENT_SUCCESS,
    UPDATE_STUDENT_FAIL,
    UPDATE_STUDENT_RESET,
    DELETE_STUDENT_REQUEST,
    DELETE_STUDENT_FAIL,
    DELETE_STUDENT_SUCCESS,
    DELETE_STUDENT_RESET,
    SINGLE_STUDENT_REQUEST,
    SINGLE_STUDENT_SUCCESS,
    SINGLE_STUDENT_FAIL,
    CREATE_STUDENT_REQUEST,
    CREATE_STUDENT_SUCCESS,
    CREATE_STUDENT_FAIL,
    CREATE_STUDENT_RESET
} from "../constants/studentContants"


export const studentsReducers = (state = { students: [] }, action) => {
    switch (action.type) {
        case GET_STUDENT_REQUEST:
            return {
                loading: true,
                students: [],
            }
        case GET_STUDENT_SUCCESS:
            return {
                loading: false,
                students: action.payload.students
            }
        case GET_STUDENT_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}

export const studentCreate = (state = { student: {} }, action) => {
    switch (action.type) {
        case CREATE_STUDENT_REQUEST:
            return {
                loading: true,
                ...state,
            }
        case CREATE_STUDENT_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                student: action.payload.student,
            }
        case CREATE_STUDENT_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CREATE_STUDENT_RESET:
            return {
                ...state,
                success: false,
            }
        case CLEAR_ERROR:
            return {
                ...state,
                error: null,
            }
        default:
            return state
    }
}


export const singleStudentReducer = (state = { student: {} }, action) => {
    switch (action.type) {
        case SINGLE_STUDENT_REQUEST:
            return {
                loading: true,
                ...state,
            }
        case SINGLE_STUDENT_SUCCESS:
            return {
                loading: false,
                student: action.payload
            }
        case SINGLE_STUDENT_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERROR:
            return {
                ...state,
                error: null,
            }
        default:
            return state
    }
}

export const updateStudent = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_STUDENT_REQUEST:
        case DELETE_STUDENT_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case UPDATE_STUDENT_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }
        case DELETE_STUDENT_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }
        case UPDATE_STUDENT_FAIL:
        case DELETE_STUDENT_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case UPDATE_STUDENT_RESET:
            return {
                ...state,
                isUpdated: false,
            }
        case DELETE_STUDENT_RESET:
            return {
                ...state,
                isDeleted: false,
            }
        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}