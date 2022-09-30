import React from 'react'

const createpost = () => {
    return (
        <div className="ml-20 mr-20 m-14 p-8  bg-white rounded-lg border w-fill shadow-md border-gray-300 h-fill">
            <h1 className='text-xl mb-3'>Create</h1>
            <div className='flex flex-col gap-1'>


                <label htmlFor="title">Title</label>

                <input className='border-2 border-gray-300 p-2' type="text" placeholder='create title...' name="" id="" />
            </div>
            <div className='flex flex-col gap-1 mt-6'>


                <label htmlFor="title">Description</label>

                <textarea className='border-2 border-gray-300 p-2' type="text" placeholder='create body...' name="" id="" />

            </div>
            <button className=' justify-end rounded-md border-2 border-orange-500 p-2 pr-6 pl-6 mt-10 hover:bg-orange-200'>Post</button>
        </div>
    )
}

export default createpost
