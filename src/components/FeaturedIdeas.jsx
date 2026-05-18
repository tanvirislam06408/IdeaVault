import { getFeaturedIdeas } from '@/lib/data';
import React from 'react';

const FeaturedIdeas = async() => {
    const ideas = await getFeaturedIdeas();
    
    return (
        <div className='container mx-auto mt-20'>
             <p className="text-blue-500 uppercase tracking-[0.2em] font-semibold text-sm mb-4">
                  Trending
                </p>

                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                    Ideas the community is loving
                </h1>
        </div>
    );
};

export default FeaturedIdeas;