import { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { GrLogout } from 'react-icons/gr'
import { AiOutlineBars } from 'react-icons/ai'
import { AuthContext } from '../../../providers/AuthProvider'

const Sidebar = () => {
    const navigate = useNavigate()
    const { user, logOut } = useContext(AuthContext)
    const [isActive, setActive] = useState('false')
    
    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }
    const handleLogOut = () => {
        logOut()
        navigate('/')
    }
    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <span className='text-green-500'>Shippo-</span> Sports Academy
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>
            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    {/* Branding & Profile Info */}
                    <div>
                        <div className='font-bold w-full hidden md:flex py-2 justify-center items-center bg-rose-100 mx-auto'>
                        <span className='text-green-500'>Shippo-</span> Sports Academy
                        </div>

                        <div className='flex flex-col items-center mt-6 -mx-2'>
                            <Link to='/dashboard'>
                                <img
                                    className='object-cover w-24 h-24 mx-2 rounded-full'
                                    src={user?.photoURL}
                                    alt='avatar'
                                    referrerPolicy='no-referrer'
                                />
                            </Link>
                            <Link to='/dashboard'>
                                <h4 className='mx-2 mt-2 font-medium text-gray-800  hover:underline'>
                                    {user?.displayName}
                                </h4>
                            </Link>
                            <Link to='/dashboard'>
                                <p className='mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline'>
                                    {user?.email}
                                </p>
                            </Link>
                        </div>
                    </div>

                    <hr className='mt-4 border border-rose-300' />

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        <nav>
                            <>
                                {/* Menu Links */}
                                <NavLink
                                    to='add-room'
                                    className={({ isActive }) =>
                                        `flex items-center px-4 py-2 mt-2  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                        }`
                                    }
                                >
                                    <span className='mx-4 font-medium'>My Selected Class</span>
                                </NavLink>

                                <NavLink
                                    to='add-room'
                                    className={({ isActive }) =>
                                        `flex items-center px-4 py-2 mt-2  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                        }`
                                    }
                                >
                                    <span className='mx-4 font-medium'>My Enrolled Class</span>
                                </NavLink>
                                <NavLink
                                    to='/paymentHistory'
                                    className={({ isActive }) =>
                                        `flex items-center px-4 py-2 mt-2  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                        }`
                                    }
                                >
                                    {/* <BsFillHouseAddFill className='w-5 h-5' /> */}

                                    <span className='mx-4 font-medium'>Payment History</span>
                                </NavLink>

                                <hr className='mt-4 mb-2 border border-rose-300' />

                                <NavLink
                                    to='/'
                                    className={({ isActive }) =>
                                        `flex items-center px-4 py-2 mt-2  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                        }`
                                    }
                                >
                                    <span className='mx-4 font-medium'>Home</span>
                                </NavLink>
                                <NavLink
                                    to='/instructors'
                                    className={({ isActive }) =>
                                        `flex items-center px-4 py-2 mt-2  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                        }`
                                    }
                                >
                                    <span className='mx-4 font-medium'>Instructors</span>
                                </NavLink>
                                <NavLink
                                    to='/classes'
                                    className={({ isActive }) =>
                                        `flex items-center px-4 py-2 mt-2  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                        }`
                                    }
                                >
                                    <span className='mx-4 font-medium'>Classes</span>
                                </NavLink>
                            </>
                        </nav>
                    </div>
                </div>

                <div>
                    
                    <button
                        onClick={handleLogOut}
                        className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
                    >
                        <GrLogout className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar;