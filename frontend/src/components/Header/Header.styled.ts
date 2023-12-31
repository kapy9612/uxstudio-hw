import styled from 'styled-components';

import {
    StyledLayoutInnerWrapper,
    StyledLayoutWrapper,
} from '@components/Layout/Layout.styled';

import { GreyColor, SpacingToken } from '@styles/global';

export const StyledHeaderContainer = styled.header`
    ${StyledLayoutWrapper};
    border-top: 1px solid ${GreyColor.G60};
    border-bottom: 1px solid ${GreyColor.G60};
`;

export const StyledHeaderDummyContainer = styled.div`
    ${StyledLayoutWrapper};

    @media (max-width: 592px) {
        display: none;
    }

    @media (max-height: 592px) {
        display: none;
    }
`;

export const StyledHeaderInnerContainer = styled.div`
    ${StyledLayoutInnerWrapper};
    justify-content: space-between;
    align-content: space-between;
    height: 6rem;
    gap: ${SpacingToken.PX16};
`;
