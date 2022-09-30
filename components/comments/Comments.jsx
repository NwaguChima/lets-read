import Image from 'next/image'
import React from 'react'

const Comments = () => {
    return (
        <div className='sm:mt-8 p-5  bg-white rounded-lg border border-gray-200 shadow-md sm:w-full '>
            <div className='flex justify-between items-center '>
                <div className='flex items-center gap-2 '>
                    <Image src="/" width={35} height={35} alt="" className='bg-gray-400 rounded-full  w-full'/>

                <h1 className=''>Janell Smith</h1>
                </div>

                <p>2:50pm</p>
            </div>
            <p className='pl-10 mt-4'>Awesome and nice post!</p>
        </div>
    )
}

export default Comments
