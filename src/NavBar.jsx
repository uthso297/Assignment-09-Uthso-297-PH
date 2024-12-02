import logo from './assets/logo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from './AuthProvider/AuthProvider';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const NavBar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const logout = () => {
        signOutUser();
        navigate('/');
    };

    const handleTutorialsClick = () => {
        navigate('/login')
    };

    useEffect(() => {
        AOS.init({
            duration: 1500,
            easing: 'linear',
            once: true,
        });
    }, []);

    return (
        <>
            {user && (
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                    <h1 className='text-center font-bold text-white text-xl'>Welcome to our website Mr/Ms: {user?.displayName}</h1>
                </div>
            )}

            <div className='flex items-center justify-between p-4'>
                <div className='flex items-center justify-between w-full'>
                    <div className='flex items-center gap-3'>
                        <img className='w-12 h-12 rounded-full' src={logo} alt="Logo" />
                        <div className='hidden lg:flex'>
                            <ul className='flex gap-6 text-white'>
                                <li>
                                    <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-yellow-500' : 'text-white'}>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/start-learning'} className={({ isActive }) => isActive ? 'text-yellow-500' : 'text-white'}>
                                        Start Learning
                                    </NavLink>
                                </li>
                                <li>
                                    {user && user?.email ? (
                                        <NavLink to={'/tutorials'} className={({ isActive }) => isActive ? 'text-yellow-500' : 'text-white'}>
                                            Tutorials
                                        </NavLink>
                                    ) : (
                                        <button onClick={handleTutorialsClick} className='text-white'>
                                            Tutorials
                                        </button>
                                    )}
                                </li>
                                <li>
                                    <NavLink to={'/aboutus'} className={({ isActive }) => isActive ? 'text-yellow-500' : 'text-white'}>
                                        About Us
                                    </NavLink>
                                </li>
                                <li>
                                    {user && user?.email ? (
                                        <NavLink to={'/profile'} className={({ isActive }) => isActive ? 'text-yellow-500' : 'text-white'}>
                                            My Profile
                                        </NavLink>
                                    ) : null}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='lg:hidden'>
                        <button onClick={() => setMenuOpen(!menuOpen)} className='text-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {user ? (
                    <div className='flex justify-end items-center md:gap-3 gap-1 md:w-1/5 w-3/5'>
                        <div>
                            <img
                                className="w-12 h-12 rounded-full"
                                src={user?.photoURL}
                                alt="User Avatar"
                            />

                        </div>
                        <button onClick={logout} className='text-white bg-black md:px-4 md:py-2 px-1 py-1 rounded-lg'>
                            Logout
                        </button>
                    </div>
                ) : (
                    <NavLink to={'/login'}>
                        <button className='text-white bg-black px-4 py-2 rounded-lg'>
                            Login
                        </button>
                    </NavLink>
                )}
            </div>

            <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} bg-black p-4`}>
                <ul className='flex flex-col gap-4 text-white'>
                    <li>
                        <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-yellow-500' : 'text-white'}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/start-learning'} className={({ isActive }) => isActive ? 'text-yellow-500' : 'text-white'}>
                            Start Learning
                        </NavLink>
                    </li>
                    <li>
                        {user && user?.email ? (
                            <NavLink to={'/tutorials'} className={({ isActive }) => isActive ? 'text-yellow-500' : 'text-white'}>
                                Tutorials
                            </NavLink>
                        ) : (
                            <button onClick={handleTutorialsClick} className='text-white'>
                                Tutorials
                            </button>
                        )}
                    </li>
                    <li>
                        <NavLink to={'/aboutus'} className={({ isActive }) => isActive ? 'text-yellow-500' : 'text-white'}>
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        {user && user?.email ? (
                            <NavLink to={'/profile'} className={({ isActive }) => isActive ? 'text-yellow-500' : 'text-white'}>
                                My Profile
                            </NavLink>
                        ) : null}
                    </li>
                </ul>
            </div>
        </>
    );
};

export default NavBar;
