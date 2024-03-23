import React from 'react'
import hero from './illustration-working.svg'

const Home = () => {
    return (
        <>
    {/* // <!-- hero section --> */}
            <section id="hero" className='dark:bg-slate-800 dark:text-white'>
                <div className="container flex flex-col-reverse mx-auto p-6 lg:px-12 lg:flex-row">
                    {/* <!-- content container --> */}
                    <div className="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
                        <h1 className="text-5xl text-center font-bold lg:text-6xl lg:max-w-md lg:text-left">More than just shorter links
                        </h1>
                        <p className="text-2xl text-gray-400 text-center lg:max-w-md lg:text-left">Build your brand's recognition and get
                            detailed
                            insights on how your links are performing.</p>
                        <div className="mx-auto lg:mx-0">
                            <button className="py-5 px-10 text-2xl bg-teal-500 text-white rounded-full hover:opacity-50">Get
                                started</button>
                        </div>
                    </div>
                    {/* <!-- img container--> */}
                    <div className="mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2">
                        <img src={hero} alt="" />
                    </div>
                </div>
            </section>


            {/* <!-- Feature box --> */}
            <section id="feature" className="py-32 bg-slate-100 dark:bg-slate-800">
                <div className="container relative flex flex-col items-start mx-auto px-6 md:flex-row md:space-x-7">
                    {/* <!-- horizontal line --> */}
                    <div className="hidden absolute top-24 left-16 w-10/12 h-3 bg-cyan-300 md:block"></div>

                    {/* <!-- vertical line --> */}
                    <div className="absolute w-2 left-1/2 h-full -ml-1 bg-cyan-300 md:hidden"></div>

                    {/* <!-- Box 1 --> */}
                    <div className="relative flex flex-col space-y-6 p-6 bg-white 
                    dark:bg-slate-600 rounded-lg md:w-1/3">
                        {/* <!-- img positioning --> */}
                        <div className="absolute -ml-10 -top-10 left-1/2 md:left-16">
                            {/* <!-- img container for background and center --> */}
                            <div className="bg-black flex items-center justify-center h-20 w-20 rounded-full p-4">
                                {/* <img src="./images/icon-brand-recognition.svg" alt="" /> */}
                            </div>
                        </div>

                        <h5 className="font-bold pt-6 text-xl text-center md:text-left dark:text-white">Brand Recognition</h5>
                        <p className="text-center text-gray-400 md:text-left">Boost your brand recognition with each click Generic links
                            don•t mean a thing. Branded links help instil confidence in
                            your content.</p>
                    </div>
                    {/* <!-- Box 2 --> */}
                    <div className="relative flex flex-col space-y-6 p-6 mt-24 bg-white rounded-lg md:mt-8 
                    dark:bg-slate-600 md:w-1/3">
                        {/* <!-- img positioning --> */}
                        <div className="absolute -ml-10 -top-10 left-1/2 md:left-16">
                            {/* <!-- img container for background and center --> */}
                            <div className="bg-black flex items-center justify-center h-20 w-20 rounded-full p-4">
                                {/* <img src="./images/icon-detailed-records.svg" alt="" /> */}
                            </div>
                        </div>

                        <h5 className="font-bold pt-6 text-xl text-center md:text-left dark:text-white">Detailed Records</h5>
                        <p className="text-center text-gray-400 md:text-left">Gain insights into who is clicking
                            your links, Knowing when and
                            where people engage with your
                            content helps inform better
                            decisions.</p>
                    </div>
                    {/* <!-- Box 3 --> */}
                    <div className="relative flex flex-col space-y-6 p-6 mt-24 bg-white rounded-lg md:mt-16 
                    dark:bg-slate-600 md:w-1/3">
                        {/* <!-- img positioning --> */}
                        <div className="absolute -ml-10 -top-10 left-1/2 md:left-16">
                            {/* <!-- img container for background and center --> */}
                            <div className="bg-black flex items-center justify-center h-20 w-20 rounded-full p-4">
                                {/* <img src="./images/icon-fully-customizable.svg" alt="" /> */}
                            </div>
                        </div>

                        <h5 className="font-bold pt-6 text-xl text-center md:text-left dark:text-white">Fully Customizable</h5>
                        <p className="text-center text-gray-400 md:text-left">Improve brand awareness and
                            content discoverability through
                            customizable links.
                            supercharging audience
                            engagement.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home