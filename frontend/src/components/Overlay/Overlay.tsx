import React, { PropsWithChildren } from 'react';

import { StyledOverlay } from '@components/Overlay/Overlay.styled';

export type ContactInfoType = PropsWithChildren;
export function Overlay({ children }: ContactInfoType) {
    return <StyledOverlay>{children}</StyledOverlay>;
}
