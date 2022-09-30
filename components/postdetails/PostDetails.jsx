import React from 'react'
import AddComments from '../comments/AddComments'
import Comments from '../comments/Comments'
import Image from 'next/image'

const PostDetails = () => {
    return (
        <div className='container mx-auto md:px-2 py-16 w-1/2'>
            <h1 className='text-3xl mb-4 text-gray-700 font-bold'>What is Posts</h1>
            <div className='flex items-center gap-2 mb-4'>
                <Image src="/" width={35} height={35} alt="" className='bg-gray-400 rounded-full  w-full' />

                <h1 className='font-bold text-xl'>John Doe</h1>
            </div>
            <p className='text-xl text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam assumenda quasi fugit voluptatem illum, doloribus iure id magni, eos explicabo earum temporibus neque tempora repudiandae mollitia est quaerat nobis ratione.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa vitae quas neque, saepe cum modi aspernatur sint placeat! Cupiditate voluptas eum quasi facere qui culpa nemo ipsum? Unde, assumenda quasi.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio laborum sequi deleniti a, error quisquam ea accusamus quas tempore ut. Perspiciatis magnam dolores culpa a asperiores rem excepturi eaque dignissimos?
            </p>
            <h1 className='text-xl mt-6'>Comments</h1>
            {/* <p className='mt-6'>9/28/2022</p> */}
            <AddComments />
            <Comments />
            <Comments />
            <Comments />

        </div>
    )
}

export default PostDetails
321