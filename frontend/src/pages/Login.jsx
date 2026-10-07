import React, { useState } from 'react'
import { Lock, Mail, User2Icon } from 'lucide-react';

const Login = () => {

    const query = new URLSearchParams(window.location.search)
    const urlstate = query.get('state');
    const [state, setstate] = useState(urlstate || "login");

    const [formData, setformData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData(prev => ({ ...prev, [name]: value }))
    }
    return (
        <div className="flex h-screen w-full ">
            <div className="w-full hidden md:inline-block">
                <img className="h-full" src="Loginpage.png" />
            </div>

            <div className="w-full mr-50 flex flex-col items-center justify-center">

                <form className="md:w-96 w-80 flex flex-col items-center justify-center" onSubmit={handleSubmit}>
                    <h2 className="text-4xl text-gray-900 font-medium">{state == 'login' ? "Sign in" : "Sign Up"}</h2>
                    <p className="text-sm text-gray-500/90 mt-3">Welcome, Please {state == 'login' ? "Sign in" : "Sign Up"} to continue</p>

                    <button type="button" className="w-full mt-8 bg-gray-500/10 flex items-center justify-center h-12 rounded-full">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg" alt="googleLogo" />
                    </button>

                    <div className="flex items-center gap-4 w-full my-5">
                        <div className="w-full h-px bg-gray-300/90"></div>
                        <p className="w-full text-nowrap text-sm text-gray-500/90">or {state == 'login' ? "Sign in" : "Sign Up"} with email</p>
                        <div className="w-full h-px bg-gray-300/90"></div>
                    </div>

                    {
                        state !== 'login' ? (
                            <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2 mb-6">
                                <User2Icon size={16} />
                                <input name="name" type="text" placeholder="Username" className="bg-transparent outline-none text-sm w-full h-full" required value={formData.name} onChange={handleChange} />
                            </div>
                        ) : <div></div>
                    }
                    <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
                        <Mail size={16} />
                        <input name="email" type="email" placeholder="Email id" className="bg-transparent placeholder-gray-500/80 outline-none text-sm w-full h-full" required value={formData.email} onChange={handleChange} />
                    </div>


                    <div className="flex items-center mt-6 w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
                        <Lock size={16} />
                        <input name="password" type="password" placeholder="Password" className="bg-transparent placeholder-gray-500/80 outline-none text-sm w-full h-full" required value={formData.password} onChange={handleChange} />
                    </div>

                    {state === "login" ? <div className="w-full flex items-center justify-center mt-8 text-blue-500/80">
                        <a className="text-sm underline" href="#">Forgot password?</a>
                    </div> : <div></div>}

                    <button type="submit" className="mt-8 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity">
                        {state == 'login' ? "Login" : "Sign Up"}
                    </button>
                    <p className="text-gray-500/90 text-sm mt-4">{state === "login" ? "Don't " : "Have "} have an account? <a onClick={() => {setstate(state === "login" ? "register" : "login");
                    }} className="text-indigo-400 hover:underline cursor-pointer">{state === "login" ? "Sign Up" : "Sign in"}</a></p>
                </form>
            </div>
        </div>
    );
}

export default Login
