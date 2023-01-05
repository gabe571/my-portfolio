import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
            <form action='https://getform.io/f/34b60cfe-4ca3-4935-8cb2-c8cccd6d29ab' className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-red-600 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>// Submit form below or feel free to email at gabriel.castro1028@gmail.com</p>
                </div>
                <input className='p-2' type='text' placeholder='Name' name='name' />
                <input className='my-4 p-2' type='text' placeholder='Email' name='email' />
                <textarea className='p-2' name='message' rows='10' placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-red-600 hover:border-red-600 px-4 py-3 my-8 mx-auto flex tiems-center'>Let's Collaberate</button>
            </form>
        </div>
    )
}

export default Contact