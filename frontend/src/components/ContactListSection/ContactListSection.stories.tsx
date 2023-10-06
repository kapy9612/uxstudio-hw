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
                name: 'Jonas Jones',
                avatar: dummyAvatar.src,
                phone: '+36 01 234 5678',
                email: 'dummy@email.com',
            },
            {
                name: 'Jonas Jones',
                avatar: dummyAvatar.src,
                phone: '+36 01 234 5678',
                email: 'dummy@email.com',
            },
            {
                name: 'Jonas Jones',
                avatar: dummyAvatar.src,
                phone: '+36 01 234 5678',
                email: 'dummy@email.com',
            },
            {
                name: 'Jonas Jones',
                avatar: dummyAvatar.src,
                phone: '+36 01 234 5678',
                email: 'dummy@email.com',
            },
        ],
    },
};
