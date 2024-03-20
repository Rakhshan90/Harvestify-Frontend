import React from 'react'
import hero from './illustration-working.svg'

const Home = () => {
  return (
    // <!-- hero section -->
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
  )
}

export default Home