import React from 'react';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import './Header.css';

interface HeaderProps extends React.HTMLProps<HTMLDivElement> {
    nextPage: any;
    previousPage: any;
    nextTitle: string;
    previousTitle: string;
}

const Header: React.FC<HeaderProps> = (
    {
        nextPage,
        previousPage,
        nextTitle,
        previousTitle,
    },
) => (
    <header>
        <div
            className="previous-btn"
            onClick={previousPage}
        >
            <ArrowBack fontSize="small" />&nbsp;&nbsp;{previousTitle}
        </div>
        <div
            className="next-btn"
            onClick={nextPage}
        >
            {nextTitle}&nbsp;&nbsp;<ArrowForward fontSize="small" />
        </div>
    </header>

);

export default Header;
