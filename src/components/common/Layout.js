import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar.js';
import Footer from './Footer.js';

function Layout (){
    return(
        <div >
            <NavBar/>
            <div className='container min-vh-100 p-4 '>
                <Outlet />
            </div>
            <Footer/>
        </div>
    )
}

export default Layout;