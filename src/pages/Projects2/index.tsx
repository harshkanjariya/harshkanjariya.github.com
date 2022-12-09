import React from 'react';
import PageProps from '../../components/PageWrapper/PageProps';
import Header from '../../components/Header/Header';

const Projects2: React.FC<PageProps> = (
    {
        nextPage,
        previousPage,
        className,
    },
) => {
    const style2 = {
        width: '100vw',
        height: '100vh',
        background: '#ffc0c0',
    };
    return (
        <div className={`projects-page ${className}`} style={style2}>
            <Header
                nextPage={nextPage}
                previousPage={previousPage}
                nextTitle="Home"
                previousTitle="Projects"
            />
        </div>
    );
};

export default Projects2;
