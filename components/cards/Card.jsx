import React from 'react'
import Cards from './Cards'
import { data } from '../../data'

const Card = (props) => {
    return (
        <>
            {/* <h1 className='m-8'>Recent Posts</h1> */}
            <div className="sm:grid gap-y-5 gap-x-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  p-14">
                {data.map((post, index) => (
                    <Cards post={post} key={index} />
                ))}
            </div>
        </>
    )
}

export default Card
