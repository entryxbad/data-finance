import React from 'react'
import Laptop from '../assets/images/laptop.jpg'

const Analytics = () => {
    return (
        <>
            <div className='w-full bg-white py-16 px-4'>
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                    <img className='w-[500px] mx-auto my-4' src={Laptop} alt="laptop" />
                    <div className='flex flex-col justify-center'>
                        <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                        <h1 className='md:text-4xl sm:3-xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae molestias iure aut rem, quisquam nam, officia ab eaque culpa assumenda at? Ad nihil, cum saepe dolores ducimus sit accusantium maxime?</p>
                        <button className='text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black'>Get Started</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Analytics