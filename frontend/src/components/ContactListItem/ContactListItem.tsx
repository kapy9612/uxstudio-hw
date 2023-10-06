import React, { useState } from 'react';

import { BUTTON_TYPES, Button } from '@components/Button/Button';
import {
    ContactInfo,
    ContactInfoType,
} from '@components/ContactInfo/ContactInfo';
import {
    StyledContactListItem,
    StyledContactListItemButtonWrapper,
} from '@components/ContactListItem/ContactListItem.styled';
import { CallIcon, MoreIcon, MuteIcon } from '@components/Icons/Icons';

type ContactListItemProps = {
    contact: ContactInfoType;
};
export function ContactListItem({ contact }: ContactListItemProps) {
    const [visible, setVisible] = useState(false);

    return (
        <StyledContactListItem
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            <ContactInfo
                avatar={contact.avatar}
                name={contact.name}
                phone={contact.phone}
            />
            {visible && (
                <StyledContactListItemButtonWrapper>
                    <Button
                        variant={BUTTON_TYPES.SECONDARY}
                        icon={<MuteIcon />}
                    />
                    <Button
                        variant={BUTTON_TYPES.SECONDARY}
                        icon={<CallIcon />}
                    />
                    <Button
                        variant={BUTTON_TYPES.SECONDARY}
                        icon={<MoreIcon />}
                    />
                </StyledContactListItemButtonWrapper>
            )}
        </StyledContactListItem>
    );
}
