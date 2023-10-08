import React from 'react';

import {
    LoadingDot,
    LoadingDotTransition,
    LoadingDotVariants,
    LoadingDotsContainer,
    LoadingDotsContainerVariants,
    LoadingScreenContainer,
} from '@components/LoadingScreen/LoadingScreen.styled';

export function LoadingScreen() {
    return (
        <LoadingScreenContainer>
            <LoadingDotsContainer
                variants={LoadingDotsContainerVariants}
                initial="initial"
                animate="animate"
            >
                <LoadingDot
                    variants={LoadingDotVariants}
                    transition={LoadingDotTransition}
                />
                <LoadingDot
                    variants={LoadingDotVariants}
                    transition={LoadingDotTransition}
                />
                <LoadingDot
                    variants={LoadingDotVariants}
                    transition={LoadingDotTransition}
                />
            </LoadingDotsContainer>
        </LoadingScreenContainer>
    );
}
