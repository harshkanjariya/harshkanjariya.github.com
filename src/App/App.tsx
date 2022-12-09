import React from 'react';
import './App.css';
import Home from '../pages/Home';
import PageWrapper from '../components/PageWrapper';
import Projects from '../pages/Projects';
import Projects2 from '../pages/Projects2';

const App: React.FC<React.HTMLProps<any>> = () => (
    <div className="App">
        <PageWrapper>
            <Home />
            <Projects />
            <Projects2 />
        </PageWrapper>
    </div>

);

export default App;
