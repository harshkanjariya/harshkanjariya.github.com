import React, { useState } from 'react';
import { Dialog } from '@mui/material';
import styled from 'styled-components';
import './Projects.css';
import { Close, PlayCircle } from '@mui/icons-material';
import Header from '../../components/Header/Header';
import Card from '../../components/Card';
import PageProps from '../../components/PageWrapper/PageProps';
import data from '../../data.json';

const DialogBody = styled.div`
  padding: 0 20px 20px 20px;
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 1.25rem;
  padding: 20px;
`;
const DescriptionLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

const Projects: React.FC<PageProps> = (
    {
        nextPage,
        previousPage,
        className,
    },
) => {
    const [isDialogOpen, setIssDialogOpen] = useState(false);
    const [selectedData, setSelectedData] = useState<any>({});

    const createCards = (list: any) => list.map((project: any, index: number) => (
        <Card
            onClick={() => {
                setSelectedData(project);
                setIssDialogOpen(true);
            }}
            key={index}
            text={project.title}
        />
    ));

    const allLists = data.projects.map((language) => (
        <>
            <img src={language.image} className="card-list-label" alt={language.name} />
            <div className="card-list">
                {createCards(language.list)}
            </div>
        </>
    ));

    return (
        <div className={`projects-page ${className}`}>
            <Header
                nextPage={nextPage}
                previousPage={previousPage}
                nextTitle="Background"
                previousTitle="Home"
            />
            {allLists}
            <Dialog open={isDialogOpen}>
                <Close
                    style={{ position: 'absolute', right: 20, top: 20 }}
                    onClick={() => setIssDialogOpen(false)}
                />
                <Title>{selectedData.title}</Title>
                <DialogBody>
                    <span>
                        {selectedData.description}
                    </span>
                    <DescriptionLinks>
                        <a rel="noreferrer" target="_blank" href={selectedData.github}>
                            <img src="https://github.githubassets.com/favicons/favicon.svg" alt="github" />
                        </a>
                        {selectedData.preview && (
                            <a rel="noreferrer" target="_blank" href={selectedData.preview}>
                                <PlayCircle style={{ width: 40, height: 40 }} />
                            </a>
                        )}
                    </DescriptionLinks>
                </DialogBody>
            </Dialog>
        </div>
    );
};

export default Projects;
