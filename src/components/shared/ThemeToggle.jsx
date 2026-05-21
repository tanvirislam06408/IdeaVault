'use client'
import { Button } from '@heroui/react';
import { Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import React from 'react';


const ThemeToggle = () => {
 const { theme, setTheme } = useTheme();
    return (
        <Button onClick={()=>setTheme(theme === "dark" ? "light" : "dark")} variant='outline' className="text-gray-700 border-none">
            <Moon size={18} />
          </Button>
    );
};

export default ThemeToggle;