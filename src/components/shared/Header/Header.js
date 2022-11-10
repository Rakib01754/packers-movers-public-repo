import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../../assets/logo.png'
import { FaBars } from "react-icons/fa";
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut()
        navigate('/login')
    }

    return (

        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-200 text-black mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <NavLink to="/" aria-label="Back to homepage" className="flex items-center p-2">
                            <img src={Logo} alt="logo" className='w-44 md:w-64' />
                        </NavLink>
                        <button
                            className="text-orange-600 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <FaBars></FaBars>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto font-bold">
                            <li className="flex my-2">
                                <NavLink to="/" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Home</NavLink>
                            </li>
                            <li className="flex">
                                <NavLink to="/services" className={({ isActive }) =>
                                    isActive ? 'flex items-center px-4 -mb-1  text-orange-600' : 'flex items-center px-4 -mb-1 border-b-2 border-transparent'}>Services</NavLink>
                            </li>
                            <li className="flex my-2">
                                <NavLink to="/blogs" className={({ isActive }) =>
                                    isActive ? 'flex items-center px-4 -mb-1 text-orange-600' : 'flex items-center px-4 -mb-1 border-b-2 border-transparent'}>Blogs</NavLink>
                            </li>
                            {(user && user.uid) ? <>
                                <li className="flex my-2">
                                    <NavLink to="/reviews" className={({ isActive }) =>
                                        isActive ? 'flex items-center px-4 -mb-1 text-orange-600' : 'flex items-center px-4 -mb-1 border-b-2 border-transparent'}>My Reviews</NavLink>
                                </li>
                                <li className="flex my-2">
                                    <NavLink to="/addservice" className={({ isActive }) =>
                                        isActive ? 'flex items-center px-4 -mb-1 text-orange-600' : 'flex items-center px-4 -mb-1 border-b-2 border-transparent'}>Add Service</NavLink>
                                </li>
                                <li className="flex my-2" onClick={handleLogOut}>
                                    <NavLink to="" className='outline outline-4 flex items-center px-4 -mb-1 mx-4 border-b-2 border-transparent'>Logout</NavLink>
                                </li>
                                <img src={user?.photoURL} alt="" className="w-12 h-12 mx-auto my-4 md:my-0 rounded-full dark:bg-gray-500 aspect-square" />
                            </> :
                                <li className="flex">
                                    <NavLink to="/login" className={({ isActive }) =>
                                        isActive ? 'outline outline-4 flex items-center px-4 -mb-1 text-orange-600' : 'outline outline-4 flex items-center px-4 -mb-1 border-b-2 border-transparent'}>
                                        <button className="md:px-4 md:py-2 rounded dark:bg-violet-400 dark:text-gray-900 font-bold">Log in</button>
                                    </NavLink>
                                </li>}

                        </ul>

                    </div>
                </div>
            </nav>
        </>


    );
};

export default Header;