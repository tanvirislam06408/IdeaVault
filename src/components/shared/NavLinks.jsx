'use client'
import { Button } from '@heroui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = ({ children, href }) => {
    const path = usePathname();
    return <Link href={href}>
        <Button variant='ghost' className={`rounded-full px-5 py-2 text-sm font-medium transition-colors dark:text-gray-300 dark:hover:text-orange-400 ${path === href && 'text-rose-500 dark:text-rose-400'}`}>
            {children}
        </Button>
    </Link>
};

export default NavLinks;