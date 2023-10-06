import styled, { css } from 'styled-components';

import {
    FontFamily,
    FontSize,
    FontWeight,
    GreyColor,
    SpacingToken,
    TextColor,
} from '@styles/global';

export const StyledInputLabelWrapper = styled.div<{
    $width?: string;
    $disabled?: boolean;
}>`
    display: flex;
    width: ${(props) => (props.$width ? props.$width : '100%')};
    flex-direction: column;
    gap: ${SpacingToken.PX4};

    ${(props) =>
        props.$disabled &&
        css`
            pointer-events: none;
        `};

    @media (max-width: 576px) {
        width: 100%;
    }
`;

export const StyledInput = styled.input`
    border-radius: 0.5rem;
    border: 1px solid ${GreyColor.G60};
    background-color: ${GreyColor.G80};
    padding: 0.5rem 0.75rem;
    transition:
        border 0.3s ease-in-out,
        background-color 0.3s ease-in-out;
    box-sizing: border-box;
    //Text
    font-family: ${FontFamily.LEXEND_DECA};
    font-size: ${FontSize.PX14};
    font-style: normal;
    font-weight: ${FontWeight.REGULAR};
    line-height: normal;
    color: ${TextColor.PRIMARY};

    &::placeholder {
        color: ${TextColor.DISABLED};
    }

    &:hover {
        border: 1px solid ${GreyColor.G30};
    }

    &:focus {
        outline: none;
        border: 1px solid ${GreyColor.G10};
        background-color: ${GreyColor.G60};
    }

    &:disabled {
        background-color: ${TextColor.DISABLED};
        border: 1px solid ${GreyColor.G10};
    }

    @media (max-width: 576px) {
        width: 100%;
    }
`;
