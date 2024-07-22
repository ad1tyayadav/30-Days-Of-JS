import React from 'react'
import Challenge from './Challenge'

function Home() {
    return (
        <>
            <div className='flex justify-center'>
                <h2 className='text-2xl font-bold'>Welcome to 30 days of JavaScript Challenge</h2>
            </div>
            <Challenge />
        </>
    )
}

export default Home