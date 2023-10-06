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

import { TextColor } from '@styles/global';

export type ContactInfo = {
    avatar: string;
    name: string;
    phone: string;
};
export function ContactInfo({ avatar, name, phone }: ContactInfo) {
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
