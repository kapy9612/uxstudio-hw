import { Meta, StoryObj } from '@storybook/react';

import { LoadingScreen } from './LoadingScreen';

export default {
    title: 'Components / Loading Screen',
    component: LoadingScreen,
} as Meta<typeof LoadingScreen>;

type Story = StoryObj<typeof LoadingScreen>;

export const Default: Story = {
    args: {},
};
