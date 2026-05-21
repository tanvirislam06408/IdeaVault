import { Separator } from '@heroui/react';
import React from 'react';

const Stats = () => {
        const stats = [
        {
            number: "12k+",
            title: "Ideas shared",
        },
        {
            number: "48k+",
            title: "Comments left",
        },
        {
            number: "94%",
            title: "Get feedback in 24h",
        },
        {
            number: "320+",
            title: "Cofounders matched",
        },
    ];
    return (
         <div className="container mx-auto mt-12 px-4 md:px-0">
            <h1 className='text-2xl text-center mt-10 mb-8 font-bold dark:text-gray-100'>Our Growing Community</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border dark:border-gray-800 rounded-3xl overflow-hidden bg-white dark:bg-slate-800 shadow-sm">
                
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center py-10 px-6  border-r dark:border-r-gray-800"
                    >
                        <h1 className="text-5xl font-bold gradient-text mb-3">
                            {stat.number}
                        </h1>

                        <p className="text-gray-500 dark:text-gray-400 text-lg text-center">
                            {stat.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stats;