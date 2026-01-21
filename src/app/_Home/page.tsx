import React from 'react'
import Categories from './Components/Left/Categories';
import Recommended from './Components/Left/Recommended';
import FollowUs from './Components/Left/FollowUs';
import Blog from './Components/Middle/Blog';
import Adds from './Components/Right/Adds';

const HomePage = () => {
  return (
    <div className='max-w-[1600px] mx-auto '>
      <div
  className="
    grid gap-6 lg:gap-10
    grid-cols-1
    md:grid-cols-2
    lg:grid-cols-4
  "
>
  {/* Left */}
  <div className=" bg-gray-100 md:col-span-1 lg:col-span-1">
    <FollowUs />
    <Recommended />
    <Categories />
  </div>

  {/* Middle */}
  <div className="
    bg-green-100 
    md:col-span-2 md:order-1
    lg:col-span-2 lg:order-none
  ">
    <Blog />
  </div>

  {/* Right */}
  <div className="
    bg-gray-200
    md:col-span-1 md:order-2
    lg:col-span-1
  ">
    <Adds />
  </div>
</div>

    </div>
  )
};

export default HomePage;