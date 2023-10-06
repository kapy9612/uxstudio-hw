import React from 'react';

import { BUTTON_TYPES, Button } from '@components/Button/Button';
import { Dropdown } from '@components/Dropdown/Dropdown';
import {
    Flex,
    StyledHeaderContainer,
    StyledHeaderInnerWrapper,
    StyledHeaderSideWrapper,
    View,
} from '@components/Header/Header.styled';
import {
    AddIcon,
    BackArrowIcon,
    LightModeIcon,
    SettingsIcon,
} from '@components/Icons/Icons';
import { Typography, TypographyLevel } from '@components/Typography/Typography';

import { AlignType, SpacingToken } from '@styles/global';

import profile from '@assets/ProfilePic.svg';

export type HeaderType = {
    title: string;
};

export function Header({ title }: HeaderType) {
    const profileIcon = <img src={profile.src} alt="profile-pic" />;

    const dropdownItems = [
        {
            icon: <BackArrowIcon />,
            label: 'Back',
            onClick: () => console.error('Unsupported function!'),
        },
        {
            icon: <SettingsIcon />,
            label: 'Settings',
            onClick: () => console.error('Unsupported function!'),
        },
        {
            icon: <LightModeIcon />,
            label: 'Light',
            onClick: () => console.error('Unsupported function!'),
        },
        {
            icon: profileIcon,
            label: 'Profile',
            onClick: () => console.error('Unsupported function!'),
        },
    ];

    return (
        <StyledHeaderContainer>
            <StyledHeaderSideWrapper $align={AlignType.END}>
                <Button
                    variant={BUTTON_TYPES.SECONDARY}
                    icon={<BackArrowIcon />}
                />
            </StyledHeaderSideWrapper>
            <StyledHeaderInnerWrapper>
                <Typography level={TypographyLevel.H1}>{title}</Typography>
                <Flex>
                    <Flex $gap={SpacingToken.PX8} $view={View.DESKTOP}>
                        <Button
                            variant={BUTTON_TYPES.SECONDARY}
                            icon={<SettingsIcon />}
                        />
                        <Button
                            variant={BUTTON_TYPES.SECONDARY}
                            icon={profileIcon}
                        />
                    </Flex>
                    <Button
                        variant={BUTTON_TYPES.SPECIAL}
                        icon={<AddIcon />}
                        label="Add new"
                    />
                    <Flex $view={View.MOBILE}>
                        <Dropdown items={dropdownItems} />
                    </Flex>
                </Flex>
            </StyledHeaderInnerWrapper>
            <StyledHeaderSideWrapper $align={AlignType.START}>
                <Button
                    variant={BUTTON_TYPES.SECONDARY}
                    icon={<LightModeIcon />}
                />
            </StyledHeaderSideWrapper>
        </StyledHeaderContainer>
    );
}
