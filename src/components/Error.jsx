import React from 'react'
import { HiOutlineEmojiSad } from 'react-icons/hi'

const Error = () => {
    return (
        <div className="w-full">
            <div className="flex justify-center my-28">
                <HiOutlineEmojiSad className='text-6xl text-gray-400 mr-2' />
                <h4 className='block text-6xl font-semibold text-gray-400 mb-3'>Error</h4>
            </div>
        </div>
    )
}

export default Error