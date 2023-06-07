import { Link } from 'react-router-dom';
import logo from '../../../../public/favicon.png'
const Navbar = () => {

    const navOptions = <>
        <li><a>Home</a></li>
        <li><a>Instructors</a> </li>
        <li><a>Classes</a></li>
        <li><a>Dashboard</a></li>
    </>

    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to='/' className="normal-case text-xl">
                        <img className='w-16 inline' src={logo} alt="" />
                        <span className='font-semibold'><span className='text-green-500'>Shippo</span>  Sports Academy</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>

                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;