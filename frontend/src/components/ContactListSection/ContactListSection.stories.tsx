import { Meta, StoryObj } from '@storybook/react';

import { ContactListSection } from './ContactListSection';

import dummyAvatar from '@assets/Lucy.png';

export default {
    title: 'Components / Contact List Section',
    component: ContactListSection,
} as Meta<typeof ContactListSection>;

type Story = StoryObj<typeof ContactListSection>;

export const Default: Story = {
    args: {
        data: [
            {
                id: 1,
                name: 'Jonas Jones',
                avatar: dummyAvatar.src,
                phone: '+36 01 234 5678',
                email: 'dummy1@email.com',
            },
            {
                id: 2,
                name: 'Jonas Jones',
                avatar: dummyAvatar.src,
                phone: '+36 01 234 5678',
                email: 'dummy2@email.com',
            },
            {
                id: 3,
                name: 'Jonas Jones',
                avatar: dummyAvatar.src,
                phone: '+36 01 234 5678',
                email: 'dummy3@email.com',
            },
            {
                id: 4,
                name: 'Jonas Jones',
                avatar: dummyAvatar.src,
                phone: '+36 01 234 5678',
                email: 'dummy4@email.com',
            },
        ],
    },
};
