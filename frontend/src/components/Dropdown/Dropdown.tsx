import React from 'react';

import { BUTTON_TYPES, Button } from '@components/Button/Button';
import {
    StyledDropdown,
    StyledListItemGroupWrapper,
} from '@components/Dropdown/Dropdown.styled';
import { MoreIcon } from '@components/Icons/Icons';
import { ListItem, ListItemProps } from '@components/ListItem/ListItem';

import { useDropdown } from '@hooks/useDropdown';

type DropdownProps = {
    items: ListItemProps[];
};
export function Dropdown({ items }: DropdownProps) {
    const { isOpen, setIsOpen, dropdownRef, toggleDropdown } = useDropdown();

    return (
        <StyledDropdown ref={dropdownRef}>
            <Button
                variant={BUTTON_TYPES.SECONDARY}
                icon={<MoreIcon />}
                onClick={toggleDropdown}
            />
            {isOpen && (
                <StyledListItemGroupWrapper>
                    {items &&
                        items.map((item, index) => (
                            <ListItem
                                key={index}
                                icon={item.icon}
                                label={item.label}
                                onClick={(e) => {
                                    item.onClick && item.onClick(e);
                                    setIsOpen(false);
                                }}
                            />
                        ))}
                </StyledListItemGroupWrapper>
            )}
        </StyledDropdown>
    );
}
