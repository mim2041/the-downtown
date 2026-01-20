import React from 'react'
import Categories from './Components/Left/Categories';
import Recommended from './Components/Left/Recommended';
import FollowUs from './Components/Left/FollowUs';

const HomePage = () => {
  return (
    <div className='max-w-[1600px] mx-auto bg-neutral-100'>
      <div
  className="
    grid gap-6
    grid-cols-1
    md:grid-cols-2
    lg:grid-cols-3
  "
>
  {/* Left */}
  <div className="
    bg-gray-100 p-6
    md:col-span-1
    lg:col-span-1
  ">
    <FollowUs />
    <Recommended />
    <Categories />
  </div>

  {/* Middle */}
  <div className="
    bg-green-100 p-6
    md:col-span-2 md:order-1
    lg:col-span-1 lg:order-none
  ">
    Middle
  </div>

  {/* Right */}
  <div className="
    bg-gray-200 p-6
    md:col-span-1 md:order-2
    lg:col-span-1
  ">
    Right
  </div>
</div>

    </div>
  )
};

export default HomePage;