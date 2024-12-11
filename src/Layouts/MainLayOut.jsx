import React from 'react'
import Navbar from '../ShareCoponents/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './../ShareCoponents/Footer';

function MainLayOut() {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet />
            <Footer></Footer>
        </div>
    )
}

export default MainLayOut
