import styled from 'styled-components';

import { ProfilePictureSize } from '@components/ProfilePicture/ProfilePicture';

import { GreyColor } from '@styles/global';

import dummyPicture from '@assets/Default.png';

export const StyledProfilePicture = styled.div<{
    url?: string;
    size?: ProfilePictureSize;
}>`
    display: flex;
    width: ${(props) =>
        props.size === ProfilePictureSize.BIG ? '5.5rem' : '2.5rem'};
    height: ${(props) =>
        props.size === ProfilePictureSize.BIG ? '5.5rem' : '2.5rem'};
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 50%;
    box-sizing: border-box;
    border: 1px solid ${GreyColor.G70};
    background-image: ${(props) =>
        props.url ? `url(${props.url})` : `url(${dummyPicture.src})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    background-color: lightgray;
`;
