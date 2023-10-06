import type { Meta, StoryObj } from '@storybook/react';

import { Typography, TypographyLevel } from '@components/Typography/Typography';

import { TextColor } from '@styles/global';

export default {
    title: 'Components / Typography',
    component: Typography,
} as Meta<typeof Typography>;

type Story = StoryObj<typeof Typography>;

export const Headline1: Story = {
    args: {
        color: TextColor.PRIMARY,
        level: TypographyLevel.H1,
        children: 'Headline 1. Used for titles',
    },
};

export const Headline2: Story = {
    args: {
        color: TextColor.PRIMARY,
        level: TypographyLevel.H2,
        children: 'Headline 2. Used for subtitles',
    },
};

export const Headline3: Story = {
    args: {
        color: TextColor.PRIMARY,
        level: TypographyLevel.H3,
        children: 'Headline 3. Used for highlighting text in simple components',
    },
};

export const Body: Story = {
    args: {
        color: TextColor.PRIMARY,
        level: TypographyLevel.BODY,
        children: 'Body. Used for interactive elements',
    },
};

export const Message: Story = {
    args: {
        color: TextColor.PRIMARY,
        level: TypographyLevel.MESSAGE,
        children: 'Message. Used for displaying extensive info.',
    },
};
