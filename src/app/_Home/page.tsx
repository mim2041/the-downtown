import React from 'react'
import Opinion from './Components/Left/OpinionSection';
import Latest from './Components/Left/LatestSection';
import FollowUs from './Components/Left/FollowUs';
import Blog from './Components/Middle/Blog';
import Topics from './Components/Left/Topics';
import RightColumn from './Components/Right/RightColumn';
import { rightSectionArticles } from '@/src/data/RightSectionData';

const HomePage = () => {
  return (
    <div className='max-w-[1600px] mx-auto '>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
        {/* Left */}
        <div className="order-2 md:col-span-1 lg:col-span-1 lg:order-0 px-6 md:px-0 md:pl-6 lg:px-0 lg:pl-0">
          <Latest />
          <Opinion />
          {/* <FollowUs /> */}
          {/* <Topics /> */}
        </div>

        {/* Middle */}
        <div className="md:col-span-2 order-1 lg:col-span-2 lg:order-0 px-6 lg:px-0">
          <Blog />
        </div>

        {/* Right */}
        <div className="order-3 md:col-span-1 lg:col-span-1 lg:order-0">
          <RightColumn articles={rightSectionArticles} />
        </div>
      </div>

    </div>
  )
};

export default HomePage;