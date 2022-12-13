import React from 'react';
import CardProps from './Card.props';
import './Card.css';

const Card: React.FC<CardProps> = (
    {
        text,
        onClick,
    },
) => (
    // @ts-ignore
    <div className="card" onClick={onClick}>
        <div>
            <span className="logo-char">{text[0].toUpperCase()}</span>
            <span className="title">{text}</span>
        </div>
    </div>
);

export default Card;
