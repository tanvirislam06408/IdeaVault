import React from 'react';

const AllIdeaPage = () => {
    return (
        <div className='container mx-auto mt-5'>
            <p className="text-blue-500 uppercase tracking-[0.2em] font-semibold text-sm mb-4">
                Explore
            </p>

            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-3">
                All ideas in the vault
            </h1>
            <p className='text-muted text-xl '>Search, filter, and find the spark you've been looking for.</p>
            {/* cards */}
            <p className='text-muted'>Showing <span>10</span> ideas</p>
            <div>

            </div>
        </div>
    );
};

export default AllIdeaPage;