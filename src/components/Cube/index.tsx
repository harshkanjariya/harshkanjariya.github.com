import React from 'react';
import './Cube.css';

const Cube: React.FC<React.HTMLProps<any>> = () => (
    <div className="cube-wrapper">
        <div className="face face-front" />
        <div className="face face-left" />
        <div className="face face-right" />
        <div className="face face-back" />
        <div className="face face-up" />
        <div className="face face-down" />
    </div>
);

export default Cube;
