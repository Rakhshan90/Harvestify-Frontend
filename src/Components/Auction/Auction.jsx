import React from 'react'

const Auction = () => {
    return (
        <div className='min-h-screen p-6 md:p-12 mx-auto dark:bg-slate-800'>
            <div className="flex flex-col space-y-6 items-center md:flex-row md:space-y-0 md:space-x-6">
                {/* item 1 - auction details */}
                <div className="flex flex-col space-y-3 md:w-1/2 p-4 md:p-8 border border-gray-700 rounded-lg">
                    <h1 className="text-3xl font-bold font-heading mb-4 dark:text-white">Auction details</h1>
                    <div className="flex justify-between px-5 py-2 bg-gray-50 
                text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                        {/* property */}
                        <h5 className="text-md uppercase font-bold text-center md:text-left">
                            Product
                        </h5>
                        {/* value */}
                        <p className="sm text-center md:text-left">Rice</p>
                    </div>
                    <div className="flex justify-between px-5 py-2 bg-gray-50 
                text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                        {/* property */}
                        <h5 className="text-md uppercase font-bold text-center md:text-left">
                            Starting price
                        </h5>
                        {/* value */}
                        <p className="sm text-center md:text-left">1299</p>
                    </div>
                    <div className="flex justify-between px-5 py-2 bg-gray-50 
                text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                        {/* property */}
                        <h5 className="text-md uppercase font-bold text-center md:text-left">
                            starting time
                        </h5>
                        {/* value */}
                        <p className="sm text-center md:text-left">01 / 05 / 2024</p>
                    </div>
                    <div className="flex justify-between px-5 py-2 bg-gray-50 
                text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                        {/* property */}
                        <h5 className="text-md uppercase font-bold text-center md:text-left">
                            end time
                        </h5>
                        {/* value */}
                        <p className="sm text-center md:text-left">03 / 05 / 2024</p>
                    </div>
                    <div className="flex justify-between px-5 py-2 bg-gray-50 
                text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                        {/* property */}
                        <h5 className="text-md uppercase font-bold text-center md:text-left">
                            Winner
                        </h5>
                        {/* value */}
                        <p className="sm text-center md:text-left">null</p>
                    </div>
                    <div className="flex justify-between px-5 py-2 bg-gray-50 
                text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                        {/* property */}
                        <h5 className="text-md uppercase font-bold text-center md:text-left">
                            current bid
                        </h5>
                        {/* value */}
                        <p className="sm text-center md:text-left">1599</p>
                    </div>
                    <div className="flex justify-between px-5 py-2 bg-gray-50 
                text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                        {/* property */}
                        <h5 className="text-md uppercase font-bold text-center md:text-left">
                            location
                        </h5>
                        {/* value */}
                        <p className="sm text-center md:text-left">Lucknow</p>
                    </div>
                    <div className="flex justify-between px-5 py-2 bg-gray-50 
                text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                        {/* property */}
                        <h5 className="text-md uppercase font-bold text-center md:text-left">
                            category
                        </h5>
                        {/* value */}
                        <p className="sm text-center md:text-left">grains</p>
                    </div>
                </div>

                {/* item 2 - all bid details and place bid container */}
                <div className="flex flex-col space-y-12 md:w-1/2">
                    {/* all bid details */}
                    <div className="flex flex-col space-y-3">
                        <h1 className="text-3xl font-bold font-heading mb-4 dark:text-white">Bids</h1>
                        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                                <tr>
                                    <th className='px-6 py-3'>amount</th>
                                    <th className='px-6 py-3'>Placed by</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                    <td className='px-6 py-4'>1399</td>
                                    <td className='px-6 py-4'>shaz</td>
                                </tr>
                                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                    <td className='px-6 py-4'>1599</td>
                                    <td className='px-6 py-4'>hassan</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* place bid */}
                    <form className='md:w-1/2 dark:text-white'>
                        <h1 className="text-3xl font-bold font-heading mb-4">Place Your Bid</h1>
                        <label htmlFor='auctionId' className="block text-sm font-medium mb-2">Auction Id</label>
                        <input
                            type="auctionId"
                            id="auctionId"
                            // {...formik.getFieldProps("email")}
                            className="w-full rounded-full p-4 outline-none border border-gray-100 shadow placeholder-gray-500 focus:ring focus:ring-teal-200 transition duration-200 mb-1 dark:bg-slate-600
                            dark:border-none dark:placeholder:text-slate-100"
                            placeholder="Enter Auction Id"
                        />
                        {/* {formik.touched.email && formik.errors.email && (
                        <div className="text-red-500 mb-4 mt-1">
                            {formik.errors.email}
                        </div>)} */}
                        <label htmlFor='amount' className="block text-sm font-medium mb-2">Bid amount</label>
                        <input
                            type="number"
                            id="amount"
                            // {...formik.getFieldProps("email")}
                            className="w-full rounded-full p-4 outline-none border border-gray-100 shadow placeholder-gray-500 focus:ring focus:ring-teal-200 transition duration-200 mb-1 dark:bg-slate-600
                            dark:border-none dark:placeholder:text-slate-100"
                            placeholder="Enter Bid amount"
                        />
                        {/* {formik.touched.email && formik.errors.email && (
                        <div className="text-red-500 mb-4 mt-1">
                            {formik.errors.email}
                        </div>)} */}

                        <button
                            className="h-14 inline-flex items-center justify-center py-4 px-6 text-white font-bold font-heading rounded-full bg-teal-500 w-full text-center border border-teal-600 shadow hover:bg-teal-600 focus:ring focus:ring-teal-200 transition duration-200 my-6"
                            type="submit"
                        >
                            Place Bid
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Auction