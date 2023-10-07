import React, { useCallback, useState } from 'react';

import { BUTTON_TYPES, Button } from '@components/Button/Button';
import {
    createPostDataObject,
    createPutDataObject,
} from '@components/Form/Form.functions';
import { StyledButtonWrapper, StyledForm } from '@components/Form/Form.styled';
import { PictureInputField } from '@components/PictureInputField/PictureInputField';
import { TextField } from '@components/TextField/TextField';
import { Typography, TypographyLevel } from '@components/Typography/Typography';

import { useCreateContact } from '@hooks/useCreateContact';
import { useUpdateContact } from '@hooks/useUpdateContact';

import { postRequest } from '@utils/request';
import { ContactType } from '@utils/types';

export type Form = {
    title: string;
    contact?: ContactType;
    closeModal?: () => void;
};
export function Form({ title, contact, closeModal }: Form) {
    const [name, setName] = useState<string>(contact?.name ? contact.name : '');
    const [phone, setPhone] = useState<string>(
        contact?.phone ? contact.phone : '',
    );
    const [email, setEmail] = useState<string>(
        contact?.email ? contact.email : '',
    );
    const [avatar, setAvatar] = useState<string>(
        contact?.avatar ? contact.avatar : '',
    );

    const contactCreate = useCreateContact();
    const contactUpdate = useUpdateContact();

    const handleFileSelect = useCallback(
        async (file: File | null, base64?: string | null) => {
            if (file) {
                try {
                    const response: { fileUrl: string } = await postRequest(
                        '/upload',
                        {
                            fileName: file?.name,
                            fileContent: base64,
                        },
                    );

                    setAvatar(response.fileUrl);
                } catch (e) {
                    alert('Error when uploading the picture.');
                }
            } else {
                console.log('File removed');
            }
        },
        [],
    );

    return (
        <StyledForm
            onSubmit={(e) => {
                e.preventDefault();

                if (contact !== undefined) {
                    const sendObj = createPutDataObject({
                        name,
                        phone,
                        email,
                        contact,
                        avatar,
                    });
                    contactUpdate.mutate({ updated: sendObj, id: contact.id });
                } else {
                    const sendObj = createPostDataObject({
                        name,
                        phone,
                        email,
                        avatar,
                    });
                    contactCreate.mutate(sendObj as Omit<ContactType, 'id'>);
                }

                if (closeModal) {
                    closeModal();
                }
            }}
        >
            <Typography level={TypographyLevel.H2}>{title}</Typography>
            <PictureInputField
                preview={contact?.avatar}
                setAvatar={setAvatar}
                onFileSelect={handleFileSelect}
            />
            <TextField
                placeholder="Jamie Wright"
                label="Name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
            />
            <TextField
                placeholder="+01 234 5678"
                label="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <TextField
                placeholder="jamie.wright@mail.com"
                label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <StyledButtonWrapper>
                <Button
                    variant={BUTTON_TYPES.SECONDARY}
                    label={'Cancel'}
                    onClick={closeModal}
                />
                <Button
                    variant={BUTTON_TYPES.PRIMARY}
                    label={'Done'}
                    type={'submit'}
                />
            </StyledButtonWrapper>
        </StyledForm>
    );
}
