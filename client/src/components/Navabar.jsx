import { Link } from "react-router-dom";

const Navbar = () => {
    let isLogin = true;
    return (
        <>
            <nav className='flex align-middle justify-between bg-blue-400 text-white font-medium pl-[7%] pr-[7%] pt-4 pb-4'>
                <div>
                    <p>TodoTrack</p>
                </div>
                {isLogin ? (
                    <div className='flex align-middle gap-3'>
                        <p>username</p>
                        <Link to='/logout'>Logout</Link>
                    </div>
                ) : (
                    <div>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                )}
            </nav>
        </>
    );
}

export default Navbar;