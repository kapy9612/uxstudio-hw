import type { Meta, StoryObj } from '@storybook/react';

import { SvgRotation, SvgSize, TextColor } from '@styles/global';

import { BackArrowIcon } from '../Icons/Icons';

export default {
    title: 'Components / Icon',
    component: BackArrowIcon,
} as Meta<typeof BackArrowIcon>;

type Story = StoryObj<typeof BackArrowIcon>;

export const Default: Story = {
    args: {
        rotation: SvgRotation.RIGHT,
        size: SvgSize.PX24,
        color: TextColor.CURRENT,
    },
};
