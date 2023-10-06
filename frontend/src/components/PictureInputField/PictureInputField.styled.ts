import styled from 'styled-components';

import { ButtonStyle } from '@components/Button/Button.styled';

import { SpacingToken } from '@styles/global';

export const PictureInputFieldWrapper = styled.div<{
    $width?: string;
}>`
    display: flex;
    width: ${(props) => (props.$width ? props.$width : '100%')};
    gap: ${SpacingToken.PX8};
    align-items: center;

    @media (max-width: 576px) {
        width: 100%;
    }
`;

export const StyledPictureInput = styled.input`
    display: none;
`;

//TODO: fix type
export const StyledPictureInputLabel = styled.label<any>`
    ${ButtonStyle};
    margin-left: ${SpacingToken.PX8};
`;
