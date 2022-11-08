import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Header = () => {

    const {logOut, user} = useContext(AuthContext)
     const handelLogout = () => {
        logOut()
        .then(()=> {
            console.log("Log Out successfuly..")
        })
        .catch(error=> console.log(error))
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {/* Mobile devices menu */}
                        <li> <Link to='/blog'>Blog</Link></li>
                        <li> <Link to='/add-services'>Add Services</Link></li>

                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {/* Laptop devices menu */}
                        <li> <Link to='/blog'>Blog</Link></li>
                        <li> <Link to='/add-services'>Add Services</Link></li>

                    <li>{user?.email}</li>

                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/login" className="btn btn-gost">Login</Link>
                <button onClick={handelLogout}  className="btn btn-gost">logout</button>
            </div>
        </div>
    );
};

export default Header;