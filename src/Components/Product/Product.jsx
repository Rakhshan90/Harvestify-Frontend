import React from 'react'
import headphone from './headphone.png'
import { useNavigate } from 'react-router-dom'

const Product = () => {
    const navigate = useNavigate();
    return (
        <div className="flex items-center justify-center bg-slate-100 dark:bg-slate-800 min-h-screen">
            {/* <!-- flex container --> */}
            <div className="flex flex-col space-y-10 p-6 m-3 rounded-2xl shadow-2xl
             bg-white dark:bg-slate-600 md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16">
                {/* <!-- headphone img div --> */}
                <div>
                    <img src={headphone} alt="" className="mx-auto w-60 hover:scale-105 duration-300" />
                </div>
                {/* <!-- Content container --> */}
                <div className="flex flex-col space-y-3">
                    {/* <!-- Title, description, and owner container --> */}
                    <div className="flex flex-col space-y-3 text-center md:text-left">
                        {/* <!-- title --> */}
                        <h1 className="font-bold text-4xl dark:text-white">Headset Quartz</h1>
                        {/* description */}
                        <p className="max-w-sm text-sm text-gray-400 font-medium">
                            Razer kraken kitty Edt Gaming Headset Quartz
                        </p>
                        {/* owner */}
                        <div className="flex space-x-3 items-center">
                            <p className="text-lg font-medium dark:text-white uppercase">owner:</p>
                            <p className="text-md text-gray-400">shaz</p>
                        </div>
                    </div>

                    {/* <!-- price container --> */}
                    <div className="flex flex-col space-y-3 mb-4 text-center md:text-left">
                        <div className="flex space-x-3 items-center">
                            <p className="text-lg font-medium dark:text-white uppercase">quantity:</p>
                            <p className="text-md text-gray-400">1ton</p>
                        </div>
                        <p className="text-5xl font-bold dark:text-white">$599</p>
                        <div className="group">
                            <button onClick={()=> navigate('/auction/:id')}
                            className="w-full bg-teal-700 text-white transition-all duration-150 border-b-8 border-b-teal-700 rounded-lg group-hover:border-t-8 group-hover:border-t-teal-700 group-hover:bg-teal-700 group-hover:border-b-0 group-hover:shadow-lg">
                                <div className="px-8 py-4 bg-teal-500 rounded-lg duration-150 group-hover:bg-teal-700 font-bold">Go to auction</div>
                            </button>
                        </div>

                        {/* <!-- stock --> */}
                        <div className="flex items-center space-x-3 group">
                            <div className="h-3 w-3 rounded-full bg-green-400 group-hover:animate-ping"></div>
                            <div className="text-sm">In stock</div>
                        </div>

                        <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2">
                            <button onClick={()=> navigate('/update-product/:id')} className="flex justify-center items-center space-x-3 px-5 py-3 border-2 border-gray-300 rounded-lg shadow-sm hover:-translate-y-0.5 hover:shadow-lg transition-all duration-150 dark:text-gray-300">
                                <span>Edit</span>
                            </button>
                            <button className="flex justify-center items-center space-x-3 px-5 py-3 border-2 border-gray-300 rounded-lg shadow-sm hover:-translate-y-0.5 hover:shadow-lg transition-all duration-150 dark:text-gray-300">
                                <span>Delete</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product