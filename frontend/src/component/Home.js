import React, { Fragment } from 'react'
import Search from './Search'
import DataGridMui from "./DataGridMui.js"
import AddList from "./AddList.js"


const Home = () => {
    return (
        <Fragment>
            <div className='home'>
                <div className="home__top">
                    <Search />
                </div>
                <div className='home__middle'>
                    <AddList />
                </div>
                <div className='home__bottom'>
                    <DataGridMui />
                </div>
            </div>
        </Fragment>
    )
}

export default Home