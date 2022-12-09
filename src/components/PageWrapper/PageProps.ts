import React from 'react';

interface PageProps extends React.HTMLProps<HTMLDivElement> {
    nextPage?: Function;
    previousPage?: Function;
    className?: string;
}

export default PageProps;
