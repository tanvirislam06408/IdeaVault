'use client'
import { Button } from '@heroui/react';
import { Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import React from 'react';
import { FiSun } from "react-icons/fi";


const ThemeToggle = () => {
 const { theme, setTheme } = useTheme();
    return (
        <Button onClick={()=>setTheme(theme === "dark" ? "light" : "dark")} variant='outline' className="text-gray-700 border-none">
           {
                theme === "dark"
                    ? <Moon size={18} />
                    : <FiSun />
            }
          </Button>
    );
};

export default ThemeToggle;