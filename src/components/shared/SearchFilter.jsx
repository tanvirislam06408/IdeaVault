'use client'
import { Button, Dropdown, Label, SearchField } from "@heroui/react";

import {
    FiSearch,
    FiSliders,
    FiChevronDown,
    FiCheck,
} from "react-icons/fi";

import React, { useEffect, useState } from 'react';
import FeaturedCard from './FeaturedCard';

const SearchFilter = ({ searchIdeas, ideas }) => {

    const [catValue, setCatValue] = useState("");
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");
    const [filteredIdeas, setFilteredIdeas] = useState(ideas || []);


    const categories = [

        "Software",
        "Accessibility",
        "HealthTech",
        "Travel"

    ];

    useEffect(() => {
        const handleSearch = async () => {
            if (!search && !sort && !catValue) {
                setFilteredIdeas(ideas || []);
            } else {
                try {
                    const data = await searchIdeas(search, sort, catValue);
                    setFilteredIdeas(data || []);
                } catch (error) {
                    console.error( error);
                }
            }
        };

        handleSearch();
    }, [search, sort, catValue, ideas, searchIdeas]);





    return (
        <div>
            <div className="flex justify-between w-full flex-col md:flex-row items-center gap-4">

                <div className="flex flex-1 items-center max-w rounded-2xl bg-white dark:bg-slate-800 dark:border dark:border-gray-700 px-5 py-4">

                    <SearchField name="search" value={search} onChange={setSearch}>
                        <Label className="gradient-text my-3">Search Start-Up ideas</Label>
                        <SearchField.Group>
                            <SearchField.SearchIcon />
                            <SearchField.Input className={"focus:ring-0 focus:ring-red-500 focus:outline-none dark:text-gray-100"} placeholder="Search..." />
                            <SearchField.ClearButton />
                        </SearchField.Group>
                    </SearchField>
                </div>

                {/* Dropdown */}
                <div className="">

                    {/* Dropdown Menu */}
                    <Dropdown>
                        <Button aria-label="Menu" variant="outline" className={'gradient-button'}>
                            {catValue ? `Category: ${catValue}` : "Categories"}
                            <FiChevronDown className="text-xl text-slate-500" />
                        </Button>
                        <Dropdown.Popover>

                            
                            <Dropdown.Menu onAction={(key) => setCatValue(key)}>
                                <Dropdown.Item id="" textValue="All Categories">
                                    <Label>All Categories</Label>
                                </Dropdown.Item>
                                {
                                    categories.map((category) => (
                                        <Dropdown.Item key={category} id={category} textValue={category}>
                                            <Label>{category}</Label>
                                        </Dropdown.Item>
                                    ))
                                }
                            </Dropdown.Menu>
                        </Dropdown.Popover>
                    </Dropdown>
                </div>
                <div>
                    <Dropdown>
                        <Button aria-label="Menu" variant="outline" className={'gradient-button'}>
                            {sort === 'newToOld' ? "Newest to Oldest" : sort === 'oldToNew' ? "Oldest to Newest" : "Sort By"}
                            <FiChevronDown className="text-xl text-slate-500" />
                        </Button>
                        <Dropdown.Popover>
                            <Dropdown.Menu onAction={(key) => setSort(key)}>
                                <Dropdown.Item id="" textValue="Default Sort">
                                    <Label>Sort By Date</Label>
                                </Dropdown.Item>
                                <Dropdown.Item id={"newToOld"} textValue={"Newest To oldest"}>
                                    <Label>Newest To oldest</Label>
                                </Dropdown.Item>
                                <Dropdown.Item id={"oldToNew"} textValue={"Oldest To Newest"}>
                                    <Label>Oldest To Newest</Label>
                                </Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown.Popover>
                    </Dropdown>
                </div>
            </div>

            {/* cards */}
            <p className='text-muted text-sm mt-3'>
                Showing <span className='font-bold text-black dark:text-white'>{filteredIdeas.length}</span> ideas
            </p>
            <div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    filteredIdeas.map(idea => <FeaturedCard key={idea._id} idea={idea} />)
                }
            </div>
        </div>
    );
};

export default SearchFilter;