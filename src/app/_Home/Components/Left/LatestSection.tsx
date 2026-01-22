import React from 'react';
import { latestData } from '@/src/data/LatestData';
import LeftSection from '@/src/components/Reusable/LeftSections';

const Latest = () => {
    return (
        <div className=''>
            <LeftSection title="Latest" data={latestData} children={(item) => (
                <div key={item.id} className="flex items-center gap-3">
                <div className="w-[220px] h-[80px] ">
                    <img src={item.image.src} alt={item.title} className="h-full w-full object-cover" />
                </div>
                <h2 className=" font-bold ">{item.title}</h2>
            </div>
            )} />
        </div>
    )
}

export default Latest;