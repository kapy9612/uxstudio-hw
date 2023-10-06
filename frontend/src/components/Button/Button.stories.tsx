import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { AddIcon } from '@components/Icons/Icons';

import { BUTTON_TYPES, Button } from './Button';

export default {
    title: 'Components / Button',
    component: Button,
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        label: 'Primary Button',
        variant: BUTTON_TYPES.PRIMARY,
        onClick: () => {
            console.log('Hi there!');
        },
        reverse: false,
        disabled: false,
    },
};

export const PrimaryWithIcon: Story = {
    args: {
        label: 'Primary Button',
        variant: BUTTON_TYPES.PRIMARY,
        onClick: () => {
            console.log('Hi there!');
        },
        reverse: false,
        disabled: false,
        icon: <AddIcon />,
    },
};

export const PrimaryOnlyIcon: Story = {
    args: {
        variant: BUTTON_TYPES.PRIMARY,
        onClick: () => {
            console.log('Hi there!');
        },
        reverse: false,
        disabled: false,
        icon: <AddIcon />,
    },
};

export const Secondary: Story = {
    args: {
        label: 'Primary Button',
        variant: BUTTON_TYPES.SECONDARY,
        onClick: () => {
            console.log('Hi there!');
        },
        reverse: false,
        disabled: false,
    },
};

export const SecondaryWithIcon: Story = {
    args: {
        label: 'Primary Button',
        variant: BUTTON_TYPES.SECONDARY,
        onClick: () => {
            console.log('Hi there!');
        },
        reverse: false,
        disabled: false,
        icon: <AddIcon />,
    },
};

export const SecondaryOnlyIcon: Story = {
    args: {
        variant: BUTTON_TYPES.SECONDARY,
        onClick: () => {
            console.log('Hi there!');
        },
        reverse: false,
        disabled: false,
        icon: <AddIcon />,
    },
};

export const Special: Story = {
    args: {
        label: 'Primary Button',
        variant: BUTTON_TYPES.SPECIAL,
        onClick: () => {
            console.log('Hi there!');
        },
        reverse: false,
        disabled: false,
    },
};

export const SpecialWithIcon: Story = {
    args: {
        label: 'Primary Button',
        variant: BUTTON_TYPES.SPECIAL,
        onClick: () => {
            console.log('Hi there!');
        },
        reverse: false,
        disabled: false,
        icon: <AddIcon />,
    },
};

export const SpecialOnlyIcon: Story = {
    args: {
        variant: BUTTON_TYPES.SPECIAL,
        onClick: () => {
            console.log('Hi there!');
        },
        reverse: false,
        disabled: false,
        icon: <AddIcon />,
    },
};
