import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export enum GreyColor {
    G100 = '#141414',
    G90 = '#191919',
    G80 = '#1E1E1E',
    G70 = '#232323',
    G60 = '#282828',
    G50 = '#2D2D2D',
    G40 = '#323232',
    G30 = '#373737',
    G20 = '#3C3C3C',
    G10 = '#414141',
}

export enum TextColor {
    PRIMARY = '#FFFFFF',
    SECONDARY = '#FFFFFF8F',
    DISABLED = '#FFFFFF52',
    TRANSPARENT = 'transparent',
    CURRENT = 'currentColor',
}

export type Colors = GreyColor | TextColor;

export enum FontSize {
    PX12 = '0.75rem',
    PX14 = '0.875rem',
    PX16 = '1rem',
    PX24 = '1.5rem',
    PX32 = '2rem',
}

export enum LineHeight {
    PX12 = '0.75rem',
    PX20 = '1.25rem',
    PX24 = '1.5rem',
    PX40 = '2.5rem',
    PX48 = '3rem',
}

export enum FontWeight {
    REGULAR = '400',
    MEDIUM = '500',
}

export enum FontFamily {
    GLYSA = 'Glysa, sans-serif',
    LEXEND_DECA = 'Lexend Deca, sans-serif',
}

export enum TextAlign {
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right',
}

export enum SpacingToken {
    PX0 = '0',
    PX4 = '0.25rem',
    PX8 = '0.5rem',
    PX16 = '1rem',
    PX32 = '2rem',
    PX48 = '3rem',
    PX64 = '4rem',
    PX96 = '6rem',
}

export enum AlignType {
    START = 'flex-start',
    CENTER = 'center',
    END = 'flex-end',
    STRETCH = 'stretch',
}

export enum JustifyType {
    START = 'flex-start',
    CENTER = 'center',
    END = 'flex-end',
    STRETCH = 'stretch',
}

export enum FlexDirection {
    ROW = 'row',
    COLUMN = 'column',
    ROW_REVERSE = 'row-reverse',
    COLUMN_REVERSE = 'column-reverse',
}

export enum SvgSize {
    PX20 = 20,
    PX24 = 24,
}

export enum SvgRotation {
    RIGHT = '90',
    DOWN = '180',
    LEFT = '270',
    UP = '0',
}

export const GlobalStyle = createGlobalStyle`
    ${reset}
    
    html,
    body{
      scroll-behavior: smooth;
      font-family: 'Open Sans', sans-serif;
      font-size: 16px;
      line-height: 150%;
      font-weight: 400;
    }
    
    a{
      text-decoration: none;
    }
    
    @media (max-width: 768px) {
      html,
      body{
      font-size: 14px;
      }
    }
`;
