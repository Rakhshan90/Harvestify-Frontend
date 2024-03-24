import React from 'react'

const Auctions = () => {
  return (
    <div className='min-h-screen mx-auto p-6 md:p-12 dark:bg-slate-800'>
        <div className="flex flex-col space-y-12">
            {/* item 1 - location and category container */}
            <div className="flex flex-col justify-between space-y-6 md:flex-row md:space-y-0">
                {/* location */}
                <select name="location" id="location"
                className='px-6 py-3 rounded-lg text-bold bg-gray-50 text-gray-700 dark:bg-gray-700 dark:text-gray-400'>
                    <option 
                    value="location">Location</option>
                    <option
                    value="lucknow">Lucknow</option>
                    <option 
                    value="kanpur">Kanpur</option>
                </select>

                {/* category */}
                <select name="category" id="category"
                className='px-6 py-3 rounded-lg text-bold bg-gray-50 text-gray-700 dark:bg-gray-700 dark:text-gray-400'>
                    <option value="category">Category</option>
                    <option value="grains">Grains</option>
                    <option value="vegetables">Vegetables</option>
                </select>
            </div>
            {/* item 2 - table for displaying all the auctions */}
            <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                        <th className='px-6 py-3'>Product</th>
                        <th className='px-6 py-3'>Starting Price</th>
                        <th className='px-6 py-3'>Star Time</th>
                        <th className='px-6 py-3'>End Time</th>
                        <th className='px-6 py-3'>Current Bid</th>
                        <th className='px-6 py-3'>Winnder</th>
                        <th className='px-6 py-3'>isActive</th>
                        <th className='px-6 py-3'>Location</th>
                        <th className='px-6 py-3'>Category</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                        <td className='px-6 py-4'>Rice</td>
                        <td className='px-6 py-4'>1299</td>
                        <td className='px-6 py-4'>01 / 05 / 2024</td>
                        <td className='px-6 py-4'>03 / 05/ 2024</td>
                        <td className='px-6 py-4'>1599</td>
                        <td className='px-6 py-4'>null</td>
                        <td className='px-6 py-4'>
                            <button className='bg-teal-500 text-white font-medium text-sm px-6 py-3 rounded-lg'>
                                Enter
                            </button>
                        </td>
                        <td className='px-6 py-4'>Lucknow</td>
                        <td className='px-6 py-4'>Grains</td>
                    </tr>
                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                        <td className='px-6 py-4'>Tomato</td>
                        <td className='px-6 py-4'>199</td>
                        <td className='px-6 py-4'>04 / 05 / 2024</td>
                        <td className='px-6 py-4'>07 / 05/ 2024</td>
                        <td className='px-6 py-4'>249</td>
                        <td className='px-6 py-4'>null</td>
                        <td className='px-6 py-4'>
                            <button className='bg-teal-500 text-white font-medium text-sm px-6 py-3 rounded-lg'>
                                Enter
                            </button>
                        </td>
                        <td className='px-6 py-4'>Kanpur</td>
                        <td className='px-6 py-4'>Vegetables</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Auctions