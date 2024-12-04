'use client';

import { useEffect, useRef } from 'react';
import classes from './mouseScrollBackground.module.scss';

export const MouseScrollBackground = () => {
    const mouseRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function onMouseMoveHandler(e: MouseEvent) {
            if (!mouseRef.current) return;
            mouseRef.current.style.top = e.clientY + 'px';
            mouseRef.current.style.left = e.clientX + 'px';
        }

        document.addEventListener('mousemove', onMouseMoveHandler);

        return () => {
            document.removeEventListener('mousemove', onMouseMoveHandler);
        };
    }, []);

    return <div ref={mouseRef} className={classes.mouse} />;
};
