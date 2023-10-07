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
    onFileSelect: (file: File | null, base64?: string | null) => void;
    preview?: string | null;
    setAvatar?: React.Dispatch<React.SetStateAction<string>>;
    width?: string;
    testId?: string;
};
export function PictureInputField({
    width,
    preview = null,
    setAvatar,
    onFileSelect,
}: PictureInputFieldProps) {
    const [previewSrc, setPreviewSrc] = useState<string | null>(preview);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (!file.type.startsWith('image/')) {
                alert('Please select a valid image file');
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                // Use reader.result to set the previewSrc
                const base64String = String(reader.result);
                setPreviewSrc(base64String);
                onFileSelect(file, base64String);
            };
            reader.readAsDataURL(file);
        } else {
            // Handle file deselection/removal
            setPreviewSrc(null);
            if (setAvatar) {
                setAvatar('');
            }
            onFileSelect(null, null);
        }
    };

    const removeImage = () => {
        setPreviewSrc(null);
        if (setAvatar) {
            setAvatar('');
        }
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
                $variant={BUTTON_TYPES.PRIMARY}
                $icon="true"
                $label="true"
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
