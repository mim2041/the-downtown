import React from 'react';
import { recommendedData } from '@/src/data/RecommendedData';

const Recommended = () => {
    return (
        <div className="w-full bg-white p-6 border border-gray-50 my-6 lg:my-10">
      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900">
        Recommended
      </h3>

      {/* Divider */}
      <div className="relative mt-2 mb-6 h-0.5 bg-gray-200">
        <span className="absolute left-0 top-0 h-0.5 w-12 bg-black"></span>
      </div>

      <div className="space-y-5">
        {recommendedData.map((item) => (
            <div key={item.id} className="flex items-center gap-3">
                <img src={item.image.src} alt={item.title} className="w-1/2 h-1/2 object-cover" />
                <h2 className=" font-bold ">{item.title}</h2>
            </div>
        ))}
      </div>
      
    </div>
    )
}

export default Recommended;