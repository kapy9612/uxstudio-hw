import { Meta, StoryObj } from '@storybook/react';

import { ContactInfo } from './ContactInfo';

import dummyAvatar from '@assets/Lucy.png';

export default {
    title: 'Components / Contact Info',
    component: ContactInfo,
} as Meta<typeof ContactInfo>;

type Story = StoryObj<typeof ContactInfo>;

export const Default: Story = {
    args: {
        contact: {
            name: 'Jonas Jones',
            avatar: dummyAvatar.src,
            phone: '+36 01 234 5678',
        },
    },
};
