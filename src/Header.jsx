const Header = () => {
    //social links to include in header
    const socialLinks = [
        { id: 1, link: `mailto:esegev1@gmail.com`, image: `emailLogo.png` },
        { id: 2, link: `https://github.com/esegev1`, image: `gitHubLogo.png` },
        { id: 3, link: `https://www.linkedin.com/in/ericsegev/`, image: `linkedInLogo.png` },
    ];

    //loop through socialLinks to create link elements
    const linksSection = socialLinks.map((link) =>
        <a key={link.id} href={link.link} target="_blank">
            <img src={'/images/' + link.image} />
        </a>
    );

    return (
        <>
            <header>
                <nav>
                    {/* creat logo */}
                    <div className="myLogo">ES</div>
                    
                    {/* create proffesional social link container */}
                    <div className="socialLinks">
                        {/* add links */}
                        {linksSection}
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;