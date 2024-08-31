import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
    const {isLoggedIn, user} = useAuth();
    // console.log(isLoggedIn, user);
    
    return (
        <>
            <nav className='flex items-center justify-between bg-blue-400 text-blue-50 font-medium pl-[7%] pr-[7%] pt-4 pb-4 cursor-context-menu fixed top-0 left-0 right-0 z-10'>
                <div>
                    <p className='text-white'>TodoTrack</p>
                </div>
                {isLoggedIn ? (
                    <div className='flex align-middle gap-3'>
                        <p className='text-white'>{user?.name?.split(' ').join('')}</p>
                        <Link to='/logout' className='hover:text-white'>Logout</Link>
                    </div>
                ) : (
                    <div className='flex align-middle gap-3'>
                        <Link to="/login" className='hover:text-white'>Login</Link>
                        <Link to="/register" className='hover:text-white'>Register</Link>
                    </div>
                )}
            </nav>
        </>
    );
}

export default Navbar;