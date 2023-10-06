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
import { Dropdown } from '@components/Dropdown/Dropdown';
import {
    CallIcon,
    DeleteIcon,
    FavouriteIcon,
    MuteIcon,
    SettingsIcon,
} from '@components/Icons/Icons';

type ContactListItemProps = {
    contact: ContactInfoType;
};
export function ContactListItem({ contact }: ContactListItemProps) {
    const [visible, setVisible] = useState(false);

    const dropdownItems = [
        {
            icon: <SettingsIcon />,
            label: 'Edit',
            onClick: () => console.error('Unsupported function!'),
        },
        {
            icon: <FavouriteIcon />,
            label: 'Favourite',
            onClick: () => console.error('Unsupported function!'),
        },
        {
            icon: <DeleteIcon />,
            label: 'Remove',
            onClick: () => console.error('Unsupported function!'),
        },
    ];

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
                    <Dropdown items={dropdownItems} />
                </StyledContactListItemButtonWrapper>
            )}
        </StyledContactListItem>
    );
}
