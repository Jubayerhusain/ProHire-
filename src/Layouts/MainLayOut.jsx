import React from 'react'
import Navbar from '../ShareCoponents/Navbar'
import { Outlet } from 'react-router-dom'

function MainLayOut() {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet />
        </div>
    )
}

export default MainLayOut
