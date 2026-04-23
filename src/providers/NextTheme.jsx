"use client";
import React from 'react';
import { ThemeProvider } from "next-themes";

const NextTheme = ({children}) => {
    return (
        <div>
            <ThemeProvider attribute="class" defaultTheme="light">
                {children}
            </ThemeProvider>
        </div>
    );
};

export default NextTheme;