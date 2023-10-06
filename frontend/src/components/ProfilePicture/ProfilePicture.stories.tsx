import { Meta, StoryObj } from '@storybook/react';

import { ProfilePicture, ProfilePictureSize } from './ProfilePicture';

import dummyPicture from '@assets/Lucy.png';

export default {
    title: 'Components / Profile Picture',
    component: ProfilePicture,
} as Meta<typeof ProfilePicture>;

type Story = StoryObj<typeof ProfilePicture>;

export const Small: Story = {
    args: {
        url: dummyPicture.src,
        size: ProfilePictureSize.SMALL,
    },
};
export const Big: Story = {
    args: {
        url: dummyPicture.src,
        size: ProfilePictureSize.BIG,
    },
};
