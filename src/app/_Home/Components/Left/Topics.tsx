import React from 'react'
import LeftSection from '@/src/components/Reusable/LeftSections';

const Topics = () => {
    return (
        <div className='mt-6 lg:mt-10'>
      <LeftSection
        title="Topics"
        data={[
          "2018 League",
          "Balinese Culture",
          "Bali United",
          "Budget Travel",
          "Chopper Bike",
          "Istana Negara",
          "Market Stories",
          "National Exam",
          "Visit Bali",
        ]}
      >
        {(item: string) => (
          <div className="flex items-center bg-gray-100 w-fit px-4 text-[15px] py-2 my-2 text-light  cursor-pointer hover:bg-black hover:text-white transition-all duration-300">
            <h2>{item}</h2>
          </div>
        )}
      </LeftSection>
        </div>
    )
}

export default Topics;