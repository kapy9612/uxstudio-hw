import React from 'react';

import { StyledProfilePicture } from '@components/ProfilePicture/ProfilePicture.styled';

export enum ProfilePictureSize {
    SMALL,
    BIG,
}

type ProfilePictureProps = {
    url?: string;
    size?: ProfilePictureSize;
};
export function ProfilePicture({ url, size }: ProfilePictureProps) {
    return <StyledProfilePicture $url={url} size={size} />;
}
