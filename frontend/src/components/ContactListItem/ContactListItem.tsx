import React, { useState } from 'react';

import { BUTTON_TYPES, Button } from '@components/Button/Button';
import { ContactInfo } from '@components/ContactInfo/ContactInfo';
import {
    StyledContactListItem,
    StyledContactListItemButtonWrapper,
} from '@components/ContactListItem/ContactListItem.styled';
import { Dropdown } from '@components/Dropdown/Dropdown';
import { Form } from '@components/Form/Form';
import {
    CallIcon,
    DeleteIcon,
    FavouriteIcon,
    MuteIcon,
    SettingsIcon,
} from '@components/Icons/Icons';
import { Overlay } from '@components/Overlay/Overlay';

import { useDeleteContact } from '@hooks/useDeleteContact';
import { useMatchMedia } from '@hooks/useMatchMedia';
import { useModal } from '@hooks/useModal';

import { ContactType } from '@utils/types';

type ContactListItemProps = {
    contact: ContactType;
};
export function ContactListItem({ contact }: ContactListItemProps) {
    const [visible, setVisible] = useState(false);
    const { isOpen, openModal, closeModal } = useModal();
    const contactDelete = useDeleteContact();
    const isMobile = useMatchMedia();
    const dropdownItems = [
        {
            icon: <SettingsIcon />,
            label: 'Edit',
            onClick: () => {
                setVisible(false);
                openModal();
            },
        },
        {
            icon: <FavouriteIcon />,
            label: 'Favourite',
            onClick: () => {
                setVisible(false);
                alert('Unsupported function!');
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

    const mobileDropDownItems = [
        ...dropdownItems,
        {
            icon: <MuteIcon />,
            label: 'Mute',
            onClick: () => alert('Unsupported function!'),
        },
        {
            icon: <CallIcon />,
            label: 'Call',
            onClick: () => alert('Unsupported function!'),
        },
    ];

    return (
        <>
            <StyledContactListItem
                onMouseEnter={() => {
                    setVisible(true);
                }}
                onMouseLeave={() => {
                    setVisible(false);
                }}
            >
                <ContactInfo
                    avatar={contact.avatar}
                    name={contact.name}
                    phone={contact.phone}
                />
                {(visible || isMobile) && (
                    <StyledContactListItemButtonWrapper>
                        {!isMobile && (
                            <>
                                <Button
                                    variant={BUTTON_TYPES.SECONDARY}
                                    icon={<MuteIcon />}
                                    onClick={() =>
                                        alert('Unsupported function!')
                                    }
                                />
                                <Button
                                    variant={BUTTON_TYPES.SECONDARY}
                                    icon={<CallIcon />}
                                    onClick={() =>
                                        alert('Unsupported function!')
                                    }
                                />
                            </>
                        )}

                        <Dropdown
                            items={
                                isMobile ? mobileDropDownItems : dropdownItems
                            }
                        />
                    </StyledContactListItemButtonWrapper>
                )}
            </StyledContactListItem>
            {isOpen && (
                <Overlay>
                    <Form
                        title="Add contact"
                        closeModal={closeModal}
                        contact={contact}
                    />
                </Overlay>
            )}
        </>
    );
}
