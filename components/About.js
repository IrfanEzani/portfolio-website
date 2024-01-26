const About = () => {
  return (
    <div className="section about section_" id="section-resume">
      <div className="content">
        <div className="title">
          <div className="title_inner">About Me</div>
        </div>
        <div className="image">
          <img src="images/about-pic.png" alt="" />
        </div>
        <div className="desc">
          <p>
          Hey there, <br /> 
          <br />
          I'm Irfan, a part-time tech aficionado and Computer Science major at the University of Maryland. I'm interested in unraveling the hidden insights of data around us.<br />
          <br />
          I had the chance to apply my analytical skills as a Business Analyst Intern at PETRONAS and utilizing my web development expertise at base.initiative. I've been the Director of Communications for the National Assembly of Malaysian Students in the USA for the past 2 years, exploring Malaysian hospitality in the States.<br />
          <br />
          I spend my time diving into the realm of Large Language Models, Generative AI, and cloud computing. When I'm not immersed in the digital world, I'm out capturing life through a lens, sketching my next big idea, exploring places or on a quest to master the art of playing the piano.
          </p>
          <div className="info-list">
            <ul>
              <li>
                <strong>Let's connect: </strong> hello@irfanezani.com
              </li>
            </ul>
          </div>
          <div className="bts">
            <a href="https://drive.google.com/file/d/1RW9qSKtjjer5cDKunpUhs_S2wRsLfxXg/view?usp=sharing" className="btn fill" data-text="Download CV">
              Download Resume
            </a>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default About;
