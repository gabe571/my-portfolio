import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>

            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-red-600'> Hi, my name is</p>
                <h1 className='text-4xl sm:text-5xl font-bold text-white'>Gabriel Castro</h1>
                <h2 className='text-4xl sm:text-5xl font-bold text-gray-500'> I am a full-stack web developer.</h2>
                <p className='text-gray-500 py-4 max-w-[700px]'> I am a full-stack developer, with a focus on building responsive quality web applications.</p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-600 hover:border-red-600'>
                        <Link to="projects" smooth={true} duration={500}>
                            Projects
                        </Link>
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </button>
                </div>
            </div>
        </div >
    )
}

export default Home