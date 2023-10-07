import { useEffect, useState } from 'react';

export const useMatchMedia = () => {
    const [isMatches, setIsMatches] = useState(false);

    useEffect(() => {
        const query = window.matchMedia('(max-width: 768px)');
        if (query.matches) {
            setIsMatches(true);
        }
    }, []);

    return isMatches;
};
