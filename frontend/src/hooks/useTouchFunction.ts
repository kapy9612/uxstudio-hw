import { useEffect, useState } from 'react';

export const useTouchFunction = () => {
    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        if ('ontouchstart' in window) {
            setIsTouch(true);
        }
    }, []);

    return isTouch;
};
