/* eslint-disable global-require */
import { useEffect, useRef } from 'react';
import { NumberedHeading } from '@common/styles';
import Image from 'next/image';
import { skills } from '@config';
import { srConfig } from '@config/sr';
import { StyledAboutSection, StyledText, StyledPic } from './styles';

const About = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    const ScrollReveal = require('scrollreveal');
    const sr = ScrollReveal.default();
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <NumberedHeading>About Me</NumberedHeading>
      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! I&apos;m fotiecodes, a Software Developer, AI learner and Cloud Enthusiast.
            </p>
            <p>
              I enjoy building beautiful, reliable and highly responsive web apps for the web.
              <br />
              Apart from that I love getting involved in Competitive Programming and Problem
              Solving. Equally passionate about making open-source more accessible, creating
              technology to elevate people, and building community.
            </p>
            <br />
            <p>Here are a few technologies i enjoy working with:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <Image
              width={300}
              height={300}
              blu="true"
              src="/avatar.jpg"
              alt="Avatar"
              className="img"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
