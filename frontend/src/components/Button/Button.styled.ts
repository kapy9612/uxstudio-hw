import styled, { css } from 'styled-components';

import {
    AlignType,
    FontSize,
    FontWeight,
    GreyColor,
    TextColor,
} from '@styles/global';

import { BUTTON_TYPES } from './Button';

const handleButtonBgColor = (variant: BUTTON_TYPES) => {
    switch (variant) {
        case BUTTON_TYPES.PRIMARY:
            return GreyColor.G60;
        case BUTTON_TYPES.SECONDARY:
            return 'transparent';
        case BUTTON_TYPES.SPECIAL:
            return 'linear-gradient(180deg, rgba(40, 40, 40, 0.70) 0%, #282828 100%), #141414';
        default:
            console.error(
                'No matching button bg color for the selected variant.',
            );
            return '';
    }
};

const handleButtonBgHoverColor = (variant: BUTTON_TYPES) => {
    switch (variant) {
        case BUTTON_TYPES.PRIMARY:
            return GreyColor.G50;
        case BUTTON_TYPES.SECONDARY:
            return GreyColor.G90;
        case BUTTON_TYPES.SPECIAL:
            return 'linear-gradient(0deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.04) 100%), linear-gradient(180deg, rgba(40, 40, 40, 0.70) 0%, #282828 100%), #141414';
        default:
            console.error(
                'No matching button hover bg color for the selected variant.',
            );
            return '';
    }
};

const handleButtonBgPressedColor = (variant: BUTTON_TYPES) => {
    switch (variant) {
        case BUTTON_TYPES.PRIMARY:
            return GreyColor.G40;
        case BUTTON_TYPES.SECONDARY:
            return GreyColor.G80;
        case BUTTON_TYPES.SPECIAL:
            return 'linear-gradient(0deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.04) 100%), linear-gradient(180deg, rgba(40, 40, 40, 0.70) 0%, #282828 100%), #141414;';
        default:
            console.error(
                'No matching button pressed bg color for the selected variant.',
            );
            return '';
    }
};

export type ButtonStyleProps = {
    variant: BUTTON_TYPES;
    disabled?: boolean;
    icon?: boolean;
    label?: boolean;
    reverse?: boolean;
    align?: AlignType;
};

export const ButtonStyle = css<ButtonStyleProps>`
    //Font
    font-family:
        Lexend Deca,
        serif;
    font-size: ${FontSize.PX14};
    font-style: normal;
    font-weight: ${FontWeight.REGULAR};
    line-height: normal;
    //Layout
    display: inline-flex;
    height: 2.5rem;
    flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
    justify-content: center;
    align-items: center;
    padding: ${(props) =>
        !props.icon
            ? '0.5rem 1rem'
            : props.label
            ? '0.5rem 1rem 0.5rem 0.75rem'
            : '0.5rem'};
    gap: 0.5rem;
    flex-shrink: 0;
    //Other Styles
    border: ${(props) =>
        props.variant !== BUTTON_TYPES.SPECIAL
            ? `none`
            : `1px solid ${GreyColor.G20}`};
    border-radius: ${(props) =>
        props.variant === BUTTON_TYPES.SPECIAL ? '62.5rem' : '0.5rem'};
    width: fit-content;
    box-sizing: border-box;
    margin: 0;
    cursor: pointer;
    transition:
        background 0.3s ease-in-out,
        color 0.3s ease-in-out,
        border 0.3s ease-in-out,
        opacity 0.3s ease-in-out,
        transform 0.3s ease-in-out;
    color: ${TextColor.PRIMARY};
    background: ${(props) => handleButtonBgColor(props.variant)};
    text-decoration: none;

    &:hover {
        background: ${(props) => handleButtonBgHoverColor(props.variant)};
    }

    &:active {
        background: ${(props) => handleButtonBgPressedColor(props.variant)};
    }

    &:disabled {
        background: ${TextColor.DISABLED};
        color: ${TextColor.DISABLED};
        pointer-events: none;
    }
    ${(props) =>
        props.disabled === true &&
        css`
            background-color: ${TextColor.DISABLED};
            color: ${TextColor.DISABLED};
            pointer-events: none;
        `}
`;

export const StyledButton = styled.button<ButtonStyleProps>`
    ${ButtonStyle};
    align-self: ${(props) => (props.align ? props.align : 'unset')};
`;
