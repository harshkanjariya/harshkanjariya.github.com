import React, { useState } from 'react';
import './PageWrapper.css';

interface PageWrapperProps {
    children: any[];
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState('next');

    const getNextValue = () => (current === children.length - 1 ? 0 : current + 1);
    const getPreviousValue = () => (current === 0 ? children.length - 1 : current - 1);

    const nextPage = () => {
        setCurrent(getNextValue());
        setDirection('next');
    };

    const previousPage = () => {
        setCurrent(getPreviousValue());
        setDirection('previous');
    };

    const childs = children.map((element, index) => {
        const Element = element.type;
        let className;
        if (index === current) {
            className = 'current-page';
        } else if (index === getNextValue()) {
            className = `right-page ${direction}`;
        } else if (index === getPreviousValue()) {
            className = `left-page ${direction}`;
        } else {
            className = 'back-page';
        }
        return (
            <Element
                key={`${index}element`}
                nextPage={nextPage}
                previousPage={previousPage}
                className={`page ${className}`}
            />
        );
    });
    return (
        <div className="page-wrapper">
            {childs}
        </div>
    );
};

export default PageWrapper;
