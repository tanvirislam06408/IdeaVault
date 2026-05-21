
import SearchFilter from '@/components/shared/SearchFilter';
import { getIdeas } from '@/lib/data';
import React from 'react';


export const metadata = {
  title: "All Ideas - share your ideas",
  description: "Idea vault",
};


const AllIdeaPage = async ({ searchParams }) => {
    const ideas = await getIdeas();
    const sParams =await searchParams;

    const searchIdeas = async (search, sort, category) => {
        'use server'
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/searchIdea?search=${search}&sort=${sort}&category=${category}`);
        const data = await res.json();

        return data;
    }


    return (
        <div className='container mx-auto mt-5 px-5'>
            <p className="text-rose-500 uppercase tracking-[0.2em] font-semibold text-sm mb-4">
                Explore
            </p>

            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-gray-100 leading-tight mb-3">
                All ideas in the vault
            </h1>
            <p className='text-muted dark:text-gray-400 text-xl '>Search, filter, and find the spark you've been looking for.</p>
            <SearchFilter searchIdeas={searchIdeas} ideas={ideas} />
        </div>
    );
};

export default AllIdeaPage;