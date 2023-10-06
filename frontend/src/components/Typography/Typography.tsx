import type { FC, PropsWithChildren } from 'react';
import React from 'react';

import {
    CommonTypographyProps,
    StyledBody,
    StyledH1,
    StyledH2,
    StyledH3,
} from '@components/Typography/Typography.styled';

import {
    Colors,
    FontFamily,
    FontSize,
    FontWeight,
    LineHeight,
} from '@styles/global';

export type TextProps = PropsWithChildren<CommonTypographyProps> & {
    color?: Colors;
    testId?: string;
};

export enum TypographyLevel {
    H1,
    H2,
    H3,
    BODY,
    MESSAGE,
}

export type TypographyType = TextProps & {
    level: TypographyLevel;
};

export function Typography({
    color,
    level,
    children,
    ...props
}: TypographyType) {
    switch (level) {
        case TypographyLevel.H1:
            return (
                <H1 color={color} {...props}>
                    {children}
                </H1>
            );
        case TypographyLevel.H2:
            return (
                <H2 color={color} {...props}>
                    {children}
                </H2>
            );
        case TypographyLevel.H3:
            return (
                <H3 color={color} {...props}>
                    {children}
                </H3>
            );
        case TypographyLevel.BODY:
            return (
                <Body color={color} {...props}>
                    {children}
                </Body>
            );
        case TypographyLevel.MESSAGE:
            return (
                <Message color={color} {...props}>
                    {children}
                </Message>
            );
        default:
            console.error(level);
            return <>Error, unknown typography level: {level}</>;
    }
}
const H1: FC<TextProps> = ({ color, testId, ...props }) => {
    return (
        <StyledH1
            data-testid={testId}
            $size={FontSize.PX32}
            $lineHeight={LineHeight.PX48}
            $fontFamily={FontFamily.GLYSA}
            $weight={FontWeight.MEDIUM}
            $color={color}
            {...props}
        />
    );
};

const H2: FC<TextProps> = ({ color, testId, ...props }) => (
    <StyledH2
        data-testid={testId}
        $size={FontSize.PX24}
        $lineHeight={LineHeight.PX40}
        $fontFamily={FontFamily.GLYSA}
        $weight={FontWeight.MEDIUM}
        $color={color}
        {...props}
    />
);
const H3: FC<TextProps> = ({ color, testId, ...props }) => (
    <StyledH3
        data-testid={testId}
        $size={FontSize.PX16}
        $lineHeight={LineHeight.PX24}
        $fontFamily={FontFamily.LEXEND_DECA}
        $weight={FontWeight.REGULAR}
        $color={color}
        $letterSpacing
        {...props}
    />
);

const Body: FC<TextProps> = ({ color, testId, ...props }) => {
    return (
        <StyledBody
            data-testid={testId}
            $size={FontSize.PX14}
            $lineHeight={LineHeight.PX20}
            $fontFamily={FontFamily.LEXEND_DECA}
            $weight={FontWeight.REGULAR}
            $color={color}
            $letterSpacing
            {...props}
        />
    );
};

const Message: FC<TextProps> = ({ color, testId, ...props }) => (
    <StyledBody
        data-testid={testId}
        $size={FontSize.PX12}
        $lineHeight={LineHeight.PX12}
        $fontFamily={FontFamily.LEXEND_DECA}
        $weight={FontWeight.REGULAR}
        $color={color}
        $letterSpacing
        {...props}
    />
);
