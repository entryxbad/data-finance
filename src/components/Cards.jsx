import React from 'react'
import Single from '../assets/images/single.png'
import Double from '../assets/images/double.png'
import Triple from '../assets/images/triple.png'

const Cards = () => {
    return (
        <>
            <div className='w-full py-[10rem] px-4 bg-white'>
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                    {/* single */}
                    <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
                        <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="single" />
                        <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                        <p className='text-center text-4xl font-bold'>$149</p>
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mx-8'>500 GB Storage</p>
                            <p className='py-2 border-b mx-8'>1 Granted User</p>
                            <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                        </div>
                        <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                    </div>
                    {/* double */}
                    <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                        <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="single" />
                        <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
                        <p className='text-center text-4xl font-bold'>$199</p>
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mx-8'>1 TB Storage</p>
                            <p className='py-2 border-b mx-8'>3 Users Allowed</p>
                            <p className='py-2 border-b mx-8'>Send up to 10 GB</p>
                        </div>
                        <button className='text-[#00df9a] bg-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                    </div>
                    {/* triple */}
                    <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
                        <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="single" />
                        <h2 className='text-2xl font-bold text-center py-8'>Triple User</h2>
                        <p className='text-center text-4xl font-bold'>$299</p>
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mx-8'>5 TB Storage</p>
                            <p className='py-2 border-b mx-8'>10 Users Allowed</p>
                            <p className='py-2 border-b mx-8'>Send up to 20 GB</p>
                        </div>
                        <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards