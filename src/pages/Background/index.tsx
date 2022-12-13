import React from 'react';
import styled from 'styled-components';
import PageProps from '../../components/PageWrapper/PageProps';
import Header from '../../components/Header/Header';
import Cube from '../../components/Cube';

const MainDiv = styled.div`
  text-align: center;
  padding: 100px;
  position: relative;
  perspective: 500px;
`;

const Background: React.FC<PageProps> = (
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
            <MainDiv>
                <Cube />
            </MainDiv>
        </div>
    );
};

export default Background;
