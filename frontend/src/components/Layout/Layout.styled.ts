import styled, { css } from 'styled-components';

import {
    AlignType,
    FlexDirection,
    GreyColor,
    SpacingToken,
} from '@styles/global';

export enum View {
    MOBILE,
    DESKTOP,
}

export const Flex = styled.div<{
    $gap?: SpacingToken;
    $view?: View;
    $direction?: FlexDirection;
}>`
    display: ${(props) => (props.$view === View.MOBILE ? 'none' : 'flex')};
    align-items: center;
    gap: ${(props) => props.$gap || SpacingToken.PX16};
    flex-direction: ${(props) => props.$direction || 'unset'};

    ${(props) =>
        props.$view === View.DESKTOP
            ? css`
                  @media (max-width: 592px) {
                      display: none;
                  }
              `
            : css`
                  @media (max-width: 592px) {
                      display: flex;
                  }
              `}
`;

export const StyledLayoutWrapper = css`
    display: grid;
    align-items: center;
    grid-template-columns: 1fr auto 1fr;
    background: ${GreyColor.G100};

    box-sizing: border-box;

    @media (max-width: 992px) {
        grid-template-columns: 6rem auto 6rem;
    }

    @media (max-width: 592px) {
        grid-template-columns: auto;
    }
`;

export const StyledLayoutInnerWrapper = css`
    display: flex;
    align-items: center;
    width: 48rem;
    padding: 1.5rem;

    box-sizing: border-box;

    border-left: 1px solid ${GreyColor.G60};
    border-right: 1px solid ${GreyColor.G60};

    @media (max-width: 992px) {
        width: 100%;
    }
`;

export const StyledLayoutSideWrapper = styled.div<{
    $align?: AlignType;
}>`
    padding: 1.5rem 1.75rem;
    justify-self: ${(props) => props.$align};

    @media (max-width: 592px) {
        display: none;
    }
`;
