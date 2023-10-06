import styled from 'styled-components';

import { GreyColor } from '@styles/global';

export const StyledListItemGroupWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-5.5rem, 2.5rem);
    display: flex;
    width: 100%;
    min-width: 8rem;
    max-width: 13.6875rem;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 0.5rem;
    background-color: ${GreyColor.G80};
    overflow: hidden;
`;

export const StyledDropdown = styled.div`
    position: relative;
`;
