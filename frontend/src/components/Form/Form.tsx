import React, { useState } from 'react';

import { BUTTON_TYPES, Button } from '@components/Button/Button';
import { StyledButtonWrapper, StyledForm } from '@components/Form/Form.styled';
import { TextField } from '@components/TextField/TextField';
import { Typography, TypographyLevel } from '@components/Typography/Typography';

import { ContactType } from '@utils/types';

export type Form = {
    title: string;
    contact?: ContactType;
};
export function Form({ title, contact }: Form) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    return (
        <StyledForm
            onSubmit={(e) => {
                e.preventDefault();
                console.log(name);
                console.log(phone);
                console.log(email);
            }}
        >
            <Typography level={TypographyLevel.H2}>{title}</Typography>
            {/*<ProfilePicture size={ProfilePictureSize.SMALL} url={avatar} />*/}
            <TextField
                placeholder="Jamie Wright"
                label="Name"
                value={name}
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
                <Button variant={BUTTON_TYPES.SECONDARY} label={'Cancel'} />
                <Button
                    variant={BUTTON_TYPES.PRIMARY}
                    label={'Done'}
                    type={'submit'}
                />
            </StyledButtonWrapper>
        </StyledForm>
    );
}
