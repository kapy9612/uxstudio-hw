import React from 'react';

import { Typography, TypographyLevel } from '@components/Typography/Typography';

import { TextColor } from '@styles/global';

import { StyledInput, StyledInputLabelWrapper } from './TextField.styled';

type TextFieldProps = {
    label?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    disabled?: boolean;
    width?: string;
    testId?: string;
};
export function TextField({
    label,
    placeholder,
    onChange,
    value,
    width,
    disabled,
}: TextFieldProps) {
    return (
        <StyledInputLabelWrapper $width={width} $disabled={disabled}>
            <Typography
                level={TypographyLevel.MESSAGE}
                color={TextColor.SECONDARY}
            >
                {label}
            </Typography>
            <StyledInput
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                disabled={disabled}
            />
        </StyledInputLabelWrapper>
    );
}
