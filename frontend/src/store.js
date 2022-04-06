import { createStore, applyMiddleware, combineReducers } from "redux"

import thunk from "redux-thunk"

import { composeWithDevTools } from "redux-devtools-extension"
import { singleStudentReducer, studentCreate, studentsReducers, updateStudent } from "./reducer/studentReducers"




const reducer = combineReducers({
    students: studentsReducers,
    update: updateStudent,
    detail: singleStudentReducer,
    create: studentCreate,
})

const middleware = [thunk]

let initialStage = {}

const store = createStore(
    reducer,
    initialStage,
    composeWithDevTools(applyMiddleware(...middleware))
)


export default store