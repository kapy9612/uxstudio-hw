import React from 'react';

import { ContactListItem } from '@components/ContactListItem/ContactListItem';
import {
    StyledContactListSectionContainer,
    StyledContactListSectionInnerContainer,
} from '@components/ContactListSection/ContactListSection.styled';
import { StyledLayoutSideWrapper } from '@components/Layout/Layout.styled';

import { ContactType } from '@utils/types';

export type ContactListSectionType = {
    data: ContactType[];
};

export function ContactListSection({ data }: ContactListSectionType) {
    return (
        <StyledContactListSectionContainer>
            <StyledLayoutSideWrapper />
            <StyledContactListSectionInnerContainer>
                {data &&
                    data.map((item) => (
                        <ContactListItem contact={item} key={item.email} />
                    ))}
            </StyledContactListSectionInnerContainer>
            <StyledLayoutSideWrapper />
        </StyledContactListSectionContainer>
    );
}
