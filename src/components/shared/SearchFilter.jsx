"use client";

import {
  FiSearch,
  FiSliders,
  FiChevronDown,
  FiCheck,
} from "react-icons/fi";

import React from 'react';

const SearchFilter = () => {
    return (
        <div className="flex w-full items-start gap-4">
      {/* Search Input */}
      <div className="flex flex-1 items-center rounded-2xl border border-slate-300 bg-white px-5 py-4">
        <FiSearch className="mr-3 text-2xl text-slate-500" />

        <input
          type="text"
          placeholder="Search by idea title..."
          className="w-full bg-transparent text-lg outline-none placeholder:text-slate-400"
        />
      </div>

      {/* Dropdown */}
      <div className="relative w-[300px]">
        {/* Trigger */}
        <button className="flex w-full items-center justify-between rounded-2xl border border-slate-300 bg-white px-5 py-4">
          <div className="flex items-center gap-3">
            <FiSliders className="text-xl text-slate-500" />

            <span className="text-lg font-medium text-slate-800">
              All
            </span>
          </div>

          <FiChevronDown className="text-xl text-slate-500" />
        </button>

        {/* Dropdown Menu */}
        <div className="absolute right-0 mt-2 w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <button className="flex w-full items-center gap-3 bg-gradient-to-r from-violet-500 to-purple-500 px-5 py-4 text-left text-lg text-white">
            <FiCheck className="text-xl" />
            <span>All</span>
          </button>

          {[
            "Tech",
            "Health",
            "AI",
            "Education",
            "Sustainability",
            "Real Estate",
            "Finance",
            "Other",
          ].map((item) => (
            <button
              key={item}
              className="w-full px-5 py-4 text-left text-lg text-slate-700 transition hover:bg-slate-100"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
    );
};

export default SearchFilter;