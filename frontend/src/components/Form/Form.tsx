import React, { useCallback, useState } from 'react';

import { BUTTON_TYPES, Button } from '@components/Button/Button';
import { StyledButtonWrapper, StyledForm } from '@components/Form/Form.styled';
import { PictureInputField } from '@components/PictureInputField/PictureInputField';
import { TextField } from '@components/TextField/TextField';
import { Typography, TypographyLevel } from '@components/Typography/Typography';

import { useCreateContact } from '@hooks/useCreateContact';

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
    const [file, setFile] = useState<File | null>(null);

    const contactCreate = useCreateContact();

    const handleFileSelect = useCallback((file: File | null) => {
        setFile(file);
        if (file) {
            console.log('Selected file:', file.name);
        } else {
            console.log('File removed');
        }
    }, []);

    return (
        <StyledForm
            onSubmit={(e) => {
                e.preventDefault();
                console.log(name);
                console.log(phone);
                console.log(email);
                // console.log(file);
                contactCreate.mutate({ name, phone, email });
                if (closeModal) {
                    closeModal();
                }
            }}
        >
            <Typography level={TypographyLevel.H2}>{title}</Typography>
            <PictureInputField onFileSelect={handleFileSelect} />
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
