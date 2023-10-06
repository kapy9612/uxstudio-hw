import React from 'react';

import { BUTTON_TYPES } from '@components/Button/Button';
import { AddIcon } from '@components/Icons/Icons';
import {
    ProfilePicture,
    ProfilePictureSize,
} from '@components/ProfilePicture/ProfilePicture';

import {
    PictureInputFieldWrapper,
    StyledPictureInput,
    StyledPictureInputLabel,
} from './PictureInputField.styled';

type PictureInputFieldProps = {
    label?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    disabled?: boolean;
    width?: string;
    testId?: string;
};
export function PictureInputField({
    label,
    placeholder,
    onChange,
    value,
    width,
    disabled,
}: PictureInputFieldProps) {
    return (
        <PictureInputFieldWrapper $width={width} $disabled={disabled}>
            <ProfilePicture url={''} size={ProfilePictureSize.BIG} />
            <StyledPictureInputLabel
                htmlFor="hidden-file-input"
                variant={BUTTON_TYPES.PRIMARY}
                icon
                label
            >
                <AddIcon />
                Add picture
            </StyledPictureInputLabel>
            <StyledPictureInput
                id="hidden-file-input"
                type="file"
                onChange={onChange}
                accept="image/*"
            />
        </PictureInputFieldWrapper>
    );
}
