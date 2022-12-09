import React from 'react';
import PageProps from '../../components/PageWrapper/PageProps';
import Header from '../../components/Header/Header';

const Projects: React.FC<PageProps> = (
    {
        nextPage,
        previousPage,
        className,
    },
) => {
    const style2 = {
        width: '100vw',
        height: '100vh',
        background: '#c0c0ff',
    };
    return (
        <div className={`projects-page ${className}`} style={style2}>
            <Header
                nextPage={nextPage}
                previousPage={previousPage}
                nextTitle="Projects2"
                previousTitle="Home"
            />
        </div>
    );
};

export default Projects;
