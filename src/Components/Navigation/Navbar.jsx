import React, { useState } from 'react'
import darkMode from '../dark_mode.png'
import lightMode from '../light_mode.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [themeIcon, setThemeIcon] = useState(false);
    const toggleEvent = () => {
        setIsOpen(!isOpen);
    }
    const toggleTheme = () => {
        setThemeIcon(!themeIcon);
        document.documentElement.classList.toggle('dark');
    }
    return (
        <nav className="relative mx-auto p-6 dark:bg-slate-800 dark:text-white">
            {/* flex container */}
            <div className="flex items-center justify-between">
                {/* container for all items */}
                <div className="flex items-center space-x-20">
                    {/* logo */}
                    <h2 className="font-bold text-black dark:text-white text-4xl">Harvestify</h2>
                    {/* container for menu items */}
                    <div className="hidden lg:flex space-x-8 font-bold">
                        <a href="#" className="text-grayishBlue hover:text-teal-500">Features</a>
                        <a href="#" className="text-grayishBlue hover:text-teal-500">Pricing</a>
                        <a href="#" className="text-grayishBlue hover:text-teal-500">Resources</a>
                    </div>
                </div>
                {/* container for login/signup */}
                <div className="hidden lg:flex space-x-6 items-center font-bold">
                    {/* dark mode toggle switch */}
                    <div onClick={toggleTheme} className='cursor-pointer'>
                        {themeIcon ? <img src={lightMode} className='invert' alt="" /> :
                            <img src={darkMode} alt="" />}
                    </div>

                    {/* login and sign up */}
                    <a href="#" className="text-grayishBlue hover:text-teal-500">Login</a>
                    <a href="#" className="bg-teal-500 text-white font-bold py-3 px-8 rounded-full hover:opacity-70">Sign up</a>
                </div>

                {/* hamburger menu button */}
                <div className='flex space-x-4 lg:hidden'>
                    {/* dark mode toggle switch */}
                    <div onClick={toggleTheme} className='cursor-pointer lg:hidden'>
                        {themeIcon ? <img src={lightMode} className='invert' alt="" /> :
                            <img src={darkMode} alt="" />}
                    </div>

                    <button onClick={toggleEvent} id="menu-btn" type="button" className={
                        `block hamburger lg:hidden focus:outline-none ${isOpen ? 'open' : ''}`
                    }>
                        <span className="hamburger-top bg-slate-900 dark:bg-white"></span>
                        <span className="hamburger-middle bg-slate-900 dark:bg-white"></span>
                        <span className="hamburger-down bg-slate-900 dark:bg-white"></span>
                    </button>
                </div>
            </div>

            {/* mobile menu  */}
            <div id="menu" className={`absolute lg:hidden ${isOpen ? 'flex' : 'hidden'} z-50 left-6 right-6 top-40 p-6 
    rounded-lg bg-slate-700`}>
                <div className="flex flex-col space-y-6 justify-center items-center font-bold text-white w-full">
                    <a href="#" className="w-full text-center">Features</a>
                    <a href="#" className="w-full text-center">Pricing</a>
                    <a href="#" className="w-full text-center">Resources</a>
                    <a href="#" className="w-full pt-6 border-t border-slate-400 text-center">Login</a>
                    <a href="#" className="bg-teal-500 py-3 px-8 rounded-full text-center">Sign up</a>
                </div>
            </div>

        </nav>
    )
}

export default Navbar