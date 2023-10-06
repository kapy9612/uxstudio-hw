import styled, { css } from 'styled-components';

import { AlignType, GreyColor, SpacingToken } from '@styles/global';

export enum View {
    MOBILE,
    DESKTOP,
}
export const StyledHeaderContainer = styled.header`
    display: grid;
    align-items: center;
    grid-template-columns: 1fr auto 1fr;
    //width: auto;
    //flex-shrink: 0;
    background: ${GreyColor.G100};
    border-top: 1px solid ${GreyColor.G60};
    border-bottom: 1px solid ${GreyColor.G60};
    box-sizing: border-box;

    @media (max-width: 992px) {
        grid-template-columns: 6rem auto 6rem;
    }

    @media (max-width: 592px) {
        grid-template-columns: auto;
    }
`;

export const StyledHeaderInnerWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 48rem;
    padding: 1.5rem;
    height: 6rem;
    gap: ${SpacingToken.PX16};
    box-sizing: border-box;
    justify-content: space-between;
    align-content: space-between;
    border-left: 1px solid ${GreyColor.G60};
    border-right: 1px solid ${GreyColor.G60};

    @media (max-width: 992px) {
        width: 100%;
    }
`;

export const Flex = styled.div<{
    $gap?: SpacingToken;
    $view?: View;
}>`
    display: ${(props) => (props.$view === View.MOBILE ? 'none' : 'flex')};
    align-items: center;
    gap: ${(props) => props.$gap || SpacingToken.PX16};

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

export const StyledHeaderSideWrapper = styled.div<{
    $align: AlignType;
}>`
    padding: 1.5rem 1.75rem;
    justify-self: ${(props) => props.$align};

    @media (max-width: 592px) {
        display: none;
    }
`;
