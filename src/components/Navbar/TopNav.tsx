import React from 'react'

const TopNav = () => {
  return (
    <div className='py-8 flex justify-center items-center'>
        <h1 className='text-center font-bold uppercase text-4xl hidden lg:block'>The Downtown</h1>
        <div className='lg:hidden'>
            <div className='flex items-center gap-2'>
                <div className='w-20 h-1 bg-black'></div>
            <h1 className='text-center font-bold uppercase text-2xl'>The</h1>
            <div className='w-20 h-1 bg-black'></div>
            </div>
            <h1 className='text-center font-bold uppercase text-4xl -mt-3'>Downtown</h1>
        </div>
    </div>
  )
};

export default TopNav;