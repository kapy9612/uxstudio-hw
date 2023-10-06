import React, { MouseEventHandler, ReactElement } from 'react';

import { AlignType } from '@styles/global';

import { navigateToLink } from './Button.functions';
import { StyledButton } from './Button.styled';

type ButtonProps = {
    label?: string;
    link?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: 'submit' | 'reset' | 'button';
    variant: BUTTON_TYPES;
    disabled?: boolean;
    icon?: ReactElement;
    reverse?: boolean;
    align?: AlignType;
    testId?: string;
};

export enum BUTTON_TYPES {
    PRIMARY,
    SECONDARY,
    SPECIAL,
}

//TODO: Special variant linear gradient animate
export function Button({
    label,
    link,
    onClick,
    type,
    variant,
    testId,
    disabled,
    icon,
    align,
    reverse,
}: ButtonProps) {
    return (
        <StyledButton
            data-testid={testId}
            onClick={link && link !== '' ? navigateToLink(link!) : onClick}
            $variant={variant}
            disabled={disabled}
            type={type}
            $icon={!!icon}
            $label={!!label}
            reverse={reverse}
            align={align}
        >
            {icon && icon}
            {label && label}
        </StyledButton>
    );
}
