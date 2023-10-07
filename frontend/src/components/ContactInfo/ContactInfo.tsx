import React from 'react';

import {
    StyledContactInfo,
    StyledContactInfoTextWrapper,
} from '@components/ContactInfo/ContactInfo.styled';
import {
    ProfilePicture,
    ProfilePictureSize,
} from '@components/ProfilePicture/ProfilePicture';
import { Typography, TypographyLevel } from '@components/Typography/Typography';

import { ContactType } from '@utils/types';

import { TextColor } from '@styles/global';

export type ContactInfoType = Omit<ContactType, 'email' | 'id'>;
export function ContactInfo({ avatar, name, phone }: ContactInfoType) {
    return (
        <StyledContactInfo>
            <ProfilePicture size={ProfilePictureSize.SMALL} url={avatar} />
            <StyledContactInfoTextWrapper>
                <Typography level={TypographyLevel.H3}>{name}</Typography>
                <Typography
                    level={TypographyLevel.MESSAGE}
                    color={TextColor.SECONDARY}
                >
                    {phone}
                </Typography>
            </StyledContactInfoTextWrapper>
        </StyledContactInfo>
    );
}
