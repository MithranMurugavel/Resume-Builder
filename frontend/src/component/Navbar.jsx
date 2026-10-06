import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const user = {name:"jhon"};
    const navigate = useNavigate();
    const handleLogout = () =>{
        navigate("/",{replace:true});
    }
  return (
    <div className="w-full shadow bg-white">
      <nav className = "flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5 text-slate-800 transition-all">
        <Link to='/'>
            <img src="logo.svg" className="h-11 w-auto"/>
        </Link>
        <div className="flex item-center gap-3 text-sm">
            <p className="max-sm:hidden mt-3">Hi, {user?.name}</p>
            <button className ="bg-white hover:bg-slate-100 border border-grey-300 px-8 rounded-full active:scale-95 transition-all" onClick={handleLogout}>Logout</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
