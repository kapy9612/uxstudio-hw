import type { Colors } from '@/styles/global';
import {
    FontFamily,
    FontSize,
    FontWeight,
    LineHeight,
    SpacingToken,
    TextAlign,
    TextColor,
} from '@/styles/global';
import styled, { css } from 'styled-components';

export type CommonTypographyProps = {
    $alignment?: TextAlign;
    $color?: Colors;
    $fontFamily?: FontFamily;
    $lineHeight?: LineHeight;
    $size?: FontSize;
    $weight?: FontWeight;
    $opacity?: string;
    $letterSpacing?: boolean;
    $width?: string;
    $marginBottom?: SpacingToken | string;
};

export const commonTypographyStyles = css<CommonTypographyProps>`
    color: ${(props) => props.$color || TextColor.PRIMARY};
    font-size: ${(props) => props.$size || FontSize.PX16};
    font-family: ${(props) => props.$fontFamily || FontFamily.LEXEND_DECA};
    font-style: normal;
    font-weight: ${(props) => props.$weight || FontWeight.REGULAR};
    line-height: ${(props) => props.$lineHeight};
    text-align: ${(props) => props.$alignment || TextAlign.LEFT};
    opacity: ${(props) => props.$opacity || ''};
    width: ${(props) => props.$width || ''};
    letter-spacing: ${(props) => (props.$letterSpacing ? '0.01rem' : 'unset')};

    //For simple Spacing
    margin-bottom: ${(props) => props.$marginBottom || ''};
`;

export const StyledBody = styled.span<CommonTypographyProps>`
    ${commonTypographyStyles};
`;

export const StyledH1 = styled.h1<CommonTypographyProps>`
    ${commonTypographyStyles};
`;

export const StyledH2 = styled.h2<CommonTypographyProps>`
    ${commonTypographyStyles};
`;

export const StyledH3 = styled.h3<CommonTypographyProps>`
    ${commonTypographyStyles};
`;
