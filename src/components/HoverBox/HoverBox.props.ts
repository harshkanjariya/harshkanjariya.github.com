import React from 'react';

export default interface HoverBoxProps
    extends React.HTMLProps<HTMLImageElement & HTMLAnchorElement> {
    size: number;
    leftColor?: string;
    rightColor?: string;
    mainColor?: string;
}
