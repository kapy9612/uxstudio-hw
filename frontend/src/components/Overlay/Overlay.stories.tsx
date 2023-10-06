import { Meta, StoryObj } from '@storybook/react';

import { Form } from '@components/Form/Form';

import { Overlay } from './Overlay';

export default {
    title: 'Components / Overlay',
    component: Overlay,
} as Meta<typeof Overlay>;

type Story = StoryObj<typeof Overlay>;

export const Default: Story = {
    args: {
        children: <Form title={'Add contacts'} />,
    },
};
