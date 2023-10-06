import React, { ChangeEvent, useRef, useState } from 'react';

import { BUTTON_TYPES, Button } from '@components/Button/Button';
import { AddIcon, ChangeIcon, DeleteIcon } from '@components/Icons/Icons';
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
    onFileSelect: (file: File | null) => void;
    width?: string;
    testId?: string;
};
export function PictureInputField({
    width,
    onFileSelect,
}: PictureInputFieldProps) {
    const [previewSrc, setPreviewSrc] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                // Use reader.result to set the previewSrc
                setPreviewSrc(String(reader.result));
            };
            reader.readAsDataURL(file);
            onFileSelect(file);
        }
    };

    const removeImage = () => {
        setPreviewSrc(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
        onFileSelect(null);
    };

    return (
        <PictureInputFieldWrapper $width={width}>
            <ProfilePicture url={previewSrc!} size={ProfilePictureSize.BIG} />
            <StyledPictureInputLabel
                htmlFor="hidden-file-input"
                variant={BUTTON_TYPES.PRIMARY}
                icon
                label
                ref={fileInputRef}
            >
                {previewSrc ? (
                    <>
                        <ChangeIcon />
                        Change picture
                    </>
                ) : (
                    <>
                        <AddIcon />
                        Add picture
                    </>
                )}
            </StyledPictureInputLabel>
            {previewSrc && (
                <Button
                    variant={BUTTON_TYPES.PRIMARY}
                    icon={<DeleteIcon />}
                    onClick={removeImage}
                />
            )}
            <StyledPictureInput
                id="hidden-file-input"
                type="file"
                onChange={handleFileChange}
                accept="image/*"
            />
        </PictureInputFieldWrapper>
    );
}
