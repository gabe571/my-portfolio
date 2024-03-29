import React from 'react'

import CSS from '../assests/css.png'
import HTML from '../assests/html.png'
import JAVASCRIPT from '../assests/javascript.png'
import REACT from '../assests/react.png'
import RUBYONRAILS from '../assests/rubyonrails.png'

const Skills = () => {
    return (
        <div name='technologies' className=' w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-red-600'> Tech Stack </p>
                    <p className='py-6'>// These are the technologies I have built in</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JAVASCRIPT} alt="JAVASCRIPT icon" />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={REACT} alt="REACT icon" />
                        <p className='my-4'>REACT</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills