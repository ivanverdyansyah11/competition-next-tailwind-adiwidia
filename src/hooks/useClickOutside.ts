"use client";

import { useEffect, useRef } from "react";

export function useClickOutside<T extends HTMLElement>(
    onClickOutside: () => void,
    isActive: boolean
) {
    const ref = useRef<T | null>(null);

    useEffect(() => {
        if (!isActive) return;

        function handleClick(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onClickOutside();
            }
        }

        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [onClickOutside, isActive]);

    return ref;
}