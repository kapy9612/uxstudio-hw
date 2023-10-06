import { useEffect, useRef, useState } from 'react';

export const useDropdown = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.addEventListener(
            'mousedown',
            handleOutsideClick as EventListener,
        );
        return () => {
            document.removeEventListener(
                'mousedown',
                handleOutsideClick as EventListener,
            );
        };
    });

    const handleOutsideClick = (e: { target: Node | null }) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return { isOpen, setIsOpen, dropdownRef, toggleDropdown };
};
