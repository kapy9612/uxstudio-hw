import { useEffect, useState } from 'react';

export const useTouchFunction = () => {
    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
            setIsTouch(true);
        }
    }, []);

    return isTouch;
};
