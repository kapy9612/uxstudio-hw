import { motion } from 'framer-motion';
import styled from 'styled-components';

import { GreyColor } from '@styles/global';

export const LoadingScreenContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: ${GreyColor.G60};
`;

export const LoadingDotsContainerVariants = {
    initial: {
        transition: {
            staggerChildren: 0.2,
        },
    },
    animate: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

export const LoadingDotVariants = {
    initial: {
        y: '0%',
    },
    animate: {
        y: ['100%', '0%', '100%'],
    },
};

export const LoadingDotTransition = {
    duration: 1,
    repeat: Infinity,
    ease: 'easeInOut',
};
export const LoadingDotsContainer = styled(motion.div)`
    width: 10rem;
    height: 2rem;
    display: flex;
    justify-content: space-around;
`;

export const LoadingDot = styled(motion.span)`
    display: block;
    width: 2rem;
    height: 2rem;
    background-color: ${GreyColor.G10};
    border-radius: 50%;
`;
