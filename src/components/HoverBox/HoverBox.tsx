import React from 'react';
import HoverBoxProps from './HoverBox.props';
import './HoverBox.css';

const HoverBox: React.FC<HoverBoxProps> = (
    {
        src,
        alt,
        size,
        leftColor,
        rightColor,
        mainColor,
        href,
        target,
    },
) => {
    const defaultColor = '#505050';
    const mainStyle = {
        width: size,
        height: size,
    };
    const imageStyle = {
        backgroundColor: mainColor || defaultColor,
    };
    const leftBaseStyle = {
        backgroundColor: leftColor || defaultColor,
    };
    const rightBaseStyle = {
        backgroundColor: rightColor || defaultColor,
    };

    return (
        <div className="hoverbox" style={mainStyle}>
            <a className="hoverbox-anchor" href={href} target={target}>
                <img className="hoverbox-img" src={src} alt={alt} style={imageStyle} />
                <span className="hoverbox-left-base" style={leftBaseStyle} />
                <span className="hoverbox-right-base" style={rightBaseStyle} />
            </a>
        </div>
    );
};

export default HoverBox;
