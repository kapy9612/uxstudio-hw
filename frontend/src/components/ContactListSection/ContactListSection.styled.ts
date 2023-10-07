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
    height: calc(100vh - 12rem - 2px);
`;
