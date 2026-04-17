import { useState } from 'react';
import './App.css';
import Train from '../assets/Train.jpg';

export function AboutMe(){

    const funFacts = [
        "I am a bit too work obsessed.",
        "I can rewatch my favorite movies way too many times.",
        "I cleaned my room instead of making homework.",
        "Sometimes I open my laptop just to stare at it.",
        "I lowkey enjoy fixing bugs… sometimes."
    ];

    const [factIndex, setFactIndex] = useState(0);

    const nextFact = () => {
        setFactIndex((prev) => (prev + 1) % funFacts.length);
    };

    return (
        <section className="aboutMe">
            <img className="aboutMe_img" src={Train} alt="Train" />

            <div>
                <h2 className="aboutMe_title">About Me</h2>

                <p className="aboutMe_text">
                    Hi! I'm a 17 year old Software Engineer in the making. I love watching series and working on projects.
                    I work at a beach restaurant and i'm currently learning React.
                </p>

                {/* CURRENTLY SECTION */}
                <div className="currently">
                    <h3>Currently</h3>
                    <ul>
                        <li>🎧 Listening to: music 24/7</li>
                        <li>📺 Watching: way too many movies</li>
                        <li>💻 Working on: this React app</li>
                    </ul>
                </div>

                {/* FUN FACT BUTTON */}
                <div className="funFacts">
                    <button onClick={nextFact}>
                        Tell me something random
                    </button>
                    <p className="factText">{funFacts[factIndex]}</p>
                </div>
            </div>
        </section>
    );
}