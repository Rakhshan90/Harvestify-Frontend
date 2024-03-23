import React from 'react'

const CreateAuction = () => {
    return (
        <div className="min-h-screen dark:bg-slate-800 dark:text-white">
            <div className="max-w-xl mx-auto flex flex-col items-center justify-center space-y-8">
                <h1 className="text-4xl font-bold text-left md:text-center">Create Auction</h1>
                <form className='flex flex-col flex-wrap space-y-3 w-full px-6 pb-6 md:px-4'>
                    <div className="flex flex-col space-y-3">
                        <label htmlFor="productId" className="block text-sm font-medium">Product Id</label>
                        <input type="text" id='productId' name='productId' placeholder='Enter product id'
                        className="w-full rounded-full p-4 outline-none border border-gray-100 shadow placeholder-gray-500 focus:ring focus:ring-teal-200 transition duration-200 mb-1 dark:bg-slate-600
                        dark:border-none dark:placeholder:text-slate-100"/>
                    </div>
                    <div className="flex flex-col space-y-3">
                        <label htmlFor="price" className="block text-sm font-medium">Starting Price</label>
                        <input type="number" id='price' name='price' placeholder='Enter starting price of auction'
                        className="w-full rounded-full p-4 outline-none border border-gray-100 shadow placeholder-gray-500 focus:ring focus:ring-teal-200 transition duration-200 mb-1 dark:bg-slate-600
                        dark:border-none dark:placeholder:text-slate-100"  />
                    </div>
                    <div className="flex flex-col space-y-3">
                        <label htmlFor="startTime" className="block text-sm font-medium">Start Time</label>
                        <input type="date" id='startTime' name='startTime' 
                        className="w-full rounded-full p-4 outline-none border border-gray-100 shadow placeholder-gray-500 focus:ring focus:ring-teal-200 transition duration-200 mb-1 dark:bg-slate-600
                        dark:border-none dark:placeholder:text-slate-100"  />
                    </div>
                    <div className="flex flex-col space-y-3">
                        <label htmlFor="endTime" className="block text-sm font-medium">End Time</label>
                        <input type="date" id='endTime' name='endTime'
                        className="w-full rounded-full p-4 outline-none border border-gray-100 shadow placeholder-gray-500 focus:ring focus:ring-teal-200 transition duration-200 mb-1 dark:bg-slate-600
                        dark:border-none dark:placeholder:text-slate-100"  />
                    </div>
                    <div className="flex flex-col space-y-3">
                        <label htmlFor="location" className="block text-sm font-medium">Location</label>
                        <input type="text" id='location' name='location' placeholder='Enter location of the auction'
                        className="w-full rounded-full p-4 outline-none border border-gray-100 shadow placeholder-gray-500 focus:ring focus:ring-teal-200 transition duration-200 mb-1 dark:bg-slate-600
                        dark:border-none dark:placeholder:text-slate-100"  />
                    </div>
                    <div className="flex flex-col space-y-3">
                        <label htmlFor="category" className="block text-sm font-medium">Category</label>
                        <input type="text" id='category' name='category' placeholder='Enter category of the auction'
                        className="w-full rounded-full p-4 outline-none border border-gray-100 shadow placeholder-gray-500 focus:ring focus:ring-teal-200 transition duration-200 mb-1 dark:bg-slate-600
                        dark:border-none dark:placeholder:text-slate-100"  />
                    </div>
                
                    <button className='bg-teal-500 text-white px-8 py-3 font-medium text-xl rounded-full'>
                        Create
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateAuction