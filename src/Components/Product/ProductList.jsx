import React from 'react'
import wheat from './wheat.jpg'
import { useNavigate } from 'react-router-dom'


const ProductList = () => {
    const navigate = useNavigate();
    return (
        <div className='min-h-screen mx-auto p-6 md:p-12 dark:bg-slate-800 dark:text-white'>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="flex flex-col rounded-xl">
                    {/* img */}
                    <div onClick={()=>navigate('/product/:id')} 
                    className='h-58 w-58'>
                        <img src={wheat} alt="" className='h-full w-full rounded-t-xl 
                        bg-no-repeat bg-cover bg-center hover:scale-105 duration-300 cursor-pointer' />
                    </div>
                    {/* product title */}
                    <h2 className="text-lg font-medium text-left">Rice</h2>
                    {/* product description */}
                    <p className="max-w-md text-sm text-gray-400 text-left">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, modi.
                    </p>
                    {/* product price */}
                    <h3 className="text-lg font-mediumtext-left">Rs. 1499</h3>
                </div>
                <div className="flex flex-col rounded-xl">
                    {/* img */}
                    <div onClick={()=>navigate('/product/:id')} 
                    className='h-58 w-58'>
                        <img src={wheat} alt="" className='h-full w-full rounded-t-xl 
                        bg-no-repeat bg-cover bg-center hover:scale-105 duration-300 cursor-pointer' />
                    </div>
                    {/* product title */}
                    <h2 className="text-lg font-medium text-left">Rice</h2>
                    {/* product description */}
                    <p className="max-w-md text-sm text-gray-400 text-left">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, modi.
                    </p>
                    {/* product price */}
                    <h3 className="text-lg font-mediumtext-left">Rs. 1499</h3>
                </div>
                <div className="flex flex-col rounded-xl">
                    {/* img */}
                    <div onClick={()=>navigate('/product/:id')} 
                    className='h-58 w-58'>
                        <img src={wheat} alt="" className='h-full w-full rounded-t-xl 
                        bg-no-repeat bg-cover bg-center hover:scale-105 duration-300 cursor-pointer' />
                    </div>
                    {/* product title */}
                    <h2 className="text-lg font-medium text-left">Rice</h2>
                    {/* product description */}
                    <p className="max-w-md text-sm text-gray-400 text-left">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, modi.
                    </p>
                    {/* product price */}
                    <h3 className="text-lg font-mediumtext-left">Rs. 1499</h3>
                </div>
                <div className="flex flex-col rounded-xl">
                    {/* img */}
                    <div onClick={()=>navigate('/product/:id')} 
                    className='h-58 w-58'>
                        <img src={wheat} alt="" className='h-full w-full rounded-t-xl 
                        bg-no-repeat bg-cover bg-center hover:scale-105 duration-300 cursor-pointer' />
                    </div>
                    {/* product title */}
                    <h2 className="text-lg font-medium text-left">Rice</h2>
                    {/* product description */}
                    <p className="max-w-md text-sm text-gray-400 text-left">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, modi.
                    </p>
                    {/* product price */}
                    <h3 className="text-lg font-mediumtext-left">Rs. 1499</h3>
                </div>
                <div className="flex flex-col rounded-xl">
                    {/* img */}
                    <div onClick={()=>navigate('/product/:id')} 
                    className='h-58 w-58'>
                        <img src={wheat} alt="" className='h-full w-full rounded-t-xl 
                        bg-no-repeat bg-cover bg-center hover:scale-105 duration-300 cursor-pointer' />
                    </div>
                    {/* product title */}
                    <h2 className="text-lg font-medium text-left">Rice</h2>
                    {/* product description */}
                    <p className="max-w-md text-sm text-gray-400 text-left">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, modi.
                    </p>
                    {/* product price */}
                    <h3 className="text-lg font-mediumtext-left">Rs. 1499</h3>
                </div>
                <div className="flex flex-col rounded-xl">
                    {/* img */}
                    <div onClick={()=>navigate('/product/:id')} 
                    className='h-58 w-58'>
                        <img src={wheat} alt="" className='h-full w-full rounded-t-xl 
                        bg-no-repeat bg-cover bg-center hover:scale-105 duration-300 cursor-pointer' />
                    </div>
                    {/* product title */}
                    <h2 className="text-lg font-medium text-left">Rice</h2>
                    {/* product description */}
                    <p className="max-w-md text-sm text-gray-400 text-left">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, modi.
                    </p>
                    {/* product price */}
                    <h3 className="text-lg font-mediumtext-left">Rs. 1499</h3>
                </div>
                <div className="flex flex-col rounded-xl">
                    {/* img */}
                    <div onClick={()=>navigate('/product/:id')} 
                    className='h-58 w-58'>
                        <img src={wheat} alt="" className='h-full w-full rounded-t-xl 
                        bg-no-repeat bg-cover bg-center hover:scale-105 duration-300 cursor-pointer' />
                    </div>
                    {/* product title */}
                    <h2 className="text-lg font-medium text-left">Rice</h2>
                    {/* product description */}
                    <p className="max-w-md text-sm text-gray-400 text-left">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, modi.
                    </p>
                    {/* product price */}
                    <h3 className="text-lg font-mediumtext-left">Rs. 1499</h3>
                </div>
                <div className="flex flex-col rounded-xl">
                    {/* img */}
                    <div onClick={()=>navigate('/product/:id')} 
                    className='h-58 w-58'>
                        <img src={wheat} alt="" className='h-full w-full rounded-t-xl 
                        bg-no-repeat bg-cover bg-center hover:scale-105 duration-300 cursor-pointer' />
                    </div>
                    {/* product title */}
                    <h2 className="text-lg font-medium text-left">Rice</h2>
                    {/* product description */}
                    <p className="max-w-md text-sm text-gray-400 text-left">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, modi.
                    </p>
                    {/* product price */}
                    <h3 className="text-lg font-mediumtext-left">Rs. 1499</h3>
                </div>
                <div className="flex flex-col rounded-xl">
                    {/* img */}
                    <div onClick={()=>navigate('/product/:id')} 
                    className='h-58 w-58'>
                        <img src={wheat} alt="" className='h-full w-full rounded-t-xl 
                        bg-no-repeat bg-cover bg-center hover:scale-105 duration-300 cursor-pointer' />
                    </div>
                    {/* product title */}
                    <h2 className="text-lg font-medium text-left">Rice</h2>
                    {/* product description */}
                    <p className="max-w-md text-sm text-gray-400 text-left">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, modi.
                    </p>
                    {/* product price */}
                    <h3 className="text-lg font-mediumtext-left">Rs. 1499</h3>
                </div>
                <div className="flex flex-col rounded-xl">
                    {/* img */}
                    <div onClick={()=>navigate('/product/:id')} 
                    className='h-58 w-58'>
                        <img src={wheat} alt="" className='h-full w-full rounded-t-xl 
                        bg-no-repeat bg-cover bg-center hover:scale-105 duration-300 cursor-pointer' />
                    </div>
                    {/* product title */}
                    <h2 className="text-lg font-medium text-left">Rice</h2>
                    {/* product description */}
                    <p className="max-w-md text-sm text-gray-400 text-left">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, modi.
                    </p>
                    {/* product price */}
                    <h3 className="text-lg font-mediumtext-left">Rs. 1499</h3>
                </div>
                <div className="flex flex-col rounded-xl">
                    {/* img */}
                    <div onClick={()=>navigate('/product/:id')} 
                    className='h-58 w-58'>
                        <img src={wheat} alt="" className='h-full w-full rounded-t-xl 
                        bg-no-repeat bg-cover bg-center hover:scale-105 duration-300 cursor-pointer' />
                    </div>
                    {/* product title */}
                    <h2 className="text-lg font-medium text-left">Rice</h2>
                    {/* product description */}
                    <p className="max-w-md text-sm text-gray-400 text-left">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, modi.
                    </p>
                    {/* product price */}
                    <h3 className="text-lg font-mediumtext-left">Rs. 1499</h3>
                </div>
                <div className="flex flex-col rounded-xl">
                    {/* img */}
                    <div onClick={()=>navigate('/product/:id')} 
                    className='h-58 w-58'>
                        <img src={wheat} alt="" className='h-full w-full rounded-t-xl 
                        bg-no-repeat bg-cover bg-center hover:scale-105 duration-300 cursor-pointer' />
                    </div>
                    {/* product title */}
                    <h2 className="text-lg font-medium text-left">Rice</h2>
                    {/* product description */}
                    <p className="max-w-md text-sm text-gray-400 text-left">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, modi.
                    </p>
                    {/* product price */}
                    <h3 className="text-lg font-mediumtext-left">Rs. 1499</h3>
                </div>
            </div>
        </div>
    )
}

export default ProductList