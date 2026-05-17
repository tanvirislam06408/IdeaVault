'use client'
import { Button } from '@heroui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = ({children,href}) => {
    const path=usePathname();
    console.log(path);
    
    return <Link href={href}>
   <Button variant='ghost' className={`rounded-full px-5 py-2 text-sm font-medium ${path === href && 'text-blue-500'}`}>
      {children}
   </Button>
    </Link>
};

export default NavLinks;