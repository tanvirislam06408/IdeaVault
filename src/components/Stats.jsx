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
            <h1 className='text-2xl text-center my-3 font-bold'>Our Growing Community</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border  rounded-3xl overflow-hidden bg-white shadow-sm">
                
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center py-10 px-6  border-r "
                    >
                        <h1 className="text-5xl font-bold text-indigo-500 mb-3">
                            {stat.number}
                        </h1>

                        <p className="text-gray-500 text-lg text-center">
                            {stat.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stats;