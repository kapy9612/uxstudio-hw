import styled from 'styled-components';

import { GreyColor } from '@styles/global';

export const StyledForm = styled.form`
    display: flex;
    max-width: 22.75rem;
    width: 100%;
    padding: 1.5rem;
    flex-direction: column;
    gap: 1.5rem;
    border-radius: 0.5rem;
    background: ${GreyColor.G100};
`;

export const StyledButtonWrapper = styled.div`
    display: flex;
    padding: 1.5rem 0 0 0;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 0.5rem;
    align-self: stretch;
`;
