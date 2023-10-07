import { Meta, StoryObj } from '@storybook/react';

import { ContactListItem } from './ContactListItem';

import dummyAvatar from '@assets/Lucy.png';

export default {
    title: 'Components / Contact List Item',
    component: ContactListItem,
} as Meta<typeof ContactListItem>;

type Story = StoryObj<typeof ContactListItem>;

export const Default: Story = {
    args: {
        contact: {
            id: 1,
            name: 'Jonas Jones',
            avatar: dummyAvatar.src,
            phone: '+36 01 234 5678',
        },
    },
};
