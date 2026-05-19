import { getFeaturedIdeas } from '@/lib/data';
import React from 'react';
import FeaturedCard from './shared/FeaturedCard';

const FeaturedIdeas = async () => {
    const ideas = await getFeaturedIdeas();

    return (
        <div className='container mx-auto mt-20'>
            <p className="text-rose-500 uppercase tracking-[0.2em] font-semibold text-sm mb-4">
                Trending
            </p>

            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Ideas the community is loving
            </h1>


            {/* cards */}
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    ideas.map(idea => <FeaturedCard key={idea._id} idea={idea} />)
                }
            </div>
        </div>
    );
};

export default FeaturedIdeas;