import React from 'react'
import AddComments from '../comments/AddComments'
import Comments from '../comments/Comments'
// import { data } from '../../data'

const PostDetails = () => {
    // const { title, body } = data
    return (
        <div className='container mx-auto md:px-2 py-16 w-1/2'>
            <h1 className='text-3xl mb-8'>What is Posts</h1>
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam assumenda quasi fugit voluptatem illum, doloribus iure id magni, eos explicabo earum temporibus neque tempora repudiandae mollitia est quaerat nobis ratione.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa vitae quas neque, saepe cum modi aspernatur sint placeat! Cupiditate voluptas eum quasi facere qui culpa nemo ipsum? Unde, assumenda quasi.
            </p>
            <h1 className='text-2xl mt-6'>Comments</h1>
            {/* <p className='mt-6'>9/28/2022</p> */}
            <AddComments />
            <Comments />

        </div>
    )
}

export default PostDetails
321