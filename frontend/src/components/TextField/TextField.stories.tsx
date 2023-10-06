import { Meta, StoryObj } from '@storybook/react';

import { TextField } from './TextField';

export default {
    title: 'Components / TextField',
    component: TextField,
} as Meta<typeof TextField>;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
    args: {
        label: 'Label',
        width: '200px',
        placeholder: 'Example',
    },
};
