import styled from 'styled-components';

import { GreyColor } from '@styles/global';

export const StyledListItem = styled.button`
    display: flex;
    max-width: 13.6875rem;
    width: 100%;
    padding: 0.75rem 0.625rem;
    align-items: center;
    gap: 0.75rem;
    border: none;
    background-color: transparent;
    transition: background-color 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: ${GreyColor.G70};
    }

    &:active {
        background-color: ${GreyColor.G60};
    }
`;
