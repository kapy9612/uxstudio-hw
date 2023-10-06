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

import { Contact } from '@utils/types';

import { TextColor } from '@styles/global';

type ContactListItemProps = {
    contact: Contact;
};
export function ContactInfo({ contact }: ContactListItemProps) {
    return (
        <StyledContactInfo>
            <ProfilePicture
                size={ProfilePictureSize.SMALL}
                url={contact.avatar}
            />
            <StyledContactInfoTextWrapper>
                <Typography level={TypographyLevel.H3}>
                    {contact.name}
                </Typography>
                <Typography
                    level={TypographyLevel.MESSAGE}
                    color={TextColor.SECONDARY}
                >
                    {contact.phone}
                </Typography>
            </StyledContactInfoTextWrapper>
        </StyledContactInfo>
    );
}
