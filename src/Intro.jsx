import React from 'react';
import { useState } from 'react'


const Intro = () => {
    /*******************************************************
    *                  DATA VARIABLES 
    ******************************************************/
    const intro = [
        `I’m Eric, I’m a data driven Ops and Product leader with deep tech industry experience.`,
        `But above all else, `,
        `I'm a builder`,
        `, check out my projects below!`
    ];

    const companies = [
        { id: 0, name: 'google', title: 'Product Lead, Payment Systems', facts: [`Supported YouTube's launch of Shorts monetization`, 'Introduced new tool to capture terms from thousands of contracts'] },
        { id: 1, name: 'salesforce', title: 'Sr. Mgr, Quota & capacity Planning', facts: ['Managed team of 12 resposible for sales quotas for over 10k reps', 'Obtained internal funding to build JavaScript/HTML/CSS based tooling for quota planning'] },
        { id: 2, name: 'facebook', title: 'Sales Operations Analyst', facts: ['Supported sales teams responisble for $XXXM revenue'] },
        { id: 3, name: 'nielsen', title: 'Associate, Emereging Growth', facts: ['Built pricing tool using JavaScript', 'Partnered with Music start-ups on data products'] },
    ]

    const background = 'Background';

    /*******************************************************
    *                  HANDLER FUNCTIONS  
    ******************************************************/
    const [visibility, setVisibility] = useState('none')

    const handleExperience = () => {
        //if background is hidden show it, otherwise hide it
        setVisibility(visibility === 'none' ? 'flex' : 'none')
    }

    const [employer, setEmployer] = useState(companies[0]);

    const handleEmployer = (company) => {
        setEmployer(company)
    }

    /*******************************************************
     *                  STYLE VARIABLES  
     ******************************************************/
    const ericStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',

    }

    const expIconStyle = {
        height: '25px',
        width: '25px',
        padding: '7px',
        borderRadius: '25px',
        background: 'white',
        boxShadow: '0 0 10px 4px #006742',
        marginLeft: '50px',
        animation: 'pulseShadow 2s infinite alternate'
    }

    const backgroundStyle = {
        display: visibility,
        width: '400px',
    }

    const employersStyle = {
        display: 'flex'
    }

    const employerImgStyle = {
        height: '45px',
    }


    return (
        <section className="aboutMeContainer">
            <section className="aboutMe">
                <section className="intro">
                    <h1 id="hello">Hello!</h1>
                    <p id="p1">{intro[0]}</p>
                    <p id="p2">{intro[1]}<span id="builder">{intro[2]}</span>{intro[3]}</p>
                </section>
                <div className="eric" style={ericStyle}>
                    <img onClick={handleExperience} src='/images/experience.png' style={expIconStyle} />
                    <img src="/images/ericlogo.png" />
                </div>
                <div className="background" style={backgroundStyle}>
                    <h2 id="backgroundTitle">{background}</h2>
                    <div style={employersStyle}>
                        {companies.map((company) => (
                            <button key={company.id} onClick={() => handleEmployer(company)} className="employer" name={company.name}
                                style={{
                                    border: 'none',
                                    borderBottom: company.id === employer.id ? '2px solid gray' : '2px solid white',
                                    
                                    background: 'none',
                                }}>
                                <img id={company.id} src={`/images/${company.name}.png`} style={employerImgStyle} />
                            </button>
                        ))}
                    </div>
                    <div>
                        <h3>{employer.title}</h3>
                        <ul>
                            {employer.facts.map((fact, index) => (
                                <li key={index}>{fact}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </section>
    )
};

export default Intro;



