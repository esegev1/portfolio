import React from 'react';
import { useState } from 'react'


const Intro = () => {
    const intro = [
        `I’m Eric, I’m a data driven Ops and Product leader with deep tech industry experience.`,
        `But above all else, `,
        `I'm a builder`,
        `, check out my projects below!`
    ];

    const companies = [
        { id: 0, name: 'google', title: 'Product Lead, Payment Systems', facts: [`Supported YouTube's launch of Shorts monetization`, 'Introduced new tool to capture terms from thousands of contracts'] },
        { id: 1, name: 'salesforce', title: 'Sr. Mgr, Quota & capacity Planning', facts: ['Managed team of 12 resposible for sales quotas for over 10k reps', 'Obtained internal funding to build JavaScript/HTML/CSS based tooling for quota planning'] },
        { id: 2, name: 'facebook', title: 'Sales Operations Analyst', facts: ['Supported sales teams responisble for $XXXM revenue', ''] },
        { id: 3, name: 'nielsen', title: 'Associate, Emereging Growth', facts: ['Built pricing tool using JavaScript', 'Partnered with Music start-ups on data products'] },
    ]

    // State - stores the text content
    const [selectedContent, setSelectedContent] = useState(null);

    const handleClick = (content) => {
        console.log(`id: ${content.target.id}`);
        console.log(`company: ${companies[content.target.id].name}`);
        setSelectedContent(experience[content.target.id]);
    }

    const companyLinks = companies.map((company) =>
        <button key={company.id} onClick={handleClick} className="employer" name={company.name}>
            <img id={company.id} src={`/images/${company.name}.png`} />
        </button>
    );

    const experience = companies.map((company) =>
        <React.Fragment key={company.id}>
            <h3>{company.title}</h3>
            <ul>
                <li>{company.facts[0]}</li>
                <li>{company.facts[1]}</li>
            </ul>
        </React.Fragment>
    );

    return (
        <section className="aboutMeContainer">
            <section className="aboutMe">
                <section className="intro">
                    <h1 id="hello">Hello!</h1>
                    <p id="p1">{intro[0]}</p>
                    <p id="p2">{intro[1]}<span id="builder">{intro[2]}</span>{intro[3]}</p>
                </section>
                <div className="eric">
                    <img src="/images/ericlogo.png" />
                </div>
                <div className="background">
                    <h2 id="backgroundTitle">Background</h2>
                    <section className="experience">
                        {companyLinks}
                    </section>
                    {/* Display content when a button is clicked */}
                    {selectedContent && (
                        <div className="details">
                            {selectedContent}
                        </div>
                    )}
                </div>
            </section>
        </section>
    )
};

export default Intro;



