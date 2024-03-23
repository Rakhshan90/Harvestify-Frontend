import React from 'react'

const CreateProduct = () => {
    return (
        <div className="min-h-screen dark:bg-slate-800 dark:text-white">
            <div className="max-w-xl mx-auto flex flex-col items-center justify-center space-y-8">
                <h1 className="text-4xl font-bold text-left md:text-center">Create Product</h1>
                <form className='flex flex-col flex-wrap space-y-3 w-full px-6 pb-6 md:px-4'>
                    <div className="flex flex-col space-y-3">
                        <label htmlFor="title" className="block text-sm font-medium">Product Title</label>
                        <input type="text" id='title' name='title' placeholder='Enter product title'
                        className="w-full rounded-full p-4 outline-none border border-gray-100 shadow placeholder-gray-500 focus:ring focus:ring-teal-200 transition duration-200 mb-1 dark:bg-slate-600
                        dark:border-none dark:placeholder:text-slate-100"/>
                    </div>
                    <div className="flex flex-col space-y-3">
                        <label htmlFor="price" className="block text-sm font-medium">Price</label>
                        <input type="number" id='price' name='price' placeholder='Enter product title'
                        className="w-full rounded-full p-4 outline-none border border-gray-100 shadow placeholder-gray-500 focus:ring focus:ring-teal-200 transition duration-200 mb-1 dark:bg-slate-600
                        dark:border-none dark:placeholder:text-slate-100"  />
                    </div>
                    <div className="flex flex-col space-y-3">
                        <label htmlFor="description" className="block text-sm font-medium">Description</label>
                        <input type="text" id='description' name='description' placeholder='Enter product title'
                        className="w-full rounded-full p-4 outline-none border border-gray-100 shadow placeholder-gray-500 focus:ring focus:ring-teal-200 transition duration-200 mb-1 dark:bg-slate-600
                        dark:border-none dark:placeholder:text-slate-100"  />
                    </div>
                    <div className="flex flex-col space-y-3">
                        <label htmlFor="quantity" className="block text-sm font-medium">Quantity</label>
                        <input type="text" id='quantity' name='quantity' placeholder='Enter product title'
                        className="w-full rounded-full p-4 outline-none border border-gray-100 shadow placeholder-gray-500 focus:ring focus:ring-teal-200 transition duration-200 mb-1 dark:bg-slate-600
                        dark:border-none dark:placeholder:text-slate-100"  />
                    </div>
                    <div className="flex flex-col space-y-3">
                        <label htmlFor="phone" className="block text-sm font-medium">Upload image</label>
                        <input type="file" id='photo' name='photo' placeholder='Enter product title'
                        className="w-full rounded-full p-4 outline-none border border-gray-100 shadow placeholder-gray-500 focus:ring focus:ring-teal-200 transition duration-200 mb-1 dark:bg-slate-600
                        dark:border-none dark:placeholder:text-slate-100"  />
                    </div>
                    <div className="flex space-x-3">
                        <label htmlFor="isAgreed" className="block text-sm font-medium">Check if your product is active?</label>
                        <input type="checkbox" id="isAgreed" name="isAgreed" placeholder='Enter product title'
                        className="w-4 outline-none border border-gray-100 mb-1"  />
                    </div>

                    <button className='bg-teal-500 text-white px-8 py-3 font-medium text-xl rounded-full'>
                        Create
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateProduct