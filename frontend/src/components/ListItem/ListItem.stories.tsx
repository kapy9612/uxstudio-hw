import { Meta, StoryObj } from '@storybook/react';

import { SettingsIcon } from '@components/Icons/Icons';

import { ListItem } from './ListItem';

export default {
    title: 'Components / List Item',
    component: ListItem,
} as Meta<typeof ListItem>;

type Story = StoryObj<typeof ListItem>;

export const Default: Story = {
    args: {
        icon: <SettingsIcon />,
        label: 'Edit',
        onClick: () => console.log('Hi there!'),
    },
};
