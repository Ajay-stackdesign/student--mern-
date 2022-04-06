import React, { Fragment, useState } from 'react'
import "./Search.scss"
import { useHistory } from 'react-router-dom'

const Search = () => {
    const [keyword, setKeyword] = useState("")
    const history = useHistory()


    const handleSubmit = (e) => {
        e.preventDefault()
        if (keyword.trim()) {
            history.push(`/student/get/${keyword}`)
        } else {
            history.push("/student/getall")
        }
    }
    return (
        <Fragment>
            <form className='searchBox' onSubmit={handleSubmit}>
                <input className='searchText' type="text" placeholder="Search student..." required onChange={(e) => setKeyword(e.target.value)} />
                <input className="sub" type="submit" value="search" />
            </form>
        </Fragment>
    )
}

export default Search