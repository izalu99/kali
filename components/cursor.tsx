'use client'

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleCursorMove = (e: MouseEvent) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        const updatePosition = (e: MouseEvent) => {
            requestAnimationFrame(() => handleCursorMove(e));
        };

        window.addEventListener('mousemove', updatePosition);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
        };
    }, []);

    return(
        <motion.div
            className='fixed w-8 h-8 bg-darkRed bg-opacity-50 rounded-full pointer-events-none z-50 flex items-center justify-center'
            animate={{
                x: cursorPosition.x - 5,
                y: cursorPosition.y - 5
            }}
            transition={{
                type: 'spring',
                damping: 30,
                stiffness: 200
            }}
        />
    )
};

export default Cursor;