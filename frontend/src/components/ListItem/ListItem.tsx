import React, { MouseEventHandler, ReactNode } from 'react';

import { StyledListItem } from '@components/ListItem/ListItem.styled';
import { Typography, TypographyLevel } from '@components/Typography/Typography';

type ProfilePictureProps = {
    icon?: ReactNode;
    label?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};
export function ListItem({ icon, label, onClick }: ProfilePictureProps) {
    return (
        <StyledListItem onClick={onClick}>
            {icon}
            <Typography level={TypographyLevel.BODY}>{label}</Typography>{' '}
        </StyledListItem>
    );
}
