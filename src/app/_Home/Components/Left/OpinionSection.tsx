import React from 'react'
import LeftSection from '@/src/components/Reusable/LeftSections';
import { IoMdArrowDropright } from 'react-icons/io';

const Opinion = () => {
    return (
        <div className='my-6 lg:my-10'>
      <LeftSection
        title="Opinion"
        data={[
          "Tour showcases shared art history of Indonesia and Singapore",
          "Finland Has An Education System That other country Should Learn From",
          "Women in Politics: Urgency of Quota System For Women in Regional Elections", 
          "China's Peng banned and fined for Wimbledon corruption attempt",
          "Democratic Party politician calls Prabowo ‘cardboard general’"
        ]}
      >
        {(item: string) => (
          <div className="flex items-start gap-3 border-b border-gray-300 last:border-b-0">
            <IoMdArrowDropright className="text-xl w-10" />
            <h2 className="font-semibold text-sm  mb-4 cursor-pointer hover:text-green-500 transition-all duration-300">{item}</h2>
          </div>
        )}
      </LeftSection>
        </div>
    )
}

export default Opinion;