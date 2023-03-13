import React from "react";
import { NavLink } from "react-router-dom";
import SearchMovie from "../SearchMovie";
// bg-dark
function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark ">
            <div className="container pt-3 ">
            <ul className="navbar-nav mr-auto nav">
                <li className='nav-item active'>
                    <a className="navbar-brand" href="#">Fancast</a>
                </li>
                <li className="nav-item" >
                    <NavLink className="nav-link" to='/'>
                    Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/SignUp'>
                        SignUp
                    </NavLink>
                </li>
            </ul>
            
            </div>
        </nav>
    )
}
/*<SearchMovie/>*/
export default NavBar;