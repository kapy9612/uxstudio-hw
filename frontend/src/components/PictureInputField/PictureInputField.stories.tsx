import { Meta, StoryObj } from '@storybook/react';

import { PictureInputField } from './PictureInputField';

export default {
    title: 'Components / Picture Input Field',
    component: PictureInputField,
} as Meta<typeof PictureInputField>;

type Story = StoryObj<typeof PictureInputField>;

export const Default: Story = {
    args: {
        label: 'Label',
        placeholder: 'Example',
    },
};
