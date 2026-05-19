import FeaturedCard from '@/components/shared/FeaturedCard';
import { getIdeas } from '@/lib/data';
import React from 'react';

const AllIdeaPage = async() => {
    const ideas=await getIdeas();
    
    return (
        <div className='container mx-auto mt-5 px-5'>
            <p className="text-rose-500 uppercase tracking-[0.2em] font-semibold text-sm mb-4">
                Explore
            </p>

            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-3">
                All ideas in the vault
            </h1>
            <p className='text-muted text-xl '>Search, filter, and find the spark you've been looking for.</p>
            {/* cards */}
            <p className='text-muted text-sm mt-3'>Showing <span className='font-bold text-black'>{ideas.length}</span> ideas</p>
            <div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                 {
                    ideas.map(idea=> <FeaturedCard key={idea._id} idea={idea} />)
                 }
            </div>
        </div>
    );
};

export default AllIdeaPage;