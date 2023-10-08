import styled from 'styled-components';

import {
    StyledLayoutInnerWrapper,
    StyledLayoutWrapper,
} from '@components/Layout/Layout.styled';

export const StyledContactListSectionContainer = styled.section`
    ${StyledLayoutWrapper};
`;

export const StyledContactListSectionInnerContainer = styled.div`
    ${StyledLayoutInnerWrapper};
    flex-direction: column;
    min-height: calc(100vh - 12rem - 2px);

    @media (max-width: 592px) {
        min-height: calc(100vh - 6rem - 2px);
    }

    @media (max-height: 592px) {
        min-height: calc(100vh - 6rem - 2px);
    }

    height: 100%;
`;

export const StyledContactListGroupWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
