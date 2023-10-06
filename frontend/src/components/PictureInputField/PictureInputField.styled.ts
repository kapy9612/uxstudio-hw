import styled, { css } from 'styled-components';

import {
    ButtonStyle,
    ButtonStyleProps,
} from '@components/Button/Button.styled';

import { SpacingToken } from '@styles/global';

export const PictureInputFieldWrapper = styled.div<{
    $width?: string;
    $disabled?: boolean;
}>`
    display: flex;
    width: ${(props) => (props.$width ? props.$width : '100%')};
    gap: ${SpacingToken.PX16};
    align-items: center;
    ${(props) =>
        props.$disabled &&
        css`
            pointer-events: none;
        `};

    @media (max-width: 576px) {
        width: 100%;
    }
`;

export const StyledPictureInput = styled.input`
    display: none;
`;

//TODO: fix type
export const StyledPictureInputLabel = styled.label<any>`
    ${ButtonStyle}
`;
