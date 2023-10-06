import { Meta, StoryObj } from '@storybook/react';

import { AddIcon, LightModeIcon, SettingsIcon } from '@components/Icons/Icons';

import { Dropdown } from './Dropdown';

export default {
    title: 'Components / Dropdown',
    component: Dropdown,
} as Meta<typeof Dropdown>;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
    args: {
        items: [
            {
                icon: <SettingsIcon />,
                label: 'Settings',
                onClick: () => console.log('Hi there!'),
            },
            {
                icon: <AddIcon />,
                label: 'Add',
                onClick: () => console.log('Hi there!'),
            },
            {
                icon: <LightModeIcon />,
                label: 'Light',
                onClick: () => console.log('Hi there!'),
            },
        ],
    },
};
