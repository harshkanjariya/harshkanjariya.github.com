import React from 'react';
import Typewriter, { TypewriterClass } from 'typewriter-effect';
import './Home.css';
import HoverBox from '../../components/HoverBox/HoverBox';
import PageProps from '../../components/PageWrapper/PageProps';
import Header from '../../components/Header/Header';

const Home: React.FC<PageProps> = (
    {
        nextPage,
        previousPage,
        className,
    },
) => {
    const words: string[] = [
        'Harsh Kanjariya',
        'Web Developer',
        'Android Developer',
    ];

    const titleAnimation = (writer: TypewriterClass) => {
        writer
            .changeDelay(50)
            .changeDeleteSpeed(25);
        words.forEach((word) => {
            writer.typeString(word)
                .pauseFor(2000)
                .deleteChars(word.length);
        });
        writer.start();
    };
    const typewriterOptions = {
        autoStart: true,
        loop: true,
    };

    return (
        <div className={`home-page ${className}`}>
            <Header
                nextPage={nextPage}
                previousPage={previousPage}
                nextTitle="Projects"
                previousTitle="Background"
            />
            <div className="animated-title">
                Hello, I&apos;m <Typewriter options={typewriterOptions} onInit={titleAnimation} />
            </div>
            <div className="social-links">
                <HoverBox
                    src="/images/gmail.png"
                    alt="logo"
                    size={60}
                    leftColor="#404040"
                    rightColor="#505050"
                    mainColor="white"
                    href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=code.harshkanjariya@gmail.com"
                    target="_blank"
                />
                <HoverBox
                    src="/images/instagram.jpeg"
                    alt="logo"
                    size={60}
                    leftColor="#404040"
                    rightColor="#505050"
                    mainColor="black"
                    href="https://www.instagram.com/harsh_kanjariya_/"
                    target="_blank"
                />
            </div>
            <div className="code-links">
                <HoverBox
                    src="/images/github.png"
                    alt="logo"
                    size={60}
                    leftColor="#404040"
                    rightColor="#505050"
                    mainColor="black"
                    href="https://github.com/harshkanjariya"
                    target="_blank"
                />
                <HoverBox
                    src="/images/stackoverflow.png"
                    alt="logo"
                    size={60}
                    leftColor="#404040"
                    rightColor="#505050"
                    mainColor="black"
                    href="https://stackoverflow.com/users/11619191/harsh-kanjariya"
                    target="_blank"
                />
            </div>
        </div>
    );
};

export default Home;
