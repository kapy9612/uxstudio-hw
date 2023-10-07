import React, { useState } from 'react';

import { BUTTON_TYPES, Button } from '@components/Button/Button';
import { ContactInfo } from '@components/ContactInfo/ContactInfo';
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

import { useDeleteContact } from '@hooks/useDeleteContact';

import { ContactType } from '@utils/types';

type ContactListItemProps = {
    contact: ContactType;
};
export function ContactListItem({ contact }: ContactListItemProps) {
    const [visible, setVisible] = useState(false);
    const contactDelete = useDeleteContact();
    const dropdownItems = [
        {
            icon: <SettingsIcon />,
            label: 'Edit',
            onClick: () => {
                setVisible(false);
                console.error('Unsupported function!');
            },
        },
        {
            icon: <FavouriteIcon />,
            label: 'Favourite',
            onClick: () => {
                setVisible(false);
                console.error('Unsupported function!');
            },
        },
        {
            icon: <DeleteIcon />,
            label: 'Remove',
            onClick: () => {
                setVisible(false);
                contactDelete.mutate({ id: contact.id });
            },
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
