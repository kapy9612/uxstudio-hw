import styled from 'styled-components';

export const StyledOverlay = styled.div`
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
`;
