import React from 'react'
import Opinion from './Components/Left/OpinionSection';
import Latest from './Components/Left/LatestSection';
import FollowUs from './Components/Left/FollowUs';
import Blog from './Components/Middle/Blog';
import Adds from './Components/Right/Adds';
import Topics from './Components/Left/Topics';

const HomePage = () => {
  return (
    <div className='max-w-[1600px] mx-auto '>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
        {/* Left */}
        <div className="order-2 lg:order-none md:col-span-1 lg:col-span-1">
          <Latest />
          <Opinion />
          <FollowUs />
          <Topics />
        </div>

        {/* Middle */}
        <div className="md:col-span-2 order-1
          lg:col-span-2 lg:order-none">
          <Blog />
        </div>

        {/* Right */}
        <div className=" order-3 md:order-2 lg:order-none">
          <Adds />
        </div>
      </div>

    </div>
  )
};

export default HomePage;