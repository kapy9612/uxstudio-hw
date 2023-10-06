import { Meta, StoryObj } from '@storybook/react';

import { Form } from './Form';

export default {
    title: 'Components / Form',
    component: Form,
} as Meta<typeof Form>;

type Story = StoryObj<typeof Form>;

export const Default: Story = {
    args: {
        title: 'Add contact',
    },
};
