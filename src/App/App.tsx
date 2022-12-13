import React from 'react';
import './App.css';
import Home from '../pages/Home';
import PageWrapper from '../components/PageWrapper';
import Projects from '../pages/Projects';
import Background from '../pages/Background';

const App: React.FC<React.HTMLProps<any>> = () => (
    <div className="App">
        <PageWrapper>
            <Home />
            <Projects />
            <Background />
        </PageWrapper>
    </div>

);

export default App;
